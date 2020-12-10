from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from feed.models import Feed
# Create your views here.

def choice(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        data = Feed.objects.filter(mail=target_mail).values_list('first_name', 'last_name', 'country')
        return render(request, 'useradmin/useradmin.html', {
            'first_name': data[0][0],
            'last_name': data[0][1],
        })
    else:
        return django.http.HttpResponseNotFound


def main(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        data = Feed.objects.filter(mail=target_mail).values_list('first_name', 'last_name', 'country')
        return render(request, 'frontend/frontend.html', {
            'first_name': data[0][0],
            'last_name': data[0][1],
            'country': data[0][2],
        })
    else:
        return django.http.HttpResponseNotFound


def faq(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        data = Feed.objects.filter(mail=target_mail).values_list('first_name', 'last_name', 'country')
        return render(request, 'faq/faq.html', {
            'first_name': data[0][0],
            'last_name': data[0][1],
            'country': data[0][2],
        })
    else:
        return django.http.HttpResponseNotFound
