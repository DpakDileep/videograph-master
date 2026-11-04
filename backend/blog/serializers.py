from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(read_only=True)

    class Meta:
        model = Blog
        fields = [
            'id',
            'heading',
            'slug',
            'image',
            'content',
            'published_date',
            'comments_count',
            'meta_title',
            'meta_description',
        ]