# Generated by Django 2.2 on 2021-12-12 17:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('m2m', '0003_messagebase'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messagebase',
            name='time',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='personalgoals',
            name='time',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]