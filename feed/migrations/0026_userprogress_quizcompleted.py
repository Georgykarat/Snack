# Generated by Django 2.2 on 2022-02-08 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0025_userprogress'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprogress',
            name='quizcompleted',
            field=models.BooleanField(default=False),
        ),
    ]
