from django.shortcuts import render
from django.http import HttpResponse


def home(request, *args, **kwargs):
    return render(request, 'home/home.html', {})
