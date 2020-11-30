from django.urls import path
from .import views
from registration.views import regcode

urlpatterns = [
    path("", views.registration, name="registration_page"),
]