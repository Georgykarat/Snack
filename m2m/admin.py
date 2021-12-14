from django.contrib import admin
from m2m.models import PersonalGoals, FriendList, MessageBase, UserCourse


# Register your models here.

class PersonalGoalsAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'time', 'author_id','imp']
    search_fields = ['title', 'author_id', 'imp']



class FriendListAdmin(admin.ModelAdmin):
    list_display = ['id','fromid', 'toid']
    search_fields = ['fromid', 'toid']



class MessageBaseAdmin(admin.ModelAdmin):
    list_display = ['roomid', 'fromid', 'title']
    search_fields = []


class UserCourseAdmin(admin.ModelAdmin):
    list_display = ['userid', 'courseid', 'lessonid']
    search_fields = ['userid']


admin.site.register(PersonalGoals, PersonalGoalsAdmin)
admin.site.register(FriendList, FriendListAdmin)
admin.site.register(MessageBase, MessageBaseAdmin)
admin.site.register(UserCourse, UserCourseAdmin)