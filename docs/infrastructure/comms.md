### Comms

The Comms multi-module contains communication protocols that are used as LAN and WAN.

When the same protocol is used to connect with the Internet, with OpenGate or other third services, and to connect with local devices, is better to create and abstraction of the protocol to reuse code in both sides. Usually this abstraction is a service providing a factory to create clients and servers of the protocol.

#### Protocols

##### MQTT

The MQTT protocol is used to connect to OpenGate and also to connect with a MQTT broker in the local network to integrate devices in the local area.

An API is defined to create MQTT clients and to use them, decoupling from the chosen MQTT library implementation.
```java
public interface MqttClientFactory {
    MqttClient createMqttClient(String serverUri, String clientId) throws MqttException;
}
```

The MQTT Client API is
```java
public interface MqttClient {
    void connect();
    void connect(MqttConnectOptions options);
    void subscribe(String topic, MqttMessageListener listener);
    void unsubscribe(String topic);
    void publish(String topic, MqttMessage message, ContentType contentType);
    boolean isConnected();
    void disconnect();
}
```
