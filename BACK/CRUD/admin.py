from django.contrib import admin
from .models import Post

# Register your models here.

# class PostAdmin(admin.ModelAdmin):
#     list_display = ('pk', 'user', 'subject', 'content',)
#     list_display_links = ('subject',)

admin.site.register(Post)