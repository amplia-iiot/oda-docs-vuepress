### Connectors

The connectors layer handle data at low level to send it and receive it to/from the Internet.

The action of sending data to the Internet is called __uplink__ and all connectors must be able to implement it.

Some connectors are able to receive operations from third systems (usually OpenGate) and answer with the operation response. This feature is implemented in a message received callback.

#### OpenGate Connectors
The OpenGate connectors modules are responsible for sending the byte stream to Internet through the implemented protocol.

The following protocols are implemented in ODA:
* __HTTP__: Send IoT data.
* __WebSocket__: Send IoT data and receive operations.
* __MQTT__: Send IoT data and receive operations.
* __CoAP__: Send IoT data and receive operations

To add new protocols you have to implement the [OpenGateConnector](https://github.com/amplia-iiot/oda/tree/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/OpenGateConnector.java) interface:
```java
public interface OpenGateConnector {
    void uplink(byte[] payload, ContentType contentType);
    boolean isConnected();
}
```

The *uplink* method should send the byte array following the implemented protocol and add the content type if the protocol allows it.

The *isConnected* method is used to check if the connector is connected.

#### SCADA connectors
The SCADA connectors are specific connector for SCADA protocols that works at a higher level than byte array.

There are two available protocols:
* __IEC 104__
* __DNP3__

To implement a new protocol the [ScadaConnector](https://github.com/amplia-iiot/oda/tree/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/ScadaConnector.java) should be implemented:
```java
public interface ScadaConnector {
    void uplink(int index, T value, S type, long timestamp);
    boolean isConnected();
}
```

The *uplink* method implement an uplink of the given type and value to the specified index and with the given timestamp.

The *isConnected* method is used to check if the connector is connected.