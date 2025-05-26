# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#from django.db import models
from django.contrib.gis.db import models


class Runoffreworked(models.Model):
    geom = models.MultiPolygonField(srid=4269)
    #geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    fid = models.BigIntegerField(blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    geoidfq = models.CharField(max_length=14, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    monitoringlocationidentifier = models.CharField(blank=True, null=True)
    resultmeasureunitcode = models.CharField(blank=True, null=True)
    resultmeasurevalue = models.FloatField(blank=True, null=True)
    characteristicname = models.CharField(blank=True, null=True)
    latitudemeasure = models.FloatField(blank=True, null=True)
    longitudemeasure = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'runoffreworked'



class Fecalreworked(models.Model):
    geom = models.MultiPolygonField(srid=4269)
    #geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    fid = models.BigIntegerField(blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    geoidfq = models.CharField(max_length=14, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    csafp = models.CharField(max_length=3, blank=True, null=True)
    cbsafp = models.CharField(max_length=5, blank=True, null=True)
    metdivfp = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    monitoringlocationidentifier = models.CharField(blank=True, null=True)
    resultmeasureunitcode = models.CharField(blank=True, null=True)
    resultmeasurevalue = models.FloatField(blank=True, null=True)
    characteristicname = models.CharField(blank=True, null=True)
    latitudemeasure = models.FloatField(blank=True, null=True)
    longitudemeasure = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fecalreworked'


class Hmetalreworked(models.Model):
    geom = models.MultiPolygonField(srid=4269)
    #geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    fid = models.BigIntegerField(blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    geoidfq = models.CharField(max_length=14, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    csafp = models.CharField(max_length=3, blank=True, null=True)
    cbsafp = models.CharField(max_length=5, blank=True, null=True)
    metdivfp = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    monitoringlocationidentifier = models.CharField(blank=True, null=True)
    resultmeasureunitcode = models.CharField(blank=True, null=True)
    resultmeasurevalue = models.FloatField(blank=True, null=True)
    characteristicname = models.CharField(blank=True, null=True)
    latitudemeasure = models.FloatField(blank=True, null=True)
    longitudemeasure = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hmetalreworked'


class Nitroreworked(models.Model):
    geom = models.MultiPolygonField(srid=4269)
    #geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    fid = models.BigIntegerField(blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    geoidfq = models.CharField(max_length=14, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    csafp = models.CharField(max_length=3, blank=True, null=True)
    cbsafp = models.CharField(max_length=5, blank=True, null=True)
    metdivfp = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    monitoringlocationidentifier = models.CharField(blank=True, null=True)
    resultmeasureunitcode = models.CharField(blank=True, null=True)
    resultmeasurevalue = models.FloatField(blank=True, null=True)
    characteristicname = models.CharField(blank=True, null=True)
    latitudemeasure = models.FloatField(blank=True, null=True)
    longitudemeasure = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nitroreworked'


class Phosphreworked(models.Model):
    geom = models.MultiPolygonField(srid=4269)
    #geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    fid = models.BigIntegerField(blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    geoidfq = models.CharField(max_length=14, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    csafp = models.CharField(max_length=3, blank=True, null=True)
    cbsafp = models.CharField(max_length=5, blank=True, null=True)
    metdivfp = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    monitoringlocationidentifier = models.CharField(blank=True, null=True)
    resultmeasureunitcode = models.CharField(blank=True, null=True)
    resultmeasurevalue = models.FloatField(blank=True, null=True)
    characteristicname = models.CharField(blank=True, null=True)
    latitudemeasure = models.FloatField(blank=True, null=True)
    longitudemeasure = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'phosphreworked'

