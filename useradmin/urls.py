from django.urls import path
from django.conf.urls.static import static
from useradmin.views import choice, main, QuizTaskTypeListView
from django.conf import settings
from .import views

urlpatterns = [
    path("", views.choice, name="choice"),
    path('frontend/', views.main, name="main"),
    path('faq/', views.faq, name="faq"),
    #path('faq/quiztasktype', views.quiztasktype, name="quiztasktype"),
    path('faq/quiztasktype', QuizTaskTypeListView.as_view(), name="quiztasktype"),
]