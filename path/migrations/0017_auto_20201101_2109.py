# Generated by Django 2.2 on 2020-11-01 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0016_coursebase'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursebase',
            name='icon',
            field=models.FileField(upload_to='lessonicons/'),
        ),
        migrations.AlterField(
            model_name='coursebase',
            name='video',
            field=models.FileField(blank=True, upload_to='videos/'),
        ),
    ]