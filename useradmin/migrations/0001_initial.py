# Generated by Django 2.2 on 2020-12-11 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminFaq',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quizname', models.CharField(max_length=50)),
                ('quizcode', models.CharField(max_length=4)),
                ('quizdesc', models.CharField(max_length=500)),
                ('quizphotoexample', models.FileField(blank=True, upload_to='quizexample/')),
            ],
        ),
    ]
