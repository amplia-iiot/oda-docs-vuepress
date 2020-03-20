### I2C

This Datastream module enable to register the datastreams of [I2C Hardware module]().

This datastreams corresponds to the I2C devices connected to the device.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/i2c).

#### Dependencies

This module requires the following modules:
* __[I2C Hardware]()__: Provide an implementation of I2C Service that the datastream module need to provide information of each datastream.

#### Configuration

To configure I2C Datastream module, a file named _es.amplia.oda.datastreams.i2c.cfg_ must be created with the next parameters 
for each input channel that you want to register:
* __name__: *Required parameter*. Identifier name of the datastream.
* __getter__: *true by default*. Enable the option to use this channel as datastream getter (have to check the value manually 
every time that want to know actual value).
* __setter__: *false by default*. Enable the option to use this channel as datastream setter (have to send a operation to change the value of this datastream). 
* __device__: *Required parameter*. Identifier name of the i2c device hardware
* __min__: *0 by default*, *if min > max then min = 0*. Specifies the value that datastream will take when the hardware channel value is in the minimum of the range. 
* __max__: *1 by default*, *if min > max then max = 1*. Specifies the value that datastream will take when the hardware channel value is in the maximum of the range

_es.amplia.oda.datastreams.i2c.cfg_ will have a similar format to:

```
lightData=getter:false,setter:true,device:lightDev,min:0,max:10
temperatureData=device:temperatureDev
```