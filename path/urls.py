from django.urls import path
from .import views

urlpatterns = [
    path("", views.path, name="path_page"),
    path("1/", views.python_base, name="python_basics"),
    path("1/1/", views.lesson_data, {'lesson':'002'}, name="python_basics_1")
]