# Generated by Django 2.2 on 2022-02-08 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0026_userprogress_quizcompleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='xpmodificator',
            field=models.IntegerField(default=1),
        ),
    ]
