# Generated by Django 4.2.4 on 2023-09-04 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api1', '0006_auto_20230903_1100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
