# Generated by Django 2.2 on 2022-01-12 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0025_auto_20220112_1937'),
    ]

    operations = [
        migrations.AddField(
            model_name='coursebase',
            name='author',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]