from django.urls import path
from django.conf.urls.static import static
from feed.views import MainLogoutView, upload_file
from django.conf import settings
from .import views

urlpatterns = [
    path("", views.msg, name="msg_page"),
]