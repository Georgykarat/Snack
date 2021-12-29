from django.contrib.auth import login, authenticate
from django.http import HttpResponseRedirect
from django.shortcuts import render
from login.forms import AuthForm
from django.contrib.auth.views import LoginView
from feed.models import Feed
from registration.models import RegMailCode
from django.contrib.auth.models import User
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.text import MIMEText
from email import encoders
import random
import string


def send_email(addr_to, msg_subj, msg_text):
    addr_from = "snackinfo80@gmail.com"
    password = "Snackorg!8080info"

    msg = MIMEMultipart()
    msg['From'] = addr_from
    msg['To'] = addr_to
    msg['Subject'] = msg_subj

    body = msg_text
    msg.attach(MIMEText(body, 'plain'))

    #Mail provider settings
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(addr_from, password)
    server.send_message(msg)
    server.quit()


def code_generate(l):
    return ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(l))



# Create your views here.


def login_view(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        return HttpResponseRedirect('../feed')
    else:    
        if request.method == 'POST':
            auth_form = AuthForm(request.POST)
            if auth_form.is_valid():
                mail = auth_form.cleaned_data['mail']
                password = auth_form.cleaned_data['password']
                user = authenticate(username=mail.lower(), password=password)
                if user:
                    if user.is_active:
                        login(request, user)
                        return HttpResponseRedirect('../feed')
                    else:
                        auth_form.add_error('__all__', 'Erroe! An account is inactive!')
                else:
                    auth_form.add_error('__all__', 'Login or password incorrect')
        else:
            auth_form = AuthForm()
        context = {
            'form': auth_form
        }
        return render(request, 'login/login.html', context=context)


def resetpass(request):
    ourmail = request.POST['resetmail']
    if ourmail != "":
        if Feed.objects.filter(mail=ourmail.lower()).exists():
            code = code_generate(6)
            regcode = 'Hi! Your code is ' + code
            send_email(ourmail, 'Password reset code', regcode)
            testuser = RegMailCode.objects.filter(mail=ourmail.lower())
            if testuser:
                testuser.delete()
            tempuser = RegMailCode(mail=ourmail.lower(), mailcode=code)
            tempuser.save()
        else:
            pass
    else:
        return None


def getnewpass(request):
    ourmail = request.POST['resetmail']
    regcode = request.POST['regcode']
    if regcode != "" and ourmail != "":
        realcodeusercopy = RegMailCode.objects.filter(mail = ourmail.lower())
        realcode = RegMailCode.objects.filter(mail = ourmail.lower()).values_list('mailcode')[0][0]
        if regcode == realcode:
            newpass = code_generate(20)
            letterbody = 'Hi! Your new password: ' + newpass
            send_email(ourmail, 'Your new Snack password', letterbody)
            ouruser = User.objects.get(username__exact = ourmail.lower())
            ouruser.set_password(newpass)
            ouruser.save()
            # Clean our garbage in temp codes db
            realcodeusercopy.delete()
            return HttpResponseRedirect('/login')
        else:
            return None
    else:
        return None



class MainLoginView(LoginView):
    template_name = 'login/login.html'