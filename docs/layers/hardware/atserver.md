### AT Server

This Hardware module allows to mount an AT Server to send AT Commands to an AT client.

This module requires of add to the application the AT Manager and AT Server to make it work properly.

[To access source code of AT Server click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/atserver).

[To access source code of AT Manager click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/atmanager).

#### Dependencies

This module requires the following modules:
* __[Commons](../../infrastructure/core.md)__: Provide the basic APIs to register the service.

#### Configuration

To configure I2C Hardware module, a file named _es.amplia.oda.hardware.atserver.cfg_ must be created with the next parameters:
 * __app-name__: *Required parameter*. Name of the own application that will open the serial port.
 * __ms-get-port__: *Required parameter*. Time in ms to achieve the connection with the serial port. If connection is 
 not achieved in time internal port will be null and a Exception will be thrown.
 * __port-name__: *Required parameter*. Name of the serial port that module have to use.
 * __baud-rate__: *Required parameter*. Baud rate with the connection will be tried. It can be 9600, 38400 and 115200.
 * __data-bits__: *Required parameter*. Data bits of the connection with the serial port. It can be 5, 6, 7 and 8.
 * __stop-bits__: *Required parameter*. Stop bits of the connection with the serial port. It can be 1 or 2.
 * __parity__: *Required parameter*. Parity of the connection with serial port. It can be: 'N'(one), 'O'(dd), 'E'(ven), 'M'(ark) and 'S'(pace).
 * __timeBetweenCommands__: *Required parameter*. Time that the AT Manager will wait after enter a AT command to the serial port. It's important put it because 
 
 _es.amplia.oda.hardware.atserver.cfg_ will have this format: 
``` 
app-name=oda-serial
ms-get-port=2000
port-name=ttyS0
baud-rate=38400
data-bits=8
parity=N
stop-bits=1
```