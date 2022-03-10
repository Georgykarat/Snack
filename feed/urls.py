from os import name
from django.urls import path
from django.conf.urls.static import static
from feed.views import MainLogoutView, upload_file
from django.conf import settings
from .import views

urlpatterns = [
    path("", views.feed, name="feed_page"),
    path('logout/', MainLogoutView.as_view(), name="logout"),
    path('settings/', upload_file, name="settings"),
    path('faq/', views.faq, name="faq"),
    path('faq/form/', views.faqform, name="faqform"),
    path('faq/form/bugreport/', views.faqformbugreport, name="faqform_bugreport"),
    path('check/', views.mailcheck, name="mailcheck"),
    path('settings/photodraft/', views.photodraft, name="photodraft"),
    path('settings/savesettings/', views.savesettings, name="savesettings"),
    path('settings/theme/', views.theme, name="theme"),
    path('settings/changepass/', views.changepass, name='changepassword'),
    path('settings/deleteacc/', views.deleteacc, name='deleteaccount'),
    path('courses/', views.coursespage, name='courses'),
    path('courses/<courseid>/', views.pathpage, name='pathpage'),
    path('courses/<courseid>/coursestart/', views.coursestart, name='pathpage'),
    path('courses/<courseid>/<lessonid>/', views.lessonpage, name='lessonpage'),
    path('courses/<courseid>/<lessonid>/completed/', views.lessoncompleted, name='lessoncompleted'),
    path('courses/<courseid>/<lessonid>/quiz/', views.quiz, name='quiz'),
    path('courses/<courseid>/<lessonid>/quiz/quizcheck/', views.quizcheck, name='quizcheck'),
    path('courses/<courseid>/<lessonid>/quiz/nexttask/', views.nexttask, name='nexttask'),
    path('courses/<courseid>/<lessonid>/quiz/results/', views.quizresults, name='quizresults'),
]