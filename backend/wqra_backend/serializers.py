from rest_framework import serializers
from .models_3 import Runoffreworked
from .models_3 import Fecalreworked
from .models_3 import Hmetalreworked
from .models_3 import Nitroreworked
from .models_3 import Phosphreworked



class RunoffreworkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Runoffreworked
        #fields = '__all__'  # This will include all fields in the model
        # key fileds we want
        fields = ['resultmeasurevalue','resultmeasureunitcode','characteristicname','namelsad','monitoringlocationidentifier']
        
class FecalreworkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fecalreworked
        # key fileds we want
        fields = ['resultmeasurevalue','resultmeasureunitcode','characteristicname','namelsad','monitoringlocationidentifier']
        

class HmetalreworkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hmetalreworked
        # key fileds we want
        fields = ['resultmeasurevalue','resultmeasureunitcode','characteristicname','namelsad','monitoringlocationidentifier']
        
class NitroreworkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nitroreworked
        # key fileds we want
        fields = ['resultmeasurevalue','resultmeasureunitcode','characteristicname','namelsad','monitoringlocationidentifier']
        
class PhosphreworkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phosphreworked
        # key fileds we want
        fields = ['resultmeasurevalue','resultmeasureunitcode','characteristicname','namelsad','monitoringlocationidentifier']
        