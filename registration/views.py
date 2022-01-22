import string

from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from registration.forms import UserForm
from django.views import View
from feed.models import Feed, Invites
from registration.models import RegMailCode

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.text import MIMEText
from email import encoders

from django.http import JsonResponse
import random


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


def registration(request, *args, **kwargs):
    return render(request, 'registration_v2/registration.html', {})


def mailcheck(request):
    if request.is_ajax():
        mailtocheck = request.GET.get('mailtocheck')
        if mailtocheck:
            if Feed.objects.filter(mail = mailtocheck).exists():
                return HttpResponseRedirect('/login/')
            else:
                pass
        else:
            pass



class Registration(View):


    def get(self, request):
        if request.is_ajax():
            flag = request.GET.get('flag')
            if flag == 'b':
                box_1 = request.GET.get('first_box')
                box_2 = request.GET.get('second_box')
                box_3 = request.GET.get('third_box')
                box_4 = request.GET.get('forth_box')
                mail = request.GET.get('usermale')
                # get code from db and delete stroke
                codek = RegMailCode.objects.filter(mail=mail).values_list('mailcode')
                code = codek[0][0]
                codek = RegMailCode.objects.filter(mail=mail)
                codek.delete()
                processedmail = mail.lower()
                if str(box_1) == code[0] and str(box_2) == code[1] and str(box_3) == code[2] and str(box_4) == code[3]:
                    return JsonResponse({'result': 1}, status=200)
                else:
                    return JsonResponse({'result': 2}, status=200)
            else:
                usermale = request.GET.get('usermale')
                code = code_generate(4)
                regcode = 'Your code is ' + code
                send_email(usermale, 'Registration code', regcode)
                testuser = RegMailCode.objects.filter(mail=usermale)
                if testuser:
                    testuser.delete()
                tempuser = RegMailCode(mail=usermale, mailcode=code)
                tempuser.save()
                return None
            # Yet no return
        else:
            user_form = UserForm()
            return render(request, 'registration_v2/registration.html', context={'user_form': user_form})
    
    def post(self, request):
        user_form = UserForm(request.POST)

        if user_form.is_valid():
            # check, do we already have the mail in our db
            mail_check = user_form.cleaned_data['mail']
            if Feed.objects.filter(mail='mail_check'.lower()):
                return HttpResponseRedirect('../login')
            else:
            # business logic add to database
                Feed.objects.create(**user_form.cleaned_data)
                username = (request.POST['mail'])
                password = request.POST['password']
                varhash = make_password(password, None, 'pbkdf2_sha1')
                tempusername = username
                newuser = User(username=tempusername.lower(), password=varhash)
                newuser.save()
                Feed.objects.filter(mail=username).update(password=None)
                Feed.objects.filter(mail=username).update(mail=username.lower())
                login(request, newuser)
                return HttpResponseRedirect('../feed')
        return render(request, 'registration_v2/registration.html', context={'user_form': user_form})


    def mailcheck(request):
        if request.is_ajax():
            mailtocheck = request.GET.get('mailtocheck')
            if mailtocheck:
                if Feed.objects.filter(mail = mailtocheck).exists():
                    return HttpResponseRedirect('/login/')
                else:
                    return None
            else:
                return None



def phase1_generatecode(request):
    if request.is_ajax():
        mail_to_reg = request.POST['mail'].lower()
        code = code_generate(8)
        regcode = 'Your code is ' + code
        send_email(mail_to_reg, 'Registration code', regcode)
        testuser = RegMailCode.objects.filter(mail=mail_to_reg)
        if testuser:
            testuser.delete()
        tempuser = RegMailCode(mail=mail_to_reg, mailcode=code)
        tempuser.save()
        return JsonResponse({}, status=200)


def createacc(request):
    if request.is_ajax():
        mail_to_reg = request.POST['mail'].lower()
        password = request.POST['password']
        codeprovided = request.POST['ourcode']
        code_check = RegMailCode.objects.filter(mail=mail_to_reg).values_list('mailcode')[0][0]
        if code_check and code_check == codeprovided:
            varhash = make_password(password, None, 'pbkdf2_sha1')
            newuser = User(username=mail_to_reg.lower(), password=varhash)
            newuser.save()
            login(request, newuser)
            code_check_to_delete = RegMailCode.objects.filter(mail=mail_to_reg)
            code_check_to_delete.delete()
            return JsonResponse({}, status=200)
        else:
            return JsonResponse({}, status=400)


def moveon(request, *args, **kwargs):
    return render(request, 'registration_secondstep/registration.html', {})


def createaccfeed(request):
    if request.is_ajax():
        if request.user.is_authenticated == True:    
            user_name = request.user.username
            if True:
                name = request.POST['name']
                surname = request.POST['name']
                country = request.POST['country']
                print(country)
                occupation = request.POST['occupation']
                invite = request.POST['invite']
                if name != "" and surname != "" and country != "" and occupation != "":
                    invite_gift = Invites.objects.filter(invite=invite)
                    if invite_gift.exists():
                        giftaccessid = invite_gift.values_list('accessid')[0][0]
                        newfeeduser = Feed(country=country, mail=user_name.lower(), activity=occupation, first_name=name, last_name=surname, accessid=int(giftaccessid))
                    else:
                        newfeeduser = Feed(country=country, mail=user_name.lower(), activity=occupation, first_name=name, last_name=surname)
                    newfeeduser.save()
                    return HttpResponseRedirect('/feed/')
                else:
                    return JsonResponse({'reason': 1}, status=401)
            else:
                return JsonResponse({'reason': 2}, status=402)
        else:
            return JsonResponse({'reason': 3}, status=403)
    else:
        return JsonResponse({'reason': 0}, status=404)


                    



