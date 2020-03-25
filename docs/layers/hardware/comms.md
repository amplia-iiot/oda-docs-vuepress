### Comms

This Hardware module allow ODA to connect to the Internet with a GSM connection.
This connection requires of a device with a SIM card connect to it.
This module is currently only made to work in Sierra Wireless FX30/FX30S devices.
To extend this module is as easy as create new [scripts](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/comms/src/main/resources/scripts) 
that works for the desired device. 

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/comms).

#### Dependencies

* __[Commons](../../infrastructure/core.md)__: Provide the basic APIs to register the service. 

#### Configuration

To configure Comms Hardware module, a file named _es.amplia.oda.hardware.comms.cfg_ must be created with the next parameters
* __pin__: *"" (void String) by default*. This is the PIN Code of the inserted SIM card.
* __apn__: *Required parameter*. This is the APN where the SIM card will connect to get the information to achieve a connection to wireless network.
* __username__: *"" (void String) by default*. The user to access to the APN.
* __password__: *"" (void String) by default*. The pass to access to the APN.
* __connectionTimeout__: *60 by default*. Time (in seconds) that the module will wait before to do a timeout if network delay in response.
* __retryConnectionTimer__: *60 by default*. Time (in seconds) that the module will wait after try to connecting to try it again.

_es.amplia.oda.hardware.comms.cfg_ will have a similar format to:
```
pin=1234
apn=telefonica.es
username=telefonica
password=telefonica
connectionTimeout=15
retryConnectionTimer=30
```