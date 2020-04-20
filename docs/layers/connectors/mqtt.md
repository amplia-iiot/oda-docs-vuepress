### MQTT

This connector enable communication via [MQTT Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/mqtt).

Allows to send data to the OpenGate platform and receive operations from it.

#### Dependencies

This module requires the following modules:
* __[Core commons](../../infrastructure/core.md)__: Provides many interfaces that this module will use
* __[Mqtt Communications Module](../../infrastructure/comms.md#mqtt)__: Needed to create the MQTT client that will connects 
to the MQTT broker of the third system.
* __[Dispatcher](../operationdispatcher/README.md)__: Needed to process the payloads and de/serialize its content.
* __[Device Info Provider](../datastreams/deviceinfo.md)__: Needed to know the Device Id of the device that are running the Agent, and the API Key to access 
to OpenGate. 
Both data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.

#### Configuration

To configure MQTT connector, a file named _es.amplia.oda.connector.mqtt.cfg_ must be created with the next parameters:
* __host__: *Required parameter*. Specify the direction of the third system the connector have to send the data. 
'localhost' is a good host to do tests with.
* __port__: *1883 by default*. Port though the connector have to connect to the host.
* __securePort__: *8883 by default*. Alternative port to connect securely.
* __secure__: *false by default*. True to connect to the secure port, false to connect to common port.
* __mqttVersion__: *MQTT_3_1_1 by default*. Available options are MQTT_3_1, MQTT_3_1_1. MQTT version that connector has to use.
* __keepAliveInterval__: *60 by default*. Interval defined by MQTT client to communicate a keep alive message before to disconnect.
* __maxInFlight__: *10 by default*. Maximum messages that can be queued to be transmitted simultaneously.
* __cleanSession__: *true by default*. To specify if the connection is persistent (false) or not (true). If clean session 
is true, the broker doesn't store information or messages.
* __connectionTimeout__: *30 by default*. Time that client will wait to achieve the connection.
* __automaticReconnect__: *true by default*. If the connection fails and this option is true, enable the option to reconnect 
with the broker.


* __lwt.topic__: *null if not specified*. Topic where the client will receive all Last Will messages from another clients. 
Last Will messages are a pre-agreed message between the client, and the broker to send to the other clients in case of an 
unexpected disconnection.
* __lwt.payload__: *null if not specified*. LWT Payload is the data that the client will agree with the broker to send to 
another clients in case of connector's client be disconnected unexpectedly.
* __lwt.qos__: *1 by default*, *if topic and payload are specified, will be 1 by default*. Specify the qos of the LWT.
* __lwt.retained__: *null if not specified*, *if topic and payload are specified, will be false by default*. Specifies if 
the broker will send to the another clients the LW messages even when that clients connect to the broker after the connector's 
client disconnect unexpectedly. 


* __keyStore.path__: *null if not specified*. Directory where the file of keys will be stored.
* __keyStore.type__: *null if not specified*, *if keyStore and trustStore path and password are specified, is JKS by default*. 
The available options are: JKS, JCEKS, PKCS12, PKCS11, DKS, WINDOWS_MY, BKS. Is the type of the KeyStore that the connector will use.
* __keyStore.password__: *null if not specified*. Password to access to the KeyStore.
* __keyManager.algorithm__: *null if not specified*, *if keyStore and trustStore path and password are specified, is SunX509 
by default*. Available options are PKIX, SUN_X509, SUN_JSSE. Specify the algorithm used to handle the keys.
* __trustStore.path__: *null if not specified*. Directory where the file of trust keys will be stored.
* __trustStore.type__: *null if not specified*, *if keyStore and trustStore path and password are specified, is JKS by default*. 
The available options are: JKS, JCEKS, PKCS12, PKCS11, DKS, WINDOWS_MY, BKS. Is the type of the TrustStore that the connector will use.
* __trustStore.password__: *null if not specified*. Password to access to the TrustStore.
* __trustManager.algorithm__: *null if not specified*, *if keyStore and trustStore path and password are specified, is SunX509 
by default*. Available options are PKIX, SUN_X509, SUN_JSSE. Specify the algorithm used to handle the keys.


* __topic.iot__: *Required parameter*. The topic to which the data transferred will be sent to the third-system (e.g. OpenGate).
* __topic.request__: *Required parameter*. The topic to which the operations will be sent from the third-system to the ODA for processing.
* __topic.response__: *Required parameter*. The topic to which the operations responses will be sent from the ODA to the third-system.


* __message.qos__: *1 by default*. This parameter can be 0, 1 or 2. QOS that will have the messages sent by connector's client. 
QOS is the level agreed between client and broker to ensure the delivery of the message.
* __message.retained__: *false by default*. If is true, the last message sent to broker will be sent to another clients 
even if those clients connects after the message was sent.


* __connection.initialDelay__: *0 by default*. Time wait by the connector's client to try the initial connection to the broker.
* __connection.retryDelay__: *300 by default*. If first try fails, time that the connector's client will wait before the next try to connect.

The file _es.amplia.oda.connector.mqtt.cfg_ could have a lot of parameters, but it can works correctly with the next parameters:
```
host=localhost
topic.request=odm/request
topic.response=odm/response
topic.iot=odm/iot
message.qos=1
```

#### Source Code

You can check the source code [here](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/mqtt)