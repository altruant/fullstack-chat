from django.urls import path

from . import views

urlpatterns = [
    path('', views.MessageListCreateView.as_view()),
]
