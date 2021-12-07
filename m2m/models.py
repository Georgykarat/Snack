from django.db import models

# Create your models here.

class PersonalGoals(models.Model):
	title = models.TextField(max_length = 200)
	time = models.DateTimeField()
	author_id = models.IntegerField()
	imp = models.BooleanField()

	def __str__(self):
		return self.title	