# Generated by Django 2.2 on 2020-10-28 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0012_feed_rating_exp'),
    ]

    operations = [
        migrations.CreateModel(
            name='AccountImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mail', models.EmailField(max_length=254)),
                ('image', models.FileField(upload_to='files/')),
            ],
        ),
    ]
