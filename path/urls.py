from django.urls import path
from .import views

urlpatterns = [
    path("", views.path, name="path_page"),
    path("0/", views.python_base, name="python_basics"),
    path("0/1/", views.lesson_data, name="python_basics_1")
]