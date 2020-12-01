
from django.db import models

# Create your models here.



class Rating(models.Model):
    ratingid = models.IntegerField()
    rating_name = models.CharField(max_length = 30)
    rating_material = models.CharField(max_length = 20)
    rating_exp = models.IntegerField()

    def __str__(self):
        return self.rating_material + " " + self.rating_name


class CourseBase(models.Model):
    courseid = models.CharField(max_length=4)
    course_name = models.CharField(max_length=50)
    lessonid = models.CharField(max_length=2, blank=True)
    lesson_name = models.CharField(max_length=50, blank=True)
    icon = models.FileField(upload_to='lessonicons/')
    description = models.CharField(blank=True, max_length=5000)
    video = models.FileField(blank=True, upload_to='videos/')
    script = models.CharField(max_length=10000, blank=True)


    def __str__(self):
        return self.course_name + " " + self.lesson_name


class QuizBase(models.Model):
    num = models.CharField(max_length=6)
    quiztype = models.CharField(max_length=4)
    question = models.CharField(max_length=1000)
    question_pic = models.FileField(upload_to='quizpics', blank=True)
    question_textorcode = models.CharField(max_length=5000, blank=True)
    option_1 = models.CharField(max_length=5000, blank=True)
    option_2 = models.CharField(max_length=5000, blank=True)
    option_3 = models.CharField(max_length=5000, blank=True)
    option_4 = models.CharField(max_length=5000, blank=True)
    answer = models.CharField(max_length=5000)
    answer_explanation = models.CharField(max_length=5000, blank=True)
    complexity = models.IntegerField()

    def __str__(self):
        return self.num + " " + self.quiztype + " " + self.question



