from django.contrib.auth import login, authenticate
from django.http import HttpResponseRedirect
from django.shortcuts import render
from login.forms import AuthForm
from django.contrib.auth.views import LoginView

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
    pass


class MainLoginView(LoginView):
    template_name = 'login/login.html'