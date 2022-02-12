from django.http.response import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from feed.models import Feed, AccountImage, AccessLevel, UserProgress
from path.models import Rating, CourseBase, TagsBase, Course_Tags, LessonBase, ActionTypes
from m2m.models import PersonalGoals
from feed.forms import DocumentForm
from django.contrib.auth.views import LogoutView, UserModel
from django.conf import UserSettingsHolder, settings
from django.template.defaulttags import register
import datetime
import os


level_pics = [
    '/media/levels/0.svg',
    '/media/levels/1.svg',
    '/media/levels/2.svg',
]

@register.filter
def get_item(dictionary, key):
    return dictionary.get(key)


def feed(request, *args, **kwargs):
    if request.user.is_authenticated == True:    
        target_mail = request.user.username
        userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
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
        #Courses in progress
        started_courses_info = UserProgress.objects.filter(userid=userid).values_list('courseid')
        started_courses_list = []
        for string in started_courses_info:
            courseid = string[0]
            if UserProgress.objects.filter(userid=userid, courseid=courseid, finished=True).exists() and UserProgress.objects.filter(userid=userid, courseid=courseid, finished=False).exists() == False:
                pass
            else:
                started_courses_list.append(courseid)
        started_courses_set = set(started_courses_list)
        started_courses_list = list(started_courses_set)
        #
        #
        #Get lessons amount for every course
        lessons_amount_dict = {}
        for course in courses.values_list('courseid'):
            lessons_amount = len(LessonBase.objects.filter(courseid = course[0]).all())
            lessons_amount_dict[course[0]] = lessons_amount
        #Track the progress for every scale
        progress_tracker_dict = {}
        colors_list = {}
        for started_course_id in started_courses_list:
            completedamount = len(UserProgress.objects.filter(userid=userid, courseid=started_course_id, finished=True).all())
            total_courses = len(LessonBase.objects.filter(courseid=started_course_id).all())
            color_of_lesson = CourseBase.objects.filter(courseid=started_course_id).values_list('color')[0][0]
            colors_list[started_course_id] = color_of_lesson
            if int(total_courses) == 0:
                progress_in_percentage = 0
            else:
                progress_in_percentage = round((int(completedamount)/int(total_courses)) * 100)
            if UserProgress.objects.filter(userid=userid, courseid=started_course_id, finished=False).exists():
                current_lesson_id = UserProgress.objects.filter(userid=userid, courseid=started_course_id, finished=False).values_list('lessonid')[0][0]
                current_lesson = LessonBase.objects.filter(courseid=started_course_id, lessonid=current_lesson_id).values_list('lesson_name')[0][0]
                current_course_info = CourseBase.objects.filter(courseid=started_course_id).values_list('course_name', 'color')[0]
                current_course_name, current_course_color = current_course_info[0], current_course_info[1]
                if current_lesson_id < 10:
                    current_lesson_id = "0" + str(current_lesson_id)
                else:
                    current_lesson_id = str(current_lesson_id)
                progress_tracker_dict[started_course_id] = {'current_lesson_id':[(current_lesson_id, current_lesson, current_course_name, current_course_color)], 'percentage':progress_in_percentage}

            else:
                progress_tracker_dict = False
        #
        #
        
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
            'started_courses': started_courses_list,
            'lessons_amount_dict': lessons_amount_dict,
            'progress_tracker_dict': progress_tracker_dict,
            'colors_list': colors_list,
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
        future_courses = CourseBase.objects.filter(avaliable=False).all()
        #
        #Let's get all tags
        tags = TagsBase.objects.all()
        course_tag = Course_Tags.objects.all()
        #Create dict with courses:[tags]
        #CHeck if you already started the course
        started_courses_info = UserProgress.objects.filter(userid=userid1).values_list('courseid')
        started_courses_list = []
        for string in started_courses_info:
            courseid = string[0]
            started_courses_list.append(courseid)
        started_courses_set = set(started_courses_list)
        started_courses_list = list(started_courses_set)
        #Get lessons amount for every course
        lessons_amount_dict = {}
        for course in courses.values_list('courseid'):
            lessons_amount = len(LessonBase.objects.filter(courseid = course[0]).all())
            lessons_amount_dict[course[0]] = lessons_amount
        #Track the progress for every scale
        progress_tracker_dict = {}
        for started_course_id in started_courses_list:
            completedamount = len(UserProgress.objects.filter(userid=userid1, courseid=started_course_id, finished=True).all())
            total_courses = len(LessonBase.objects.filter(courseid=started_course_id).all())
            if int(total_courses) == 0:
                progress_in_percentage = 0
            else:
                progress_in_percentage = round((int(completedamount)/int(total_courses)) * 100)
            if UserProgress.objects.filter(userid=userid1, courseid=started_course_id, finished=False).exists():
                current_lesson_id = UserProgress.objects.filter(userid=userid1, courseid=started_course_id, finished=False).values_list('lessonid')[0][0]
                current_lesson = LessonBase.objects.filter(courseid=started_course_id, lessonid=current_lesson_id).values_list('lesson_name')[0][0]
                if current_lesson_id < 10:
                    current_lesson_id = "0" + str(current_lesson_id)
                else:
                    current_lesson_id = str(current_lesson_id)
                progress_tracker_dict[started_course_id] = {'percentage':progress_in_percentage,'current_lesson_id':[(current_lesson_id, current_lesson)]}
            else:
                progress_tracker_dict = False

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
            'unavaliable_courses': future_courses,
            'tags': tags,
            'course_tag': course_tag,
            'started_courses': started_courses_list,
            'lessons_amount_dict': lessons_amount_dict,
            'progress_tracker_dict': progress_tracker_dict,
        })
    else:
        return HttpResponseRedirect('../login')



def pathpage(request, courseid):
    if request.user.is_authenticated == True: 
        # Need check the course existance
        if CourseBase.objects.filter(courseid=int(courseid), avaliable=True).exists():
            course_data = CourseBase.objects.filter(courseid=int(courseid)).values_list('course_name', 'icon', 'color', 'description', 'complexity', 'author', 'authorid', 'fontcolor', 'moto', 'reqs', 'benefits')[0]
            # Page upload begins
            target_mail = request.user.username
            userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
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
            # Did we start the course?
            if UserProgress.objects.filter(userid=userid, courseid=courseid).exists():
                started_course = True
            else:
                started_course = False
            # Did we finish the course
            if UserProgress.objects.filter(userid=userid, courseid=courseid, finished=True).exists():
                if UserProgress.objects.filter(userid=userid, courseid=courseid, finished=False).exists() == False:
                    finished_thecourse = True
                else:
                    finished_thecourse = False
            else:
                finished_thecourse = False
            # Calculate complexity
            coursecomplexity = range(int(course_data[4]) + 1)
            coursenotfilled = range(5 - (int(course_data[4]) + 1))
            #What's next lesson
            if UserProgress.objects.filter(userid=userid, courseid=courseid).exists():
                if UserProgress.objects.filter(userid=userid, courseid=courseid, finished=False).exists():
                    next_lesson_id = UserProgress.objects.filter(userid=userid, courseid=courseid, finished=False).values_list('lessonid')[0][0]
                    next_lesson = LessonBase.objects.filter(courseid=courseid, lessonid=next_lesson_id).values_list('lesson_name')[0][0]
                else:
                    next_lesson_id, next_lesson = False, False
            else:
                next_lesson_id, next_lesson = False, False
            if AccountImage.objects.filter(mail=target_mail):
                photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
            else:
                photo = "files/guys.jpeg"
            begin_path = '/media/'
            #Let's get our courses from DB
            lesson_base = LessonBase.objects.filter(courseid = courseid, avaliable = True).all()
            lessons_amount = len(lesson_base)
            lessonstome_in_total = lessons_amount * 6
            hours = lessonstome_in_total // 60
            minutes = lessonstome_in_total % 60
            #author info
            author_data = course_data[5]
            author_name = author_data[:author_data.find(',')]
            author_pos = author_data[author_data.find(',') + 2:]
            author_mail = Feed.objects.filter(id = course_data[6]).values_list('mail')[0][0]
            author_photo = AccountImage.objects.filter(mail = author_mail).values_list('file')[0][0]

            alllessonscompletedforlist = UserProgress.objects.filter(courseid=int(courseid), finished=True).values_list('lessonid')
            finished_courses_list = []
            for string in alllessonscompletedforlist:
                ourlessonid = string[0]
                finished_courses_list.append(ourlessonid)
            finished_courses_set = set(finished_courses_list)
            finished_courses_list = list(finished_courses_set)

            if UserProgress.objects.filter(userid = userid, courseid = courseid, finished = False).exists():
                lessonid = UserProgress.objects.filter(userid = userid, courseid = courseid, finished = False).values_list('lessonid')[0]
            elif UserProgress.objects.filter(userid = userid, courseid = courseid).exists() == False:
                lessonid = 1
            else:
                lessonid = ourlessonid


            benefits_list = course_data[10][1:-1]
            benefits_len = len(benefits_list.split('],['))
            benefits = []
            benefits_item = (benefits_list.split('],['))
            for i in range(benefits_len):
                benefit_s_dict = {}
                benefits_item_current = benefits_item[i]
                if i == 0:
                    benefits_item_current = benefits_item_current[1:]
                elif i == benefits_len - 1:
                    benefits_item_current = benefits_item_current[:-1]
                benefit_d = benefits_item_current.split(';')
                benefit_s_dict[benefit_d[0]] = benefit_d[1]
                benefits.append(benefit_s_dict)
            


                
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
                'fontcolor': course_data[7],
                'moto': course_data[8],
                'reqs': course_data[9],
                'benefits': benefits,
                'started_course': started_course,
                'coursecomplexityfilled': coursecomplexity,
                'coursenotfilled': coursenotfilled,
                'next_lesson_id': next_lesson_id,
                'next_lesson': next_lesson,
                'finished_thecourse': finished_thecourse,
                'lessons_amount': lessons_amount,
                'hours': hours,
                'minutes': minutes,
                'author_name': author_name,
                'author_photo': author_photo,
                'author_pos': author_pos,
                'lesson_base': lesson_base,
                'finished_courses_list': finished_courses_list,
                'lessonid': lessonid,
            })
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseRedirect('../login')



def coursestart(request, courseid):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
        if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = 1).exists():
            return redirect('../1/')
        else:
            newitem = UserProgress()
            newitem.userid = userid
            newitem.courseid = int(courseid)
            newitem.lessonid = 1
            newitem.save()
            return redirect('../1/')
    else:
        return HttpResponse(status=404)



def xpmovement(actionid, mod, currentlvl, currentexp):
    expmovement = ActionTypes.objects.filter(actionid = int(actionid)).values_list('expmovement')[0][0]
    if expmovement < 0:
        pass
    else:
        expmovement = expmovement * mod
    next_level_border = Rating.objects.filter(ratingid = int(currentlvl) + 1).values_list('rating_exp')[0][0]
    final_exp_int = currentexp + expmovement
    if final_exp_int >= next_level_border:
        up = True
    else:
        up = False
    return [up, final_exp_int]


def lessonpage(request, courseid, lessonid):
    if request.user.is_authenticated == True: 
        # Need check the course existance
        if CourseBase.objects.filter(courseid=int(courseid), avaliable=True).exists():
            if LessonBase.objects.filter(courseid=int(courseid), lessonid=int(lessonid), avaliable=True).exists():
                target_mail = request.user.username
                userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
                if UserProgress.objects.filter(userid=userid,courseid=int(courseid), lessonid=int(lessonid)).exists():
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
                    alllessonscompleted = UserProgress.objects.filter(courseid=int(courseid), finished=True).all()
                    lessons_completed_counter = len(alllessonscompleted)
                    alllessonsnotcompleted = range(len(alllessons) - len(alllessonscompleted))
                    alllessonscompletedforlist = UserProgress.objects.filter(courseid=int(courseid), finished=True).values_list('lessonid')
                    finished_courses_list = []
                    for string in alllessonscompletedforlist:
                        ourlessonid = string[0]
                        finished_courses_list.append(ourlessonid)
                    finished_courses_set = set(finished_courses_list)
                    finished_courses_list = list(finished_courses_set)
                    alllessonsnotcompletedforlist = UserProgress.objects.filter(courseid=int(courseid), finished=False).values_list('lessonid')
                    finished_or_not = UserProgress.objects.filter(courseid=int(courseid), lessonid=int(lessonid)).values_list('finished', 'quizcompleted')[0]
                    notfinished_courses_list = []
                    for string in alllessonsnotcompletedforlist:
                        ourlessonid = string[0]
                        notfinished_courses_list.append(ourlessonid)
                    notfinished_courses_set = set(notfinished_courses_list)
                    notfinished_courses_list = list(notfinished_courses_set)
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
                        'script': lesson_data[3],
                        'clessonid': int(lessonid),
                        'lesson_total': lesson_counter,
                        'progressbar_width': progressbar_width,
                        'alllessons': alllessons,
                        'alllessonscompleted': alllessonscompleted,
                        'lessons_completed_counter': lessons_completed_counter,
                        'alllessonsnotcompleted': alllessonsnotcompleted,
                        'finished_courses_list': finished_courses_list,
                        'notfinished_courses_list': notfinished_courses_list,
                        'course_finished': finished_or_not[0],
                        'quiz_finished': finished_or_not[1],
                    })
                else:
                    return HttpResponse(status=404)
            else:
                return HttpResponse(status=404)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseRedirect('../login')


def lessoncompleted(request, courseid, lessonid):
    if request.user.is_authenticated:
        if request.is_ajax():
            target_mail = request.user.username
            userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
            userinfo = Feed.objects.filter(id=userid).values_list('xpmodificator', 'lvl', 'rating_exp')[0]
            prerequisite = LessonBase.objects.filter(courseid = courseid, lessonid=lessonid).values_list('prerequesite')[0][0]
            if prerequisite:
                if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = prerequisite, finished = True).exists():
                    if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = lessonid).exists():
                        if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = int(lessonid) + 1).exists():
                            return JsonResponse({}, status=400)
                        else:
                            if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = lessonid, finished = False).exists():
                                info_on_exp_movement = xpmovement(0, int(userinfo[0]), int(userinfo[1]), int(userinfo[2]))
                                if info_on_exp_movement[0]:
                                    level_up = True
                                    Feed.objects.filter(id = userid).update(rating_exp = int(info_on_exp_movement[1]), lvl = int(userinfo[1]) + 1)
                                else:
                                    level_up = False
                                    Feed.objects.filter(id = userid).update(rating_exp = int(info_on_exp_movement[1]))
                            UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = lessonid).update(finished = True)
                            if LessonBase.objects.filter(courseid = courseid, lessonid = int(lessonid) + 1).exists():
                                newitem = UserProgress()
                                newitem.userid = userid
                                newitem.courseid = int(courseid)
                                newitem.lessonid = int(lessonid) + 1
                                newitem.save()
                                
                                return JsonResponse({'nextlesson': int(lessonid) + 1}, status=200)
                            else:
                                return JsonResponse({'nextlesson': 99999}, status=200)
                    else:
                        return JsonResponse({}, status=400)
                else:
                    return JsonResponse({}, status=400)
            else:
                if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = lessonid).exists():
                    if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = int(lessonid) + 1).exists():
                        return JsonResponse({}, status=400)
                    else:
                        if UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = lessonid, finished = False).exists():
                            info_on_exp_movement = xpmovement(0, int(userinfo[0]), int(userinfo[1]), int(userinfo[2]))
                            if info_on_exp_movement[0]:
                                level_up = True
                                Feed.objects.filter(id = userid).update(rating_exp = int(info_on_exp_movement[1]), lvl = int(userinfo[1]) + 1)
                            else:
                                level_up = False
                                Feed.objects.filter(id = userid).update(rating_exp = int(info_on_exp_movement[1]))
                        UserProgress.objects.filter(userid = userid, courseid = courseid, lessonid = lessonid).update(finished = True)
                        if LessonBase.objects.filter(courseid = courseid, lessonid = int(lessonid) + 1).exists():
                            newitem = UserProgress()
                            newitem.userid = userid
                            newitem.courseid = int(courseid)
                            newitem.lessonid = int(lessonid) + 1
                            newitem.save()
                            return JsonResponse({'nextlesson': int(lessonid) + 1}, status=200)
                        else:
                            return JsonResponse({'nextlesson': 99999}, status=200)
                else:
                    return JsonResponse({}, status=400)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponse(status=404)



def quiz(request, courseid, lessonid):
    if request.user.is_authenticated:
        if request.is_ajax():
            target_mail = request.user.username
            userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
            pass