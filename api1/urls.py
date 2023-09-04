from django.contrib import admin
from django.urls import path,include
from .views import QuestionViewSet,OptionViewSet
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'questions',QuestionViewSet)
router.register(r'options',OptionViewSet)
urlpatterns=[
    path('',include(router.urls)),
   
]


# ]