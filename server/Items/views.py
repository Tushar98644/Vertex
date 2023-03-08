from django.shortcuts import render
from .models import Minute,Gallery,School,College
from .serializers import MinuteSerializer,GallerySerializer,SchoolSerializer,CollegeSerializer
from rest_framework import viewsets

# Create your views here.

class MinuteViewSet(viewsets.ModelViewSet):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class CollegeViewSet(viewsets.ModelViewSet):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer