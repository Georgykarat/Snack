from django import forms

class AuthForm(forms.Form):
    mail = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

    def __init__(self, *args, **kwargs):
        super(AuthForm, self).__init__(*args, **kwargs)
        self.fields['mail'].label = "E-mail"