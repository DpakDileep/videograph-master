from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView

from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialListAPIView(ListAPIView):

    serializer_class = TestimonialSerializer

    def get_queryset(self):
        return Testimonial.objects.filter(
            is_published=True
        ).order_by('-created_at')