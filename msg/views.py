from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from feed.models import Feed, AccountImage
from path.models import Rating, CourseBase
from m2m.models import PersonalGoals
from feed.forms import DocumentForm
from django.contrib.auth.views import LogoutView
from django.conf import settings
import datetime
import os
# Create your views here.

def msg(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        # Understand who is our user
        target_mail = request.user.username
        #Got id of the user
        userid = Feed.objects.filter(mail=target_mail).values_list('id')
        userid1 = userid[0][0]
        #Find today date
        today = datetime.datetime.today().strftime("%d.%m.%Y")
        #Get User information
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city')
        #Get user profile photo
        if AccountImage.objects.filter(mail=target_mail):
            photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
        else:
            photo = "files/guys.jpeg"
        begin_path = '/media/'
        return render(request, 'msg/msg.html', {
            'access': feed_data[0][0],
            'name': feed_data[0][1],
            'last_name': feed_data[0][2],
            'country': feed_data[0][3],
            'photo': photo,
            'begin_path': begin_path,
        })
    else:
        return HttpResponseRedirect('/login/')