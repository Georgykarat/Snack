# Generated by Django 2.2 on 2020-10-31 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0014_auto_20201028_2025'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='last_course',
            field=models.CharField(default='0001', max_length=4),
        ),
        migrations.AddField(
            model_name='feed',
            name='last_lesson',
            field=models.CharField(default='01', max_length=2),
        ),
    ]