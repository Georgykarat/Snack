# Generated by Django 2.2 on 2020-10-26 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0002_auto_20201026_1658'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='mail',
            field=models.EmailField(default='null', max_length=254),
            preserve_default=False,
        ),
    ]