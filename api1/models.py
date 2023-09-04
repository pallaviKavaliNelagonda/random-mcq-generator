from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Question(models.Model):
    id = models.IntegerField(primary_key=True)
    question = models.CharField(max_length=200)
    portion = models.CharField(max_length=200)
    hint = models.CharField(max_length=200)
    
    def __str__(self):
        return self.question
    
class Option(models.Model):
    question=models.ForeignKey(Question,on_delete=models.CASCADE, null=True,related_name="options")
    option=models.CharField(max_length=200)
    is_correct=models.BooleanField()
    selected=models.BooleanField(default=False)
   

    def __str__(self):
        
        return self.option





