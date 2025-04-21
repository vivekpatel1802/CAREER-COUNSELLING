from django.db import models

# Create your models here.

from django.db import models

class Course(models.Model):
    image = models.ImageField(upload_to="courses/images/")
    fieldname = models.CharField(max_length=100)
    branchname = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.fieldname