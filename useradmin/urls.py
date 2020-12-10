from django.urls import path
from django.conf.urls.static import static
from useradmin.views import choice, main
from django.conf import settings
from .import views

urlpatterns = [
    path("", views.choice, name="choice"),
    path('frontend/', views.main, name="main"),
    path('faq/', views.faq, name="faq"),
]