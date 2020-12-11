from django.contrib import admin
from useradmin.models import AdminFaq

# Register your models here.

class AdminAdminFaq(admin.ModelAdmin):
    list_display = ['quizname', 'quizcode', 'quizdesc', 'quizphotoexample']
    search_fields = ['quizname', 'quizcode']


admin.site.register(AdminFaq, AdminAdminFaq)
