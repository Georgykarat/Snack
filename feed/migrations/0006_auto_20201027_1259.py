# Generated by Django 2.2 on 2020-10-27 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0005_auto_20201027_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='access_id',
            field=models.IntegerField(),
        ),
    ]
