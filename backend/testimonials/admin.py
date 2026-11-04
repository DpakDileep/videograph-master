

# Register your models here.
from django.contrib import admin
from .models import Testimonial


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):

    list_display = (
        'client_name',
        'designation',
        'photo',
        'is_published',
        'created_at',
    )

    list_filter = ('is_published',)

    search_fields = (
        'client_name',
        'designation',
        'review',
    )