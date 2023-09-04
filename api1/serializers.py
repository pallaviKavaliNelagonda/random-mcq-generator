from rest_framework import serializers
from .models import Question,Option


class OptionsSerializer(serializers.ModelSerializer):
  
    class Meta:
        model = Option
        fields = [ 'option', 'is_correct', 'selected']

class QuestionSerializer(serializers.ModelSerializer):
     options=OptionsSerializer(many=True,read_only=True)
     
     class Meta:
        model = Question 
        fields = ['id', 'question','portion', 'hint','options']



