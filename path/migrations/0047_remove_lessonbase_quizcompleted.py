# Generated by Django 2.2 on 2022-02-08 19:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0046_lessonbase_quizcompleted'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lessonbase',
            name='quizcompleted',
        ),
    ]
