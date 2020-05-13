from django.contrib import admin
from .models import Post, PostLike


class PostLikeAdmin(admin.TabularInline):
    model = PostLike


class PostAdmin(admin.ModelAdmin):
    inlines = [PostLikeAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__name', 'user__email']

    class Meta:
        model = Post


admin.site.register(Post, PostAdmin)
