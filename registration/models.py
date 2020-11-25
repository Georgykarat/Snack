from django.db import models

# Create your models here.

class RegMailCode(models.Model):
    mail = models.CharField(max_length = 1000)
    mailcode = models.CharField(max_length = 4)

    def __str__(self):
        return self.mail
