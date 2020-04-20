### DNP3

This connector enables communication via [DNP3 Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/dnp3).

Allow the transfer of data and operations with an SCADA third-system that implements an DNP3 master (client).

#### Dependencies

This module requires the following modules:
* __Scada Table Info__: Needed to serve to the connector the information of inputs, outputs and counters and can create a DB with them.
* __[Scada Dispatcher](../operationdispatcher/README.md#SCADA Dispatcher)__: Needed to process the payloads and de/serialize its content.
* __[Core Commons](../../infrastructure/core.md)__: Provides many interfaces that this module will use.

#### Configuration

To configure DNP3 connector, a file named _es.amplia.oda.connector.dnp3.cfg_ must be created with the next parameters:
* __channelIdentifier__: *"tcpServerChannel" by default*. A unique name of the channel to which the connector will be connected. 
* __outstationIdentifier__: *"outstation" by default*. A unique name of the connector inside the channel.
* __ipAddress__: *"0.0.0.0" by default*. IP direction of the allowed incoming messages through the channel. 0.0.0.0 allows that all 
the directions could send messages to the connector. Is the way to specify from where can be sent messages in case of only one sender. 
* __ipPort__: *20000 by default*. Port though the connector have to connect to the host.
* __localDeviceDnpAddress__: *1 by default*. Direction of the own connector.
* __remoteDeviceDnpAddress__: *1024 by default*. Direction of the device from the connector will receive messages.
* __unsolicitedResponse__: *false by default*. Enable / disable the option to send unsolicited messages.
* __eventBufferSize__: *5 by default*. Specify the number of events that can be buffered on the local connector before overflowing.
* __logLevel__: *NORMAL default*. The available options are 0 (No log), 15 (Normal log), 30720 (APP_COMMS log), 65535 (All log).

In other words, _es.amplia.oda.connector.dnp3.cfg_ can will have the content:
```
channelIdentifier=channelIdentifier
outstationIdentifier=connectorIdentifier
ipAddress=0.0.0.0
ipPort=20000
localDeviceDnpAddress=1
remoteDeviceDnpAddress=1024
unsolicitedResponse=false
eventBufferSize=10
logLevel=0
```

It can work without anything inside the configuration file except the data you want different from the default.

#### Source Code

You can check the source code [here](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/dnp3)