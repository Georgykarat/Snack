from django.urls import path
from .import views

urlpatterns = [
    path("", views.registration, name="registration_page"),
    path("regcode/", views.regcode, name="regcode")
]