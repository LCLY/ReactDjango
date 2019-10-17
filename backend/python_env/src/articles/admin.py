from django.contrib import admin
#username: lchoo
#pw: asusual

# Register your models here.
from .models import Article

admin.site.register(Article)
