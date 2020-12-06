from django.urls import path
from .import views

urlpatterns = [
    path("", views.path, name="path_page"),
    path("0001/", views.python_base, name="python_basics"),
    path("0001/01/", views.lesson_data, {'lesson': '000101'}, name="python_basics_1")
]