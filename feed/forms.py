from django import forms
from feed.models import AccountImage
from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

'''
class UploadPicture(forms.Form):
    file = forms.FileField()
'''

class DocumentForm(forms.ModelForm):
    class Meta:
        model = AccountImage
        fields = ('file',)
'''
content = DocumentForm.cleaned_data['file']
if content._size > settings.MAX_UPLOAD_SIZE:
    raise forms.ValidationError(_('Please keep filesize under %s. Current filesize %s') % (filesizeformat(settings.MAX_UPLOAD_SIZE), filesizeformat(content._size)))
'''