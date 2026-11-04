from django.db import models
from django.utils.text import slugify


class Blog(models.Model):

    heading = models.CharField(max_length=250)

    slug = models.SlugField(max_length=250, unique=True, blank=True)

    image = models.ImageField(
    upload_to='blog_images/',
    blank=True,
    null=True
)

    content = models.TextField()

    published_date = models.DateField()

    comments_count = models.PositiveIntegerField(default=0)

    meta_title = models.CharField(max_length=250)

    meta_description = models.TextField()

    is_published = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_date']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.heading)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.heading