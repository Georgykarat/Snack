# Generated by Django 2.2 on 2020-10-31 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0008_auto_20201031_1611'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursesbase',
            name='course_num',
            field=models.IntegerField(),
        ),
    ]