from rest_framework.views import APIView
from django.db.models import F
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import generics
from wqra_backend.models_3 import Runoffreworked
from wqra_backend.models_3 import Fecalreworked
from wqra_backend.models_3 import Hmetalreworked
from wqra_backend.models_3 import Phosphreworked
from wqra_backend.models_3 import Nitroreworked
from .serializers import HmetalreworkedSerializer
from .serializers import PhosphreworkedSerializer
from .serializers import NitroreworkedSerializer
from .serializers import RunoffreworkedSerializer
from .serializers import FecalreworkedSerializer
from django.db import connection
from math import radians, cos, sin, asin, sqrt
from django.contrib.gis.geos import Point
from django.db.models import Q
import logging


logger = logging.getLogger(__name__)

class RunoffreworkedList(viewsets.ModelViewSet):
    queryset = Runoffreworked.objects.all()  # Get all the objects from the Runoffjoinedgeoqgis table
    serializer_class = RunoffreworkedSerializer # Use the serializer you just created

class FecalreworkedList(viewsets.ModelViewSet):
    queryset = Fecalreworked.objects.all()  # Get all the objects from the Runoffjoinedgeoqgis table
    serializer_class = FecalreworkedSerializer # Use the serializer you just created

class HmetalreworkedList(viewsets.ModelViewSet):
    queryset = Hmetalreworked.objects.all()  # Get all the objects from the Runoffjoinedgeoqgis table
    serializer_class = HmetalreworkedSerializer # Use the serializer you just created

class PhosphreworkedList(viewsets.ModelViewSet):
    queryset = Phosphreworked.objects.all()  # Get all the objects from the Runoffjoinedgeoqgis table
    serializer_class = PhosphreworkedSerializer # Use the serializer you just created

class NitroreworkedList(viewsets.ModelViewSet):
    queryset = Nitroreworked.objects.all()  # Get all the objects from the Runoffjoinedgeoqgis table
    serializer_class = NitroreworkedSerializer # Use the serializer you just created



class RunoffByLatLong(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        if lat is None or lon is None:
            return Response({'error': 'Latitude and longitude are required'}, status=400)
        
        try:
            lat = float(lat)
            lon = float(lon)
        except ValueError:
            return Response({'error': 'Latitude and longitude must be valid float numbers'}, status=400)
        point = Point(lon,lat,srid=4269)
        # query for an exact match
        # result = Runoffjoinedgeoqgis.objects.filter(
        #   latitudemeasure=lat,
        #  longitudemeasure=lon
        # ).first()
        result = Runoffreworked.objects.filter(geom__contains=point) # just displaying first chem in list with ".first()"
        print(result)
        if result:
            serialzer = RunoffreworkedSerializer(result, many=True) #many = true deserializes all values
            return Response(serialzer.data)
        else:
            return Response({'error': 'No data found for the given coordinates'}, status=404)
        

class FecalByLatLong(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        if lat is None or lon is None:
            return Response({'error': 'Latitude and longitude are required'}, status=400)
        
        try:
            lat = float(lat)
            lon = float(lon)
        except ValueError:
            return Response({'error': 'Latitude and longitude must be valid float numbers'}, status=400)
    
        point = Point(lon,lat,srid=4269)
        # query for an exact match
        # 
        result = Fecalreworked.objects.filter(geom__contains=point) # just displaying first chem in list with ".first()"
        print(result)

        if result:
            serialzer = FecalreworkedSerializer(result, many=True)
            return Response(serialzer.data)
        else:
            return Response({'error': 'No data found for the given coordinates'}, status=404)
                
class HmetalByLatLong(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        if lat is None or lon is None:
            return Response({'error': 'Latitude and longitude are required'}, status=400)
        
        try:
            lat = float(lat)
            lon = float(lon)
        except ValueError:
            return Response({'error': 'Latitude and longitude must be valid float numbers'}, status=400)
    
        point = Point(lon,lat,srid=4269)
        # query for an exact match
        # 
        result = Hmetalreworked.objects.filter(geom__contains=point) # just displaying first chem in list with ".first()"
        print(result)

        if result:
            serialzer = HmetalreworkedSerializer(result, many=True)
            return Response(serialzer.data)
        else:
            return Response({'error': 'No data found for the given coordinates'}, status=404)
                

class PhosphatesByLatLong(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        if lat is None or lon is None:
            return Response({'error': 'Latitude and longitude are required'}, status=400)
        
        try:
            lat = float(lat)
            lon = float(lon)
        except ValueError:
            return Response({'error': 'Latitude and longitude must be valid float numbers'}, status=400)
    
        # allow slight decimal variation
        tolerance = 0.01
        result = Phosphreworked.objects.filter(
            Q(latitudemeasure__gte=lat - tolerance, latitudemeasure__lte=lat + tolerance),
            Q(longitudemeasure__gte=lon - tolerance, longitudemeasure__lte=lon + tolerance)
        ).first()

        logger.debug(f"Query result: {result}")

        point = Point(lon,lat,srid=4269)
        # query for an exact match
        #result = Phosphatesdbready.objects.filter(
        #  latitudemeasure=lat,
        # longitudemeasure=lon
        #).first()
        result = Phosphreworked.objects.filter(geom__contains=point) # just displaying first chem in list with ".first()"
        print(result)

        if result:
            serialzer = PhosphreworkedSerializer(result, many=True)
            return Response(serialzer.data)
        else:
            return Response({'error': 'No data found for the given coordinates'}, status=404)
                


class NitroByLatLong(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        if lat is None or lon is None:
            return Response({'error': 'Latitude and longitude are required'}, status=400)
        
        try:
            lat = float(lat)
            lon = float(lon)
        except ValueError:
            return Response({'error': 'Latitude and longitude must be valid float numbers'}, status=400)
    
        point = Point(lon,lat,srid=4269)
        # query for an exact match
        # 
        result = Nitroreworked.objects.filter(geom__contains=point) # just displaying first chem in list with ".first()"
        print(result)

        if result:
            serialzer = NitroreworkedSerializer(result, many=True)
            return Response(serialzer.data)
        else:
            return Response({'error': 'No data found for the given coordinates'}, status=404)
                

    #     # all points to compare too
    #     all_points = Runoffjoinedgeoqgis.objects.all()

    #     # Filter all points to those with in 1 mile using havesine
    #     nearby_points = []
    #     for point in all_points:
    #         dist = self.haversine(lon, lat, point.longitudemeasure, point.latitudemeasure)
    #         if dist <= 1.0:
    #             nearby_points.append((dist, point))

    #     if not nearby_points:
    #         return Response({'error': 'No matching data found within 1 mile radius'}, status=404)
        

    #    # Sort by distance and get the closest
    #     closest_point = sorted(nearby_points, key=lambda x: x[0])[0][1]
    #     serializer = RunoffjoinedgeoqgisSerializer(closest_point)
    #     return Response(serializer.data)


        # Choses the nearest data point to the given lat long
        # closest = Runoffjoinedgeoqgis.objects.order_by(
        #     ((F('latitudemeasure') - lat) ** 2 + (F('longitudemeasure') - lon) ** 2)
        # ).first()


        # if closest:
        #     serializer = RunoffjoinedgeoqgisSerializer(closest)
        #     return Response(serializer.data)
        # else:
        #     return Response({'error': 'No matching data found'}, status=404)
        
    
    # to calculate mile distance
    # def haversine(self, lon1, lat1, lon2, lat2):
    #     # Convert decimal degrees to radians
    #     lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

    #     # Haversine formula
    #     dlon = lon2 - lon1 
    #     dlat = lat2 - lat1 
    #     a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    #     c = 2 * asin(sqrt(a)) 
    #     r = 3956  # Radius of Earth in miles
    #     return c * r



    # get for by county 
class RunoffByCounty(APIView):
    def get(self, request):
        county = request.query_params.get('county')

        if not county:
            return Response({'error': 'County name is required'}, status=400)

        # Case-insensitive match (you can remove `__iexact` if you want exact case match)
        results = Runoffreworked.objects.filter(name__iexact=county)

        if results.exists():
            serializer = RunoffreworkedSerializer(results, many=True)
            return Response(serializer.data)
        else:
            return Response({'error': f'No data found for county: {county}'}, status=404)
