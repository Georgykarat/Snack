# Generated by Django 2.2 on 2022-01-12 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0031_auto_20220112_1951'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursebase',
            name='authorid',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]