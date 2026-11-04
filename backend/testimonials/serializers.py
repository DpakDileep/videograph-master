from rest_framework import serializers
from .models import Testimonial


class TestimonialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Testimonial
        fields = [
            'id',
            'client_name',
            'designation',
            'review',
            'photo',
            'created_at',
        ]