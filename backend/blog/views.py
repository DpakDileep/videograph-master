from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Blog
from .serializers import BlogSerializer


# Blog List API
class BlogListAPIView(ListAPIView):

    serializer_class = BlogSerializer

    def get_queryset(self):
        return Blog.objects.filter(
            is_published=True
        ).order_by('-published_date')


# Single Blog Detail API
class BlogDetailAPIView(RetrieveAPIView):

    serializer_class = BlogSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Blog.objects.filter(is_published=True)