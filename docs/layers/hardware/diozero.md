### DIOZero

Implementation of the library DIOZero to give an access to analog in/outputs.
This is the hardware module that give support to ADC Datastreams.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/diozero).

#### Dependencies

This module requires the following modules:
* __[Commons](../../infrastructure/core.md)__: Provide the ADC APIs, exceptions and types and the basic APIs to register the service. 

#### Configuration

To configure I2C Hardware module, a file named _es.amplia.oda.hardware.diozero.cfg_ must be created with the next parameters 
for each input channel that you want to register:
* __index__: *Required parameter*. Index of the channel.
* __deviceType__: *"" (void String) by default*. Type of this pin. adc.ADCChannel for specify an analog channel.
* __name__: *Required parameter*. Unique name for the channel.
* __lowMode__: *Required parameter*. Specify if lowMode is enabled.
* __path__: *Required parameter*. Path to the local directory that contains the value of this pin.
* __device__: *Required parameter*. Name of the device that handles this pin (OWASYS, FX30 or anyone else).

_es.amplia.oda.hardware.diozero.cfg_ will have a similar format to:
```
1=deviceType:adc.ADCChannel,name:light,lowMode:false,min:0,max:10
4=deviceType:adc.ADCChannel,name:temperature,lowMode:false,min:-10,max:50
```