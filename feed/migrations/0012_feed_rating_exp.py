# Generated by Django 2.2 on 2020-10-28 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0011_auto_20201027_1314'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='rating_exp',
            field=models.IntegerField(default=0),
        ),
    ]
