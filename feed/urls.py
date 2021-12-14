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
    path('check/', views.mailcheck, name="mailcheck"),
]