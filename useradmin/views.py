from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def choice(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        return render(request, 'useradmin/useradmin.html', {})
    else:
        return django.http.HttpResponseNotFound


def main(request, *args, **kwargs):
    pass
