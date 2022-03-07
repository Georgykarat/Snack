
from distutils.command.clean import clean
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
    language = models.TextField(blank=True, max_length=5000, default="")
    icon = models.FileField(upload_to='lessonicons/', blank=True)
    color = models.CharField(blank=True, max_length=8)
    fontcolor = models.CharField(blank=True, max_length=8)
    moto = models.CharField(blank=True, max_length=5000)
    description = models.CharField(blank=True, max_length=5000)
    complexity = models.IntegerField(blank=True)
    reqs = models.TextField(blank=True, max_length=50000)
    benefits = models.TextField(blank=True, max_length=50000)
    author = models.CharField(blank=True, max_length=100)
    authorid = models.IntegerField(blank=True, default=0)
    avaliable = models.BooleanField(default=False)


    def __str__(self):
        return self.course_name


class LessonBase(models.Model):
    courseid = models.IntegerField()
    lessonid = models.IntegerField()
    lesson_name = models.CharField(max_length=50)
    description = models.CharField(blank=True, max_length=5000)
    materials = models.TextField(blank=True, max_length=5000)
    script = models.TextField(blank=True, max_length=50000)
    video = models.CharField(max_length=50, blank=True) #Link to video storage
    prerequesite = models.IntegerField(blank=True, null=True)
    avaliable = models.BooleanField(default=False)
    


    def __str__(self):
        return self.lesson_name


class QuizBase(models.Model):
    courseid = models.IntegerField()
    lessonid = models.IntegerField()
    quiztype = models.IntegerField()
    question = models.CharField(max_length=5000)
    question_pic = models.FileField(upload_to='quizpics', blank=True)
    code = models.TextField(blank=True, max_length=10000, default="")
    option_1 = models.CharField(max_length=5000, blank=True)
    option_2 = models.CharField(max_length=5000, blank=True)
    option_3 = models.CharField(max_length=5000, blank=True)
    option_4 = models.CharField(max_length=5000, blank=True)
    answer = models.CharField(max_length=5000)
    answer_explanation = models.CharField(max_length=5000, blank=True)
    complexity = models.IntegerField()

    def __str__(self):
        return str(self.id) + " " + str(self.courseid) + " " + str(self.lessonid)

class TagsBase(models.Model):
    tagid = models.IntegerField()
    tag = models.CharField(max_length=50)

    def __str__(self):
        return self.tag

class Course_Tags(models.Model):
    courseid = models.IntegerField()
    tagid = models.IntegerField()

class ActionTypes(models.Model):
    actionid = models.IntegerField()
    action = models.CharField(max_length=50, blank=True)
    expmovement = models.IntegerField()

    def __str__(self):
        return str(self.actionid) + " " + self.action


class TempUserQuizDict(models.Model):
    userid = models.IntegerField()
    quizid = models.IntegerField()


class TempCurrentQuiz(models.Model):
    userid = models.IntegerField()
    quizid = models.IntegerField()


class UserQuizProgress(models.Model):
    userid = models.IntegerField()
    counter = models.IntegerField()
    exp = models.IntegerField()
    wrong = models.IntegerField(default=0)

'''
class RequirmentsType(models.Model):
    reqid = models.IntegerField()
    reqname = models.CharField(max_length=75)
    reqicon = models.FileField(upload_to='reqpics', blank=True)

    def __str__(self):
        return str(self.reqid) + " " + self.reqname
'''

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



