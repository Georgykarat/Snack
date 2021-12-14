from django.urls import path
from .import views
from registration.views import regcode, mailcheck

urlpatterns = [
    path("", views.registration, name="registration_page"),
    path("check/", views.mailcheck, name="mailcheck"),
]