from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post  # 모델 설정
        fields = ('id', 'title', 'content','created_at','image','video' )  # 필드 설정
        # read_only_fields = ('created_at',)