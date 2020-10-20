from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.
class Message(models.Model):

    content = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
