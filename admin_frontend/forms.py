from django import forms
from feed.models import AccountImage
from path.models import Rating
from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

'''
class UploadPicture(forms.Form):
    file = forms.FileField()
'''

class DocumentForm(forms.ModelForm):
    class Meta:
        model = Rating
        fields = ('ratingid', 'rating_material', 'rating_exp', 'icon')

    def __init__(self, *args, **kwargs):
        super(DocumentForm, self).__init__(*args, **kwargs)
        self.fields['ratingid'].widget.attrs.update({'class': 'admin__panel_settings_input'})
        self.fields['rating_material'].widget.attrs.update({'class': 'admin__panel_settings_input'})
        self.fields['rating_exp'].widget.attrs.update({'class': 'admin__panel_settings_input'})

'''
content = DocumentForm.cleaned_data['file']
if content._size > settings.MAX_UPLOAD_SIZE:
    raise forms.ValidationError(_('Please keep filesize under %s. Current filesize %s') % (filesizeformat(settings.MAX_UPLOAD_SIZE), filesizeformat(content._size)))
'''
