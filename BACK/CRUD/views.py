from django.shortcuts import render, redirect, get_object_or_404
from .models import Post
from .forms import PostForm
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse 
from django.shortcuts import render
from django.core.cache import cache
from django.core import serializers
# Create your views here.




@api_view(['POST'])
def create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()
        return redirect(post)
    else:
        form = PostForm()
    context = {
        'form':form,
    }
    return render(request,'CRUD/create.html', context)