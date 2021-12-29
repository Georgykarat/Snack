from django.contrib import admin
from registration.models import RegMailCode

# Register your models here.

class RegMailCodeAdmin(admin.ModelAdmin):
    list_display = ['mail', 'mailcode']


admin.site.register(RegMailCode, RegMailCodeAdmin)