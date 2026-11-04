from django.contrib import admin
from .models import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'heading',
        'slug',
        'published_date',
        'comments_count',
        'is_published',
    )

    list_filter = ('published_date', 'is_published')

    search_fields = ('heading', 'slug', 'content')

    prepopulated_fields = {
        'slug': ('heading',)
    }