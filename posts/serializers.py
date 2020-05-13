from .models import Post
from rest_framework import serializers
from profiles.serializers import PublicProfileSerializer
from django.conf import settings

MAX_POST_LENGTH = settings.MAX_POST_LENGTH
POST_ACTION_OPTIONS = settings.POST_ACTION_OPTIONS


class PostActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank=True, required=False)

    def validate_action(self, value):
        value = value.lower().strip()  # "Like " -> "like"
        if not value in POST_ACTION_OPTIONS:
            raise serializers.ValidationError(
                "This is not a valid action for posts")
        return value


class PostCreateSerializer(serializers.ModelSerializer):
    # serializers.SerializerMethodField(read_only=True)
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = ['user', 'id', 'content', 'likes', 'timestamp']

    def get_likes(self, obj):
        return obj.likes.count()

    def clean_content(self, value):
        if len(value) > MAX_POST_LENGTH:
            raise serializers.ValidationError("This post is too long")
        return value


class PostSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    parent = PostCreateSerializer(read_only=True)

    class Meta:
        model = Post
        fields = [
            'user',
            'id',
            'content',
            'likes',
            'is_repost',
            'parent',
            'timestamp']

    def get_likes(self, obj):
        return obj.likes.count()
