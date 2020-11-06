from django.db import models
# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=140)
    content = models.TextField()
    image = models.ImageField(blank=True)
    video = models.CharField(max_length=12,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

