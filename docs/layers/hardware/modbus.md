### ModBus

Implementation of the library j2mod to give an access to devices connected through modbus.
This is the hardware module that give support to Modbus Datastreams.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/modbus).

#### Dependencies

This module requires the following modules:
* __[Commons](../../infrastructure/core.md)__: Provide the ModBus APIs, exceptions and types and the basic APIs to register the service. 

#### Configuration

To configure Mod Bus Hardware module, a file named _es.amplia.oda.hardware.modbus.cfg_ must be created with the next parameters:
* __type__: *Required data*. Type of modbus connection. Allowed modbus types are TCP, UDP, Serial. 
* __address__: *Required data for UDP and TCP*. Address where the modbus will connect. 
* __port__: *Required data for UDP and TCP*. Address where the modbus will connect.
* __timeout__: *Required data for UDP and TCP*. Time in seconds that the modbus hardware will wait until do a timeout if the master slave doesn't respond.
* __reconnect__: *Required data for TCP*. Enable the option to reconnect automatically if connection is dropped.
* __portName__: *Required data for serial*. Name of the serial port (tty)
* __baudRate__: *Required data for serial*. Baud Rate of the connection. 9600, 38400 or 115200.
* __flowControlIn__: *Required data for serial*. Flow Control of the input of connection.
* __flowControlOut__: *Required data for serial*. Flow Control of the output of connection.
* __databits__: *Required data for serial*. Data bits of the connection. 5, 6, 7 or 8.
* __stopbits__: *Required data for serial*. Stop bits of the connection. 1 or 2.
* __parity__: *Required data for serial*. Parity type of the connection. 0 is NONE parity, 1 is ODD parity, 2 is EVEN parity,
3 is mark parity and 4 is SPACE parity.
* __encoding__: *Required data for serial*. Encoding of the serial connection communication. E.g. ascii or rtu.
* __echo__: *Required data for serial*. Enable echo on the connection (show send data from local to the slave).

_es.amplia.oda.hardware.modbus.cfg_ will have a similar format to:
```
type=UDP
address=localhost
port=1234
timeout=30
```
```
type=TCP
address=localhost
port=1234
timeout=30
reconnect=true
```
```
type=Serial
portName=ttyUSB0
baudRate=115200
flowControlIn=1
flowControlOut=1
databits=8
stopbits=1
parity=0
encoding=ascii
echo=true
```