from django.urls import path
from .import views
from login.views import MainLoginView, resetpass, getnewpass

urlpatterns = [
    path("", views.login_view, name="login"),
    path("resetpass/", views.resetpass, name="resetpass"),
    path("getnewpass/", views.getnewpass, name="getnewpass")
    #path('', MainLoginView.as_view(), name="login")
]