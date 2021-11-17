from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotFound
from django.views import generic
from feed.models import Feed
from useradmin.models import AdminFaq
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


def quiztasktype(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        data = Feed.objects.filter(mail=target_mail).values_list('first_name', 'last_name', 'country')
        tasksex = AdminFaq.objects.all()
        return render(request, 'quiztasktype/quiztasktype.html', {
            'first_name': data[0][0],
            'last_name': data[0][1],
            'country': data[0][2],
        })
    else:
        return django.http.HttpResponseNotFound
    

class QuizTaskTypeListView(generic.ListView):
    model = AdminFaq
    template_name = 'quiztasktype/quiztasktype.html'


    def get_context_data(self, *args, **kwargs):
        request_test = self.request
        if request_test.user.is_authenticated == True:
            target_mail = request_test.user.username
            data = Feed.objects.filter(mail=target_mail).values_list('first_name', 'last_name', 'country', 'accessid')
            if data[0][3] < 2:
                return django.http.HttpResponseNotFound
            else:
                # Checking access, userdata gathering and saving in context dict
                tasksex = AdminFaq.objects.all()
                context = {}
                context['first_name'] = data[0][0]
                context['last_name'] = data[0][1]
                context['country'] = data[0][2]
                # Getting the list from the db on Faq
                faqdata = AdminFaq.objects.all()
                context['listdata'] = faqdata
                
                return context
        else:
            return django.http.HttpResponseNotFound
    
