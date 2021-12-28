from datetime import datetime, time
from django.db import models

# Create your models here.

class PersonalGoals(models.Model):
	title = models.TextField(max_length = 200)
	time = models.DateTimeField(default=datetime.now)
	author_id = models.IntegerField()
	imp = models.BooleanField()

	def __str__(self):
		return self.title	



class FriendList(models.Model):
	fromid = models.IntegerField()
	toid = models.IntegerField()


class FriendRequests(models.Model):
	fromid = models.IntegerField()
	toid = models.IntegerField()



class MessageBase(models.Model):
	title = models.TextField(max_length = 500)
	time = models.DateTimeField(default=datetime.now)
	roomid = models.IntegerField()
	fromid = models.IntegerField()
	new = models.BooleanField(default=True)


class UserCourse(models.Model):
	userid = models.IntegerField(blank=True, default=None)
	courseid = models.IntegerField(blank=True, default=None)
	lessonid = models.IntegerField(blank=True, default=None)
	startdate = models.DateTimeField(blank=True, default=datetime.now)