
from django.db import models


# Create your models here.



class Rating(models.Model):
    ratingid = models.IntegerField()
    rating_name = models.CharField(max_length = 30, blank=True)
    rating_material = models.CharField(max_length = 20)
    rating_exp = models.IntegerField()
    image_badge = models.CharField(verbose_name="image path", max_length = 1000, blank=True)
    icon = models.FileField(upload_to='levels/', blank=True)

    def __str__(self):
        return self.rating_material + " " + self.rating_name


class CourseBase(models.Model):
    courseid = models.IntegerField()
    course_name = models.CharField(max_length=50)
    icon = models.FileField(upload_to='lessonicons/', blank=True)
    color = models.CharField(blank=True, max_length=8)
    description = models.CharField(blank=True, max_length=5000)
    complexity = models.IntegerField(blank=True)
    author = models.CharField(blank=True, max_length=100)
    authorid = models.IntegerField(blank=True, default=0)
    avaliable = models.BooleanField(default=False)


    def __str__(self):
        return self.course_name


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

class TagsBase(models.Model):
    tagid = models.IntegerField()
    tag = models.CharField(max_length=50)

    def __str__(self):
        return self.tag

class Course_Tags(models.Model):
    courseid = models.IntegerField()
    tagid = models.IntegerField()

'''
class TemporaryExpCounter(models.Model):
    mail = models.CharField(max_length=500)
    lessonnum = models.CharField(max_length=6)
    exp = models.IntegerField()
    lives = models.IntegerField()
    counter = models.IntegerField(default=1)

    def __str__(self):
        return self.mail + " " + self.lessonnum + " " + self.exp
'''



