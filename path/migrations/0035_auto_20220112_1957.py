# Generated by Django 2.2 on 2022-01-12 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0034_coursebase_authorid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursebase',
            name='courseid',
            field=models.IntegerField(),
        ),
    ]
