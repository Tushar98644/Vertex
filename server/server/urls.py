from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from Items.views import MinuteViewSet,GalleryViewSet,SchoolViewSet,CollegeViewSet
from rest_framework import routers
from django.conf.urls import url
from django.views.static import serve


route = routers.DefaultRouter()
route.register('',MinuteViewSet,basename='Minutesview')

route_gallery=routers.DefaultRouter()
route_gallery.register('',GalleryViewSet,basename='Imagesview')

route_school=routers.DefaultRouter()
route_school.register('',SchoolViewSet,basename='Schoolview')

route_college=routers.DefaultRouter()
route_college.register('',CollegeViewSet,basename='Collegeview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(route.urls)),
    path('api/images',include(route_gallery.urls)),
    path('api/school',include(route_school.urls)),
    path('api/college',include(route_college.urls)),
    url(r'^media/(?P<path>.*)$', serve,{'document_root':       settings.MEDIA_ROOT}), 
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), 
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
