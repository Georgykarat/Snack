from django.db import models

# Create your models here.

class AdminFaq(models.Model):
    quizname = models.CharField(max_length=50)
    quizcode = models.CharField(max_length=4)
    quizdesc = models.CharField(max_length=500)
    quizphotoexample = models.FileField(upload_to='quizexample/', blank=True)

    def __str__(self):
        return self.quizname
