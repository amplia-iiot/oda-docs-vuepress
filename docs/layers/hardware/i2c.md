### I2C

This Datastream module enable to register the datastreams of [I2C Hardware module]().

This datastreams corresponds to the I2C devices connected to the device.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/i2c).

#### Dependencies

_This module have no dependencies._

#### Configuration

To configure I2C Datastream module, a file named _es.amplia.oda.datastreams.i2c.cfg_ must be created with the next parameters 
for each input channel that you want to register:
* __name__: *Required parameter*. Identifier name of the datastream.
* __controller__: *Required parameter*. Number of the controller of datastream. Controller and address form the direction to i2c source.
* __address__: *Required parameter*. Number of the address of datastream. Controller and address form the direction to i2c source.
* __register__: *Required parameter*. Position of the formed direction where the data of the datastream is stored.
* __min__: *Required parameter*, *if min > max then min = 0*. Specifies the value that datastream will take when the hardware channel value is in the minimum of the range. 
* __max__: *Required parameter*, *if min > max then max = 1*. Specifies the value that datastream will take when the hardware channel value is in the maximum of the range

_es.amplia.oda.datastreams.i2c.cfg_ will have a similar format to:
```
light=controller:1,address:10,register:255,min:0,max:10
temperature=controller:2,address:10,register:124,min:-10,max:50
```