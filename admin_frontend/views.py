from django.http.response import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotFound
from feed.models import Feed, AccountImage, AccessLevel
from path.models import Rating, CourseBase, TagsBase, Course_Tags, FeedbackDB
from m2m.models import PersonalGoals
from feed.forms import DocumentForm
from admin_frontend.forms import DocumentForm, AddCourseForm


def admin_general(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid')[0][0]
        if feed_data == 2:  
            userid = Feed.objects.filter(mail=target_mail).values_list('id')
            #Got exp quantity
            exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
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
                
            return render(request, 'admin_general/admin_general.html', {
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
            return HttpResponseNotFound('<h1>Page not found</h1>')
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')


def admin_panel_addlevel(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        if request.method == 'POST':
            upload_file_form = DocumentForm(request.POST, request.FILES)
            if upload_file_form.is_valid():
                badge_path = upload_file_form.cleaned_data.get('icon')
                ratingid = upload_file_form.cleaned_data.get('ratingid')
                rating_material = upload_file_form.cleaned_data.get('rating_material')
                rating_exp = upload_file_form.cleaned_data.get('rating_exp')
                new_level = Rating(ratingid=ratingid, rating_material=rating_material, rating_exp=rating_exp, icon=badge_path)
                new_level.save()
                return HttpResponseRedirect('..')
        else:
            target_mail = request.user.username
            feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid')[0][0]
            if feed_data == 2:
                userid = Feed.objects.filter(mail=target_mail).values_list('id')
                #Got exp quantity
                exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
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

                levels_amount = len(Rating.objects.values_list('ratingid'))
                levels = Rating.objects.all()
                #Let's get all tags
                tags = TagsBase.objects.all()
                course_tag = Course_Tags.objects.all()
                #Create dict with courses:[tags]
                user_per_level = {}
                a = 0
                for i in levels:
                    i.amount_per_level = len(Feed.objects.filter(lvl=a).values_list('lvl'))
                    a += 1
                ourform = DocumentForm()
                return render(request, 'admin_general_addlevel/admin_general_addlevel.html', {
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
                    'tags': tags,
                    'course_tag': course_tag,
                    'until_next': until_next,
                    'next_level_material': next_level_material,
                    'next_level': next_level,
                    'levels_amount': levels_amount,
                    'levels': levels,
                    'user_per_level': user_per_level,
                    'ourform': ourform,
                })
            else:
                return HttpResponseNotFound('<h1>Page not found</h1>')
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')


def admin_panel_addcourse(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        if request.method == 'POST':
            upload_file_form = DocumentForm(request.POST, request.FILES)
            if upload_file_form.is_valid():
                badge_path = upload_file_form.cleaned_data.get('icon')
                ratingid = upload_file_form.cleaned_data.get('ratingid')
                rating_material = upload_file_form.cleaned_data.get('rating_material')
                rating_exp = upload_file_form.cleaned_data.get('rating_exp')
                new_level = Rating(ratingid=ratingid, rating_material=rating_material, rating_exp=rating_exp, icon=badge_path)
                new_level.save()
                return HttpResponseRedirect('..')
        else:
            target_mail = request.user.username
            feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid')[0][0]
            if feed_data == 2:
                #Got exp quantity
                exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
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
                # course_amount = len(LessonsBase.objects.values_list('ratingid')) Пока отключено
                levels = Rating.objects.all()
                #Let's get all tags
                tags = TagsBase.objects.all()
                course_tag = Course_Tags.objects.all()
                #Create dict with courses:[tags]
                user_per_level = {}
                a = 0
                for i in levels:
                    i.amount_per_level = len(Feed.objects.filter(lvl=a).values_list('lvl'))
                    a += 1
                ourform = AddCourseForm()
                return render(request, 'admin_general_addcourse/admin_general_addcourse.html', {
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
                    'levels': levels,
                    'user_per_level': user_per_level,
                    'ourform': ourform,
                })
            else:
                return HttpResponseNotFound('<h1>Page not found</h1>')
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')


def admin_panel_feedback(request):
    if request.user.is_authenticated == True:
        target_mail = request.user.username
        feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid')[0][0]
        userid = Feed.objects.filter(mail=target_mail).values_list('id')[0][0]
        if feed_data == 2:
            #Got exp quantity
            exp = Feed.objects.filter(mail=target_mail).values_list('rating_exp')[0][0]
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
            #Let's get our estimates from DB
            all_estimates = FeedbackDB.objects.filter(userid = True).values_list('est')
            est_amount = len(FeedbackDB.objects.filter(userid = True).values_list('est'))
            start_estimate = 0
            for estimate in all_estimates:
                start_estimate += estimate[0]
            average_est = start_estimate / est_amount
            
            return render(request, 'admin_panel_feedback/admin_panel_feedback.html', {
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
                'until_next': until_next,
                'next_level_material': next_level_material,
                'next_level': next_level,
                'average_est': average_est,
                'est_amount': est_amount,
            })
        else:
            return HttpResponseNotFound('<h1>Page not found</h1>')
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')
