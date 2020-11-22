from django import forms

class AuthForm(forms.Form):
    mail = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)