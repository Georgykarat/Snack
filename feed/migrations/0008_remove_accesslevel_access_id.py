# Generated by Django 2.2 on 2020-10-27 13:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0007_remove_feed_access_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accesslevel',
            name='access_id',
        ),
    ]
