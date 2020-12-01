from django.contrib import admin
from path.models import QuizBase
# Register your models here.

class QuizBaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'num', 'quiztype', 'question','question_pic', 'question_textorcode', 'option_1', 'option_2', 'option_3', 'option_4', 'answer', 'answer_explanation', 'complexity']
    search_fields = ['num', 'quiztype', 'question', 'complexity']


admin.site.register(QuizBase, QuizBaseAdmin)
