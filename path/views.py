from django.shortcuts import render
from django.http import HttpResponse
from feed.models import Feed, AccountImage
from path.models import TemporaryExpCounter, CourseBase


def path(request, *args, **kwargs):
    if request.user.is_authenticated == True:    
        target_mail = request.user.username
    feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name')
    if AccountImage.objects.filter(mail=target_mail):
        photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
    else:
        photo = "files/guys.jpeg"
    begin_path = '/media/'
    return render(request, 'path/path.html', {
        'photo': photo,
        'begin_path': begin_path,
        'access': feed_data[0][0],
        'name': feed_data[0][1],
        'last_name': feed_data[0][2]
    })


def python_base(request, *args, **kwargs):
    if request.user.is_authenticated == True:    
        target_mail = request.user.username
    feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name')
    if AccountImage.objects.filter(mail=target_mail):
        photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
    else:
        photo = "files/guys.jpeg"
    begin_path = '/media/'
    return render(request, 'coursepath/python_base.html', {
        'photo': photo,
        'begin_path': begin_path,
        'access': feed_data[0][0],
        'name': feed_data[0][1],
        'last_name': feed_data[0][2]
    })

def lesson_data(request, *args, **kwargs):
    lesson = kwargs['lesson']
    course_code = lesson[0:4]
    lesson_code = lesson[4:]
    lesson_data_upload = CourseBase.objects.filter(courseid=course_code).filter(lessonid=lesson_code).values_list('lessonid', 'course_name', 'lesson_name', 'icon', 'description', 'video', 'script')
    print(lesson_data_upload)
    if request.user.is_authenticated == True:    
        target_mail = request.user.username
    feed_data = Feed.objects.filter(mail=target_mail).values_list('accessid', 'first_name', 'last_name')
    if AccountImage.objects.filter(mail=target_mail):
        photo = AccountImage.objects.filter(mail=target_mail).values_list('file')[0][0]
    else:
        photo = "files/guys.jpeg"
    begin_path = '/media/'
    return render(request, 'lesson/lesson.html', {
        'photo': photo,
        'begin_path': begin_path,
        'access': feed_data[0][0],
        'name': feed_data[0][1],
        'last_name': feed_data[0][2],
        'lessonid': lesson_data_upload[0][0],
        'lessonname': lesson_data_upload[0][2],
        'coursename': lesson_data_upload[0][1],
        'desc': lesson_data_upload[0][4]
    })
