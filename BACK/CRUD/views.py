from django.shortcuts import render, get_object_or_404
from .models import Post,Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse 
from django.shortcuts import render
from django.core.cache import cache
from django.core import serializers
# Create your views here.




@api_view(['GET'])
def posts(request):
    posts_all = cache.get_or_set('postss_all',Post.objects.all())
    # serializer = MovieSerializer(movies_all, many=True)
    # return Response(serializer.data)
    pass