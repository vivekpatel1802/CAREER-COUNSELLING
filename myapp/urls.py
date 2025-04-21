
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# # from .views import CourseViewSet, UserViewSet, home
# from myapp.views import CourseViewSet, home


# router = DefaultRouter()
# router.register(r'courses', CourseViewSet)
# # router.register(r'register', UserViewSet, basename='user')  # This includes the create functionality

# urlpatterns = [
#     path('', home, name='home'),
#     # path('api/register/', UserCreate.as_view(), name='user-create'),

#     path('api/', include(router.urls)),  # Handles all API routes, including user registration at /api/users/
# ]

from django.urls import path
from .views import SignUpView, LoginView,home
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, UserViewSet, home
router = DefaultRouter()
router.register(r'courses', CourseViewSet)

urlpatterns = [
    path('', home, name='home'),
    path('api/signup/', SignUpView.as_view(), name='signup'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/', include(router.urls)),
]
