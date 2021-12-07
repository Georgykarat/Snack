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


level_pics = [
    '/media/levels/0.svg',
    '/media/levels/1.svg',
    '/media/levels/2.svg',
]


def feed(request, *args, **kwargs):
    if request.user.is_authenticated == True:    
        target_mail = request.user.username
        #Got id of the user
        userid = Feed.objects.filter(mail=target_mail).values_list('id')
        userid1 = userid[0][0]
        #Search for goals
        impgoals = PersonalGoals.objects.filter(author_id=userid1, imp=True).all()
        goals = PersonalGoals.objects.filter(author_id=userid1, imp=False).all()
        #Find today date
        today = datetime.datetime.today().strftime("%d.%m.%Y")
        #Got exp quantity
        exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')
        exp1 = exp[0][0]
        i = 0 #Задали индекс счётчику
        while (exp1 >= (Rating.objects.filter(ratingid=i).values_list('rating_exp')[0][0])):
            i += 1 #Подняли счётчик, если экспы слишком много для уровня этого индекса
        level = Rating.objects.filter(ratingid=i-1).values_list('rating_name', 'rating_material')
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city')
        feed_data1 = Feed.objects.filter(mail=target_mail).values_list('last_course')
        last_course = CourseBase.objects.filter(courseid=feed_data1[0][0]).values_list('course_name')
        last_lesson = Feed.objects.filter(mail=target_mail).values_list('last_lesson')
        last_lesson_name = CourseBase.objects.filter(courseid=feed_data1[0][0], lessonid=last_lesson[0][0]).values_list('lesson_name')
        our_level_pic = level_pics[i-1]
        if AccountImage.objects.filter(mail=target_mail):
            photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
        else:
            photo = "files/guys.jpeg"
        begin_path = '/media/'
        end_exp = Rating.objects.filter(ratingid=i).values_list('rating_exp')[0][0]
        percent = exp1 / end_exp * 100
        left_percent = 100 - percent
        if 0 <= percent < 33:
            color = 'red'
        elif 33 <= percent <= 67:
            color = 'orange'
        else:
            color = '#27cf7f'
        if percent < 9.9:
            xcord = '12'
        else:
            xcord = '9'
        html_education = '<span>{{education}}</span>'
        return render(request, 'feed/feed.html', {
            'access': feed_data[0][0],
            'name': feed_data[0][1],
            'last_name': feed_data[0][2],
            'country': feed_data[0][3],
            'city': feed_data[0][4],
            'level' : level[0][0],
            'material' : level[0][1],
            'last_course' : last_course[0][0],
            'photo': photo,
            'begin_path': begin_path,
            'level_pic': our_level_pic,
            'level_num': i-1,
            'percent': percent,
            'left_percent': left_percent,
            'color': color,
            'xcord': xcord,
            'last_lesson': last_lesson[0][0],
            'last_lesson_name': last_lesson_name[0][0],
            'goals': goals,
            'impgoals': impgoals,
            'today': today
        })
    else:
        return HttpResponseRedirect('../login')


class MainLogoutView(LogoutView):
    next_page = '/'

'''
def settings(request, *args, **kwargs):
    form = UploadPicture
    return render(request, 'settings/settings.html', {'form': form})
'''

def upload_file(request):
    if request.method == 'POST':
        upload_file_form = DocumentForm(request.POST, request.FILES)
        if upload_file_form.is_valid():
            file_path = upload_file_form.cleaned_data.get('file')
            target_mail = request.user.username
            idnumber = Feed.objects.filter(mail=target_mail).values_list('id')
            iduser = idnumber[0][0]
            if AccountImage.objects.filter(mail=target_mail):
                AccountImage.objects.filter(mail=target_mail).delete()
            else:
                pass
            upload_file = AccountImage(mail=target_mail, file=file_path)
            upload_file.save()
            new_path = 'files/userpic/' + str(iduser) + '.png'
            os.rename(upload_file.file.path, settings.MEDIA_ROOT + new_path)
            upload_file.file.name = new_path
            upload_file.save()

            return HttpResponseRedirect('..')
    else:
        upload_file_form = DocumentForm()
    return render(request, 'settings/settings.html', {'form': upload_file_form})