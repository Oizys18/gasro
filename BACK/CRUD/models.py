from django.db import models
from django.conf import settings


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta():
        ordering = ('-pk',)

    def __str__(self):
        return self.subject

