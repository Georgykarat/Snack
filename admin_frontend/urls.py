from os import name
from django.urls import path
from django.conf.urls.static import static
from feed.views import MainLogoutView, upload_file
from django.conf import settings
from .import views

urlpatterns = [
    path("", views.admin_general, name="admin_general"),
    path("addlevel/", views.admin_panel_addlevel, name="admin_panel_addlevel"),
    path("addcourse/", views.admin_panel_addcourse, name="admin_panel_addcourse"),
    path("feedback/", views.admin_panel_feedback, name="admin_panel_feedback"),
]