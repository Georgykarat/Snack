# Generated by Django 2.2 on 2022-02-05 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('path', '0044_coursebase_moto'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActionTypes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actionid', models.IntegerField()),
                ('action', models.CharField(blank=True, max_length=50)),
                ('expmovement', models.IntegerField()),
            ],
        ),
    ]
