### Simulator

This Datastream module enable to register datastreams with a constant value or a random value between two numbers specified by parameters.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/simulator).

#### Dependencies

_This module have no dependencies_

#### Configuration

To configure ADC Datastream module, a file named _es.amplia.oda.datastreams.simulator.cfg_ must be created with the next parameters 
for each input channel that you want to register:

In case of want to register a constant value:
* __datastreamId__: *Required parameter*. Identifier of the datastream.
* __deviceId__: *void string ("") by default*. Identifier of the device that contents this datastream.
* __dataType__: *Required data*. Allowed values are: *string, int, integer, float, double, number*. Is th data-type of the datastream.
* __constantValue__: *Required data*. Value that always will return this datastream.

In case of want a random numeric integer value:

* __datastreamId__: *Required parameter*. Identifier of the datastream.
* __deviceId__: *void string ("") by default*. Identifier of the device that contents this datastream.
* __minValue__: *Required data*. Minimum value that the datastream can returns.
* __maxValue__: *Required data*. Maximum value that the datastream can returns.
* __maxDiff__: *Required data*. Percentage of the range that the value can change compared to the last. 100 if it doesn't matter how much changes  

_es.amplia.oda.datastreams.simulator.cfg_ will have a similar format to:
```
constantValue,testDevice=string,this is a test value
randomValue=0,100,10
```