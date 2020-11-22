from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from registration.forms import UserForm
from django.views import View
from feed.models import Feed


def registration(request, *args, **kwargs):
    return render(request, 'registration/registration.html', {})


class Registration(View):

    def get(self, request):
        user_form = UserForm()
        return render(request, 'registration/registration.html', context={'user_form': user_form})
    
    def post(self, request):
        user_form = UserForm(request.POST)

        if user_form.is_valid():
            # business logic add to database
            Feed.objects.create(**user_form.cleaned_data)
            username = request.POST['mail']
            password = request.POST['password']
            varhash = make_password(password, None, 'md5')
            newuser = User(username=username, password=varhash)
            newuser.save()
            login(request, newuser)
            return HttpResponseRedirect('../feed')
        return render(request, 'registration/registration.html', context={'user_form': user_form})
