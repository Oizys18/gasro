from django.db import models
from django.conf import settings


class Post(models.Model):
    user = models.CharField(max_length=20)
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    content = models.TextField()

    class Meta():
        ordering = ('-pk',)

    def __str__(self):
        return self.subject


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta():
        ordering = ('-pk',)
