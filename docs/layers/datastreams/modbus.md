### MODBUS

This Datastream module enable to register the datastreams of [Modbus Hardware module]().

This datastreams corresponds to the inputs/outputs obtained through modbus protocol.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/modbus).

#### Dependencies

This module requires the following modules:
* __[ModBus Hardware]()__: Provide an implementation of ModBus Master that the datastream module need to connect to the 
bus and collect the information of each datastream.

#### Configuration

To configure I2C Datastream module, a file named _es.amplia.oda.datastreams.modbus.cfg_ must be created with the next parameters 
for each input channel that you want to register:
* __datastreamId__: *Required parameter*. The identifier name of the datastream.
* __deviceId__: *Required parameter*. The device identifier name that contents the datastream.
* __datastreamType__: *Required parameter*. Name of the Java class that is the datastream. Allowed classes are: _Boolean, 
Byte[], Integer, Long, Short, Float, Double._
* __slaveAddress__: *null if not present*. Direction of the device in modbus.
* __dataType__: *Required parameter*. ModBus type of the data recollected from the modbus direction. Allowed classes are: 
_INPUT_DISCRETE, COIL, INPUT_REGISTER, HOLDING_REGISTER_
* __dataAddress__: *null if not present*. Direction of the specific data controlled by datastream inside the device.

_es.amplia.oda.datastreams.modbus.cfg_ will have a similar format to:
```
light=datastreamType:Long,slaveAddress:1,dataType:INPUT_DISCRETE,dataAddress:255
temp,testPi=datastreamType:DOUBLE,slaveAddress:2,dataType:INPUT_REGISTER,dataAddress:100
```