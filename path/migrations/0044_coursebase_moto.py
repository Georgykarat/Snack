# Generated by Django 2.2 on 2022-02-04 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0043_coursebase_fontcolor'),
    ]

    operations = [
        migrations.AddField(
            model_name='coursebase',
            name='moto',
            field=models.CharField(blank=True, max_length=5000),
        ),
    ]
