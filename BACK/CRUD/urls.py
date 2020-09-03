from django.urls import path
from . import views
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title='GASRO REST API',
        default_version='v1',
    ),
    public = True,
    permission_classes =(permissions.AllowAny)
)

app_name = 'crud'

urlpatterns = [
    path('', views.posts, name='posts'),
    # path('mvs/', views.mvs, name='mvs'),
    # path('<int:pk>/', views.movie_detail, name='movie_detail'),
    # path('<int:pk>/like/', views.movie_like, name='movie_like'),
    # path('<int:pk>/seen/', views.movie_seen, name='movie_seen'),
    # path('<int:pk>/reviews/', views.reviews, name='reviews'),
    # path('persons/', views.persons, name='persons'),
    # path('persons/<int:pk>/', views.person_detail, name='person_detail'),
    # path('keywords/', views.keywords, name='keywords'),
    # path('keywords/<int:pk>/', views.keyword_detail, name='keyword_detail'),
    # path('genres/', views.genres, name='genres'),
    # path('genres/<int:pk>/', views.genre_detail, name='genre_detail'),
    # path('pick_n/', views.pick_n, name='pick_n'),
    # path('pick_n/<int:num>/<str:genres>/', views.pick_n, name='pick_ns'),
    path('docs/', schema_view.with_ui('redoc'), name='api_docs'),
    path('swagger/', schema_view.with_ui('swagger'), name='api_swagger'),
]
