# Generated by Django 2.2 on 2020-10-28 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0013_accountimage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='accountimage',
            old_name='image',
            new_name='file',
        ),
        migrations.AlterField(
            model_name='accountimage',
            name='mail',
            field=models.EmailField(blank=True, max_length=254),
        ),
    ]
