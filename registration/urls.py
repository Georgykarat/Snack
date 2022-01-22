from django.urls import path
from .import views


urlpatterns = [
    path("", views.registration, name="registration_page"),
    path("check/", views.mailcheck, name="mailcheck"),
    path("generatepass/", views.phase1_generatecode, name="generatepass"),
    path("createacc/", views.createacc, name="createacc"),
    path("moveon/createaccfeed/", views.createaccfeed, name="createaccfeed"),
    path("moveon/", views.moveon, name="moveon"),
]