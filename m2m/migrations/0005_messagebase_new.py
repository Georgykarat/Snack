# Generated by Django 2.2 on 2021-12-12 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('m2m', '0004_auto_20211212_1707'),
    ]

    operations = [
        migrations.AddField(
            model_name='messagebase',
            name='new',
            field=models.BooleanField(default=True),
        ),
    ]
