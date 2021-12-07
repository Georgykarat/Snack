
from django.db import models

# Create your models here.



class AccessLevel(models.Model):
    accessid = models.IntegerField()
    access = models.CharField(max_length = 5)

    def __str__(self):
        return self.access


class Feed(models.Model):
    country = models.CharField(max_length = 50)
    mail = models.EmailField()
    password = models.CharField(max_length = 50, blank=True, null=True)
    activity = models.CharField(verbose_name="job", max_length = 1000)
    created_date = models.DateTimeField(auto_now_add=True)
    language = models.CharField(verbose_name="language", max_length = 2, default="EN")
    theme = models.IntegerField(verbose_name="theme", default=0)
    image_path = models.CharField(verbose_name="image path", max_length = 1000, blank=True)
    first_name = models.CharField(verbose_name="first name", max_length = 30)
    last_name = models.CharField(verbose_name="last name", max_length = 50)
    city = models.CharField(verbose_name="city", max_length = 50, default="0")
    course_id = models.IntegerField(verbose_name="course_id", default=0)
    last_course = models.CharField(default="0001", max_length=4)
    last_lesson = models.CharField(default="01", max_length=2)
    accessid = models.IntegerField(default=0)
    rating_exp = models.IntegerField(default=0)

    def __str__(self):
        return self.mail


class AccountImage(models.Model):
    mail = models.EmailField(blank=True)
    file = models.FileField(upload_to='files/userpic/')