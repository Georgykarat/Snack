from django.urls import path
from .import views
from login.views import MainLoginView

urlpatterns = [
    path("", views.login_view, name="login")
    #path('', MainLoginView.as_view(), name="login")
]