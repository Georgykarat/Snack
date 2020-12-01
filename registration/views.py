import string

from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from registration.forms import UserForm
from django.views import View
from feed.models import Feed
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
    return render(request, 'registration/registration.html', {})


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
            return render(request, 'registration/registration.html', context={'user_form': user_form})
    
    def post(self, request):
        user_form = UserForm(request.POST)

        if user_form.is_valid():
            # business logic add to database
            Feed.objects.create(**user_form.cleaned_data)
            username = (request.POST['mail']).lower()
            password = request.POST['password']

            varhash = make_password(password, None, 'md5')
            newuser = User(username=username, password=varhash)
            newuser.save()
            login(request, newuser)
            return HttpResponseRedirect('../feed')
        return render(request, 'registration/registration.html', context={'user_form': user_form})


