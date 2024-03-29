from django.contrib import admin
from feed.models import Feed, AccessLevel, AccountImage, Invites, UserProgress
from path.models import Rating, CourseBase, QuizBase, TagsBase, Course_Tags, LessonBase, ActionTypes, TempUserQuizDict, TempCurrentQuiz, UserQuizProgress, BugsMistakes, KnowledgeShare, IdeaShare, FeedbackDB

# Register your models here.
class FeedAdmin(admin.ModelAdmin):
    list_display = ['id', 'mail', 'first_name', 'last_name','rating_exp', 'country', 'created_date', 'accessid', 'lvl', 'login', 'time', 'xpmodificator', 'lastactivity','lasttraining']
    search_fields = ['mail', 'first_name', 'last_name', 'lvl', 'login']


class CoursesAdmin(admin.ModelAdmin):
    list_display = ['courseid', 'course_name', 'moto', 'icon', 'color', 'fontcolor', 'description', 'complexity', 'reqs', 'benefits', 'author', 'authorid', 'avaliable', 'language']
    search_fields = ['course_name']


class RatingAdmin(admin.ModelAdmin):
    list_display = ['ratingid', 'rating_material', 'rating_name', 'rating_exp', 'image_badge', 'icon']
    search_fields = ['rating_material', 'rating_name']


class AccessLevelAdmin(admin.ModelAdmin):
    list_display = ['accessid', 'access']

class AccountImageAdmin(admin.ModelAdmin):
    list_display = ['mail', 'file']

class QuizBaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'courseid', 'lessonid', 'quiztype', 'question','question_pic', 'code', 'option_1', 'option_2', 'option_3', 'option_4', 'answer', 'answer_explanation', 'complexity']
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
    list_display = ['userid', 'courseid', 'lessonid', 'finished', 'quizcompleted', 'failed']
    search_fields = ['userid', 'courseid']

class ActionTypesAdmin(admin.ModelAdmin):
    list_display = ['actionid', 'action', 'expmovement']

class TempUserQuizDictAdmin(admin.ModelAdmin):
    list_display = ['userid', 'quizid']
    search_fields = ['userid']

class TempCurrentQuizAdmin(admin.ModelAdmin):
    list_display = ['userid', 'quizid']
    search_fields = ['userid']

class UserQuizProgressAdmin(admin.ModelAdmin):
    list_display = ['userid', 'counter', 'wrong', 'exp']
    search_fields = ['userid']

class BugsMistakesAdmin(admin.ModelAdmin):
    list_display = ['userid', 'link', 'description', 'time', 'checked', 'testers']
    search_fields = ['userid']


class KnowledgeShareAdmin(admin.ModelAdmin):
    list_display = ['userid', 'knowledge', 'contact', 'time']
    search_fields = ['userid']


class IdeaShareAdmin(admin.ModelAdmin):
    list_display = ['userid', 'idea', 'contact', 'time']
    search_fields = ['userid']


class FeedbackDBAdmin(admin.ModelAdmin):
    list_display = ['userid', 'est', 'strength', 'drawback', 'time']
    search_fields = ['userid']


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
admin.site.register(TempUserQuizDict, TempUserQuizDictAdmin)
admin.site.register(TempCurrentQuiz, TempCurrentQuizAdmin)
admin.site.register(UserQuizProgress, UserQuizProgressAdmin)
admin.site.register(BugsMistakes, BugsMistakesAdmin)
admin.site.register(KnowledgeShare, KnowledgeShareAdmin)
admin.site.register(IdeaShare, IdeaShareAdmin)
admin.site.register(FeedbackDB, FeedbackDBAdmin)