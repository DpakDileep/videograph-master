

# Create your models here.

from django.db import models


PHOTO_CHOICES = [
    ('ta-1.jpg', 'Client Photo 1'),
    ('ta-2.jpg', 'Client Photo 2'),
    ('ta-3.jpg', 'Client Photo 3'),
]


class Testimonial(models.Model):

    client_name = models.CharField(max_length=150)

    designation = models.CharField(max_length=150)

    review = models.TextField()

    photo = models.CharField(
        max_length=100,
        choices=PHOTO_CHOICES,
        default='ta-1.jpg'
    )

    is_published = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.client_name
