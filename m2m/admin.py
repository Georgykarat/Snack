from django.contrib import admin
from m2m.models import PersonalGoals


# Register your models here.

class PersonalGoalsAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'time', 'author_id','imp']
    search_fields = ['title', 'author_id', 'imp']



admin.site.register(PersonalGoals, PersonalGoalsAdmin)