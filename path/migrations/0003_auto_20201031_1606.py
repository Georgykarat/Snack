# Generated by Django 2.2 on 2020-10-31 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0002_auto_20201031_1605'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursesbase',
            name='course_name',
            field=models.CharField(default='None', max_length=50),
        ),
        migrations.AlterField(
            model_name='coursesbase',
            name='course_num',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='coursesbase',
            name='level_name',
            field=models.CharField(blank=True, default='None', max_length=50),
        ),
    ]