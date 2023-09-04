from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import viewsets
from .models import Question,Option
from .serializers import *

# Create your views here.

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionsSerializer

class QuestionViewSet(viewsets.ModelViewSet):    
    queryset=Question.objects.all()
    serializer_class = QuestionSerializer

    def create(self,request,*args,**kwargs):
        question = request.data.get('question')
        portion = request.data.get('portion')
        hint = request.data.get('hint')
        id=request.data.get('id')
    
        options_data = request.data.get('options')
        options = []

        for option_data in options_data:
            option = OptionsSerializer(data=option_data)
            print("option b4 saving",option)
            if option.is_valid():
                option=option.save()
                options.append(option)
                print(option,options)
        
        question = Question.objects.create(id=id,question=question, portion=portion, hint=hint)
        question.options.set(options)
        question.save()
        return Response(QuestionSerializer(question).data)
        