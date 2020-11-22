from django.contrib import admin
from feed.models import Feed, AccessLevel, AccountImage
from path.models import Rating, CourseBase

# Register your models here.
class FeedAdmin(admin.ModelAdmin):
    list_display = ['id', 'mail', 'first_name', 'last_name','rating_exp', 'country', 'created_date', 'accessid']
    search_fields = ['mail', 'first_name', 'last_name']


class CoursesAdmin(admin.ModelAdmin):
    list_display = ['courseid','lessonid', 'course_name', 'lesson_name', 'icon']
    search_fields = ['course_name', 'lesson_name']


class RatingAdmin(admin.ModelAdmin):
    list_display = ['ratingid', 'rating_material', 'rating_name', 'rating_exp']
    search_fields = ['rating_material', 'rating_name']


class AccessLevelAdmin(admin.ModelAdmin):
    list_display = ['accessid', 'access']

class AccountImageAdmin(admin.ModelAdmin):
    list_display = ['mail', 'file']

admin.site.register(Feed, FeedAdmin)
admin.site.register(AccessLevel, AccessLevelAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(CourseBase, CoursesAdmin)
admin.site.register(AccountImage, AccountImageAdmin)