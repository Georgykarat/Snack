from django.http.response import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from feed.models import Feed, AccountImage, AccessLevel
from path.models import Rating, CourseBase, TagsBase, Course_Tags, LessonBase
from m2m.models import PersonalGoals
from feed.forms import DocumentForm
from django.contrib.auth.views import LogoutView, UserModel
from django.conf import UserSettingsHolder, settings
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
        #Got exp quantity
        exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
        i = 0 #Задали индекс счётчику
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city', 'lvl')
        # Let's find our access title
        access_name = AccessLevel.objects.filter(accessid=feed_data[0][0]).values_list('access')[0][0]
        #Let's count our level
        next_level = feed_data[0][5] + 1 #got next level id
        next_level_exp = Rating.objects.filter(ratingid=next_level).values_list('rating_exp')[0][0] #got next level exp
        current_level_info = Rating.objects.filter(ratingid=feed_data[0][5]).values_list('rating_name', 'rating_material', 'rating_exp', 'icon', 'ratingid') #got current level info
        exp_between_lvl = next_level_exp - current_level_info[0][2]
        current_exp_without_prev = exp - current_level_info[0][2]
        percentage = int(current_exp_without_prev / exp_between_lvl * 100) #percantage was calculated
        until_next = next_level_exp - exp
        next_level_material = Rating.objects.filter(ratingid=next_level).values_list('rating_material')[0][0]
        #
        if AccountImage.objects.filter(mail=target_mail):
            photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
        else:
            photo = "files/guys.jpeg"
        begin_path = '/media/'
        #Let's get our courses from DB
        courses = CourseBase.objects.filter(avaliable=True).all() #Get all avaliable courses
        #
        #Let's get all tags
        tags = TagsBase.objects.all()
        course_tag = Course_Tags.objects.all()
        #Create dict with courses:[tags]
            
        return render(request, 'feed/feed.html', {
            'access': feed_data[0][0],
            'access_name': access_name,
            'name': feed_data[0][1],
            'last_name': feed_data[0][2],
            'country': feed_data[0][3],
            'city': feed_data[0][4],
            'photo': photo,
            'begin_path': begin_path,
            'levelbadge': current_level_info[0][3],
            'ratingid': current_level_info[0][4],
            'material': current_level_info[0][1],
            'percantage': percentage,
            'courses': courses,
            'tags': tags,
            'course_tag': course_tag,
            'until_next': until_next,
            'next_level_material': next_level_material,
            'next_level': next_level,
        })
    else:
        return HttpResponseRedirect('../login')



def mailcheck(request):
    if request.is_ajax():
        mailtocheck = request.GET.get('mailtocheck').lower()
        if mailtocheck:
            if Feed.objects.filter(mail = mailtocheck).exists():
                nomail = False
                return JsonResponse({
                    'nomail': nomail,    
                })
            else:
                nomail = True
                return JsonResponse({
                    'nomail': nomail,    
                })
        else:
            pass





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
        target_mail = request.user.username
        #Got id of the user
        #userid = Feed.objects.filter(mail=target_mail).values_list('id')
        exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city', 'lvl','login', 'time', 'theme', 'activity')
        upload_file_form = DocumentForm()
        if int(feed_data[0][7]) >= 0:
            timesign = '+'
        else:
            timesign = '-'
        if feed_data[0][8] == 0:
            style = 'Light Mode'
        elif feed_data[0][8] == 1:
            style = 'Night Mode'
        acessid = feed_data[0][0]
        if acessid == 2:
            chgpaswmsg = "..."
        else:
            chgpaswmsg = "..."
        begin_path = '/media/'
        if AccountImage.objects.filter(mail=target_mail):
            photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
        else:
            photo = "files/guys.jpeg"
        next_level = feed_data[0][5] + 1 #got next level id
        next_level_exp = Rating.objects.filter(ratingid=next_level).values_list('rating_exp')[0][0] #got next level exp
        current_level_info = Rating.objects.filter(ratingid=feed_data[0][5]).values_list('rating_name', 'rating_material', 'rating_exp', 'icon', 'ratingid') #got current level info
        exp_between_lvl = next_level_exp - current_level_info[0][2]
        current_exp_without_prev = exp - current_level_info[0][2]
        percentage = int(current_exp_without_prev / exp_between_lvl * 100) #percantage was calculated
        access_name = AccessLevel.objects.filter(accessid=feed_data[0][0]).values_list('access')[0][0]
        return render(request, 'settings/settings2.html', {
                'access': acessid,
                'access_name': access_name,
                'photo': photo,
                'begin_path': begin_path,
                'loginm': target_mail,
                'name': feed_data[0][1],
                'last_name': feed_data[0][2],
                'country': feed_data[0][3],
                'city': feed_data[0][4],
                'login': feed_data[0][6],
                'form': upload_file_form,
                'timezone': feed_data[0][7],
                'theme': style,
                'timesign': timesign,
                'activity': feed_data[0][9],
                'chgpaswmsg': chgpaswmsg,
                'levelbadge': current_level_info[0][3],
                'ratingid': current_level_info[0][4],
                'material': current_level_info[0][1],
                'percantage': percentage,
            })
    #return render(request, 'settings/settings2.html', {'form': upload_file_form})


def photodraft(request):
    print('Зашли')
    draftphoto = request.POST['photodraft']
    print(draftphoto)



def savesettings(request):
    login = request.POST['login']
    flag = request.POST['flag']
    name = request.POST['name']
    surname = request.POST['surname']
    country = request.POST['country']
    occupation = request.POST['occupation']
    timezonesign = request.POST['timezonesign']
    timezone = request.POST['timezone']
    target_mail = request.user.username
    if timezonesign == '+':
        hours = str(timezone)
    else:
        hours = str(int(timezone) * -1)
    Feed.objects.filter(mail=target_mail).update(country = country, login = login, first_name = name, last_name = surname, activity = occupation, time = hours)
    print('Done')
    return HttpResponseRedirect('/feed/settings/')


def theme(request):
    target_mail = request.user.username
    theme = Feed.objects.filter(mail=target_mail).values_list('theme')[0][0]
    if theme == 0:
        new_theme = 1
    elif theme == 1:
        new_theme = 0
    Feed.objects.filter(mail=target_mail).update(theme = new_theme)
    return HttpResponseRedirect('/feed/settings/')


def changepass(request):
    target_mail = request.user.username
    p1 = request.POST['p1']
    p2 = request.POST['p2']
    p3 = request.POST['p3']
    if p2 == p3:
        # New passwords match each other
        # need to compare current pass and p1
        #"pbkdf2_sha1"
        # checkresult = check_password(p1)
        # old_pass = User.objects.filter(username = target_mail).values_list('password')[0][0]
        if True == True:
            #Let's edit thepassword
            ouruser = User.objects.get(username__exact = target_mail)
            ouruser.set_password(p2)
            ouruser.save()
            return HttpResponseRedirect('/login/')
        else:
            print('НИХУЯ НЕ РАБОТАЕТ ТВОЁ ГОВНО')
            return HttpResponseRedirect('/feed/settings/')
    else:
        return HttpResponseRedirect('/feed/settings/')
    

def deleteacc(request):
    target_mail = request.user.username
    deletecode = request.POST['deletecode']
    feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'login')
    if feed_data[0][0] != 2 and target_mail == feed_data[0][3]:
        first_name = feed_data[0][1]
        last_name = feed_data[0][2]
        delete_backend_code = target_mail
        if deletecode == delete_backend_code:
            deletion_request = Feed.objects.filter(mail = target_mail)
            deletion_request.delete()
            deletion_request_userdb = User.objects.filter(username__exact = target_mail)
            deletion_request_userdb.delete()
            return HttpResponseRedirect('/')
        else:
            return None
    else:
        return None


def coursespage(request):
    if request.user.is_authenticated == True:    
        target_mail = request.user.username
        userid = Feed.objects.filter(mail=target_mail).values_list('id')
        userid1 = userid[0][0]
        #Got exp quantity
        exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
        i = 0 #Задали индекс счётчику
        level = Rating.objects.filter(ratingid=i-1).values_list('rating_name', 'rating_material')
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city', 'lvl')
        feed_data1 = Feed.objects.filter(mail=target_mail).values_list('last_course')
        # Let's find our access title
        access_name = AccessLevel.objects.filter(accessid=feed_data[0][0]).values_list('access')[0][0]
        #Let's count our level
        next_level = feed_data[0][5] + 1 #got next level id
        next_level_exp = Rating.objects.filter(ratingid=next_level).values_list('rating_exp')[0][0] #got next level exp
        current_level_info = Rating.objects.filter(ratingid=feed_data[0][5]).values_list('rating_name', 'rating_material', 'rating_exp', 'icon', 'ratingid') #got current level info
        exp_between_lvl = next_level_exp - current_level_info[0][2]
        current_exp_without_prev = exp - current_level_info[0][2]
        percentage = current_exp_without_prev / exp_between_lvl * 100 #percantage was calculated
        #
        if AccountImage.objects.filter(mail=target_mail):
            photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
        else:
            photo = "files/guys.jpeg"
        begin_path = '/media/'
        #Let's get our courses from DB
        courses = CourseBase.objects.filter(avaliable=True).all() #Get all avaliable courses
        #
        #Let's get all tags
        tags = TagsBase.objects.all()
        course_tag = Course_Tags.objects.all()
        #Create dict with courses:[tags]
            
        return render(request, 'courses/courses.html', {
            'access': feed_data[0][0],
            'access_name': access_name,
            'name': feed_data[0][1],
            'last_name': feed_data[0][2],
            'country': feed_data[0][3],
            'city': feed_data[0][4],
            'photo': photo,
            'begin_path': begin_path,
            'levelbadge': current_level_info[0][3],
            'ratingid': current_level_info[0][4],
            'material': current_level_info[0][1],
            'percantage': percentage,
            'courses': courses,
            'tags': tags,
            'course_tag': course_tag,
        })
    else:
        return HttpResponseRedirect('../login')



def pathpage(request, courseid):
    if request.user.is_authenticated == True: 
        # Need check the course existance
        if CourseBase.objects.filter(courseid=int(courseid), avaliable=True).exists():
            course_data = CourseBase.objects.filter(courseid=int(courseid)).values_list('course_name', 'icon', 'color', 'description', 'complexity', 'author', 'authorid', 'fontcolor', 'moto')[0]
            # Page upload begins
            target_mail = request.user.username
            #Got exp quantity
            exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
            i = 0 #Задали индекс счётчику
            feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city', 'lvl')
            # Let's find our access title
            access_name = AccessLevel.objects.filter(accessid=feed_data[0][0]).values_list('access')[0][0]
            #Let's count our level
            next_level = feed_data[0][5] + 1 #got next level id
            next_level_exp = Rating.objects.filter(ratingid=next_level).values_list('rating_exp')[0][0] #got next level exp
            current_level_info = Rating.objects.filter(ratingid=feed_data[0][5]).values_list('rating_name', 'rating_material', 'rating_exp', 'icon', 'ratingid') #got current level info
            exp_between_lvl = next_level_exp - current_level_info[0][2]
            current_exp_without_prev = exp - current_level_info[0][2]
            percentage = current_exp_without_prev / exp_between_lvl * 100 #percantage was calculated
            #
            if AccountImage.objects.filter(mail=target_mail):
                photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
            else:
                photo = "files/guys.jpeg"
            begin_path = '/media/'
            #Let's get our courses from DB
                
            return render(request, 'path_lessons/path_lessons.html', {
                'access': feed_data[0][0],
                'access_name': access_name,
                'name': feed_data[0][1],
                'last_name': feed_data[0][2],
                'country': feed_data[0][3],
                'city': feed_data[0][4],
                'photo': photo,
                'begin_path': begin_path,
                'levelbadge': current_level_info[0][3],
                'ratingid': current_level_info[0][4],
                'material': current_level_info[0][1],
                'percantage': percentage,
                'coursename': course_data[0],
                'courseicon': course_data[1],
                'coursecolor': course_data[2],
                'coursedescription': course_data[3],
                'coursecomplexity': course_data[4],
                'fontcolor': course_data[7],
                'moto': course_data[8],
            })
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseRedirect('../login')



def lessonpage(request, courseid, lessonid):
    if request.user.is_authenticated == True: 
        # Need check the course existance
        if CourseBase.objects.filter(courseid=int(courseid), avaliable=True).exists():
            if LessonBase.objects.filter(courseid=int(courseid), lessonid=int(lessonid), avaliable=True).exists():
                course_data = CourseBase.objects.filter(courseid=int(courseid)).values_list('course_name', 'icon', 'color', 'description', 'complexity', 'author', 'authorid')[0]
                lesson_data = LessonBase.objects.filter(courseid=int(courseid), lessonid=int(lessonid)).values_list('lesson_name', 'description', 'materials', 'script', 'video', 'prerequesite', 'avaliable')[0]
                # Page upload begins
                target_mail = request.user.username
                #Got exp quantity
                exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
                i = 0 #Задали индекс счётчику
                level = Rating.objects.filter(ratingid=i-1).values_list('rating_name', 'rating_material')
                feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name', 'country', 'city', 'lvl')
                feed_data1 = Feed.objects.filter(mail=target_mail).values_list('last_course')
                # Let's find our access title
                access_name = AccessLevel.objects.filter(accessid=feed_data[0][0]).values_list('access')[0][0]
                #Let's count our level
                next_level = feed_data[0][5] + 1 #got next level id
                next_level_exp = Rating.objects.filter(ratingid=next_level).values_list('rating_exp')[0][0] #got next level exp
                current_level_info = Rating.objects.filter(ratingid=feed_data[0][5]).values_list('rating_name', 'rating_material', 'rating_exp', 'icon', 'ratingid') #got current level info
                exp_between_lvl = next_level_exp - current_level_info[0][2]
                current_exp_without_prev = exp - current_level_info[0][2]
                percentage = current_exp_without_prev / exp_between_lvl * 100 #percantage was calculated
                # Lessondata
                # How many lessons in total the course has
                alllessons = LessonBase.objects.filter(courseid=int(courseid)).all()
                lesson_counter = len(alllessons)
                # Calculate progress bar elements width
                progressbar_width = (100 - 1) / lesson_counter

                if AccountImage.objects.filter(mail=target_mail):
                    photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
                else:
                    photo = "files/guys.jpeg"
                begin_path = '/media/'

                    
                return render(request, 'lessons/lessons.html', {
                    'access': feed_data[0][0],
                    'access_name': access_name,
                    'name': feed_data[0][1],
                    'last_name': feed_data[0][2],
                    'country': feed_data[0][3],
                    'city': feed_data[0][4],
                    'photo': photo,
                    'begin_path': begin_path,
                    'levelbadge': current_level_info[0][3],
                    'ratingid': current_level_info[0][4],
                    'material': current_level_info[0][1],
                    'percantage': percentage,

                    'coursename': course_data[0],
                    'lessonname': lesson_data[0],
                    'lessondesc': lesson_data[1],
                    'lessonmat': lesson_data[2],
                    'clessonid': int(lessonid),
                    'lesson_total': lesson_counter,
                    'progressbar_width': progressbar_width,
                    'alllessons': alllessons,
                })
            else:
                return HttpResponse(status=404)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseRedirect('../login')