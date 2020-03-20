### DNP3

This connector enable communication via [DNP3 Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/dnp3).

Allow the transfer of data and operations with a SCADA third-system that implements an DNP3 master (client).

#### Dependencies

This module requires the following modules:
* __Scada Table Info__: Needed to serve to the connector the information of inputs, outputs and counters and can create a DB with them.
* __Scada Dispatcher__: Needed to process the payloads and de/serialize its content.

#### Configuration

To configure DNP3 connector, a file named _es.amplia.oda.connector.dnp3.cfg_ must be created with the next parameters:
* __channelIdentifier__: *"tcpServerChannel" by default*. Unique name of the channel to which the connector will be connected. 
* __outstationIdentifier__: *"outstation" by default*. Unique name of the connector inside the channel.
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

But it can work without anything inside the configuration file except the data you want different from the default