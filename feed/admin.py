from django.contrib import admin
from feed.models import Feed, AccessLevel, AccountImage, Invites, UserProgress
from path.models import Rating, CourseBase, QuizBase, TagsBase, Course_Tags, LessonBase, ActionTypes

# Register your models here.
class FeedAdmin(admin.ModelAdmin):
    list_display = ['id', 'mail', 'first_name', 'last_name','rating_exp', 'country', 'created_date', 'accessid', 'lvl', 'login', 'time', 'xpmodificator']
    search_fields = ['mail', 'first_name', 'last_name', 'lvl', 'login']


class CoursesAdmin(admin.ModelAdmin):
    list_display = ['courseid', 'course_name', 'moto', 'icon', 'color', 'fontcolor', 'description', 'complexity', 'reqs', 'benefits', 'author', 'authorid', 'avaliable']
    search_fields = ['course_name']


class RatingAdmin(admin.ModelAdmin):
    list_display = ['ratingid', 'rating_material', 'rating_name', 'rating_exp', 'image_badge', 'icon']
    search_fields = ['rating_material', 'rating_name']


class AccessLevelAdmin(admin.ModelAdmin):
    list_display = ['accessid', 'access']

class AccountImageAdmin(admin.ModelAdmin):
    list_display = ['mail', 'file']

class QuizBaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'courseid', 'lessonid', 'quiztype', 'question','question_pic', 'option_1', 'option_2', 'option_3', 'option_4', 'answer', 'answer_explanation', 'complexity']
    search_fields = ['courseid', 'quiztype', 'question', 'complexity']

class InvitesAdmin(admin.ModelAdmin):
    list_display = ['invite']

class TagsBaseAdmin(admin.ModelAdmin):
    list_display = ['tagid', 'tag']
    search_fields = ['tag']

class Course_TagsAdmin(admin.ModelAdmin):
    list_display = ['courseid', 'tagid']

class LessonBaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'courseid', 'lessonid', 'lesson_name', 'description', 'script', 'video', 'prerequesite', 'avaliable']
    search_fields = ['courseid', 'lessonid', 'lesson_name']

class UserProgressAdmin(admin.ModelAdmin):
    list_display = ['userid', 'courseid', 'lessonid', 'finished', 'quizcompleted']
    search_fields = ['userid', 'courseid']

class ActionTypesAdmin(admin.ModelAdmin):
    list_display = ['actionid', 'action', 'expmovement']

admin.site.register(Feed, FeedAdmin)
admin.site.register(AccessLevel, AccessLevelAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(CourseBase, CoursesAdmin)
admin.site.register(AccountImage, AccountImageAdmin)
admin.site.register(QuizBase, QuizBaseAdmin)
admin.site.register(Invites, InvitesAdmin)
admin.site.register(TagsBase, TagsBaseAdmin)
admin.site.register(Course_Tags, Course_TagsAdmin)
admin.site.register(LessonBase, LessonBaseAdmin)
admin.site.register(UserProgress, UserProgressAdmin)
admin.site.register(ActionTypes, ActionTypesAdmin)