# Generated by Django 2.2 on 2022-02-03 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0038_lessonbase'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lessonbase',
            name='video',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
