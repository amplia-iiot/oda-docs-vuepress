### COAP

This connector enable communication via [CoAP Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/coap).

Only allows to send data to the OpenGate platform. Operations can't be received.

#### Dependencies

This module requires the following modules:
* __[Device Info Provider](../datastreams/deviceinfo.md)__: Needed to know the Device Id of the device that are running the Agent and the API Key to access to OpenGate. 
Both data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.
* __ATManager__: If connector is configured as AT type connector, this is necessary to use AT commands in the connector.

#### Configuration

To configure CoAP connector, a file named _es.amplia.oda.connector.coap.cfg_ must be created with the next parameters:
* __type__: *UDP Connector by default*. The available options are: UDP, DTLS, AT. Specify the type of connector that CoAP connector will be.
* __host__: *Required data*. Specify the direction of the third system the connector have to send the data.
* __port__: *Automatically search a default*. Port though the connector have to connect to the host.
* __path__: *Required data*. Main section of the URI where the connector have to handle the data.
* __provisionPath__: *Required data*. Last section of the URI. 
* __timeout__: *30 by default*. Time that connector will wait to achieve the connection.
* __messageProtocolVersion__: *1.0.0 by default*. Version of the protocol used to send the data.
* __localPort__: *4123 by default*. Port Of th current device where the connector will connect.
* __keyStoreType__: *"JKS" by default*. Is the type of the KeyStore that the connector will use.
* __keyStoreLocation__: *null if not specified*, *Required if connector type is DTLS*. Directory where the file of keys will be stored.
* __keyStorePassword__: *null if not specified*, *Required if connector type is DTLS*. Password to access to the KeyStore.
* __clientKeyAlias__: *"client" by default*. Alias used to find in KeyStore and TrustStore the key needed to connect.
* __trustStoreType__: *"JKS" by default*. Is the type of the TrustStore that the connector will use.
* __trustStoreLocation__: *null if not specified*, *Required if connector type is DTLS*. Directory where the file of keys will be stored.
* __trustStorePassword__: *null if not specified*, *Required if connector type is DTLS*. Password to access to the TrustStore.
* __trustedCertificates__: *null if not specified*, *Required if connector type is DTLS*. Names of certificates separated by commas

The file _es.amplia.oda.connector.coap.cfg_ can have several formats:
```
type=UDP
host=localhost
path=v80/devices
provisionPath=collect/iot
```

```
type=DTLS
host=localhost
path=v80/devices
provisionPath=collect/iot
keyStoreLocation=path/to/keyStore
keyStorePassword=passToAccess
trustStoreLocation=path/to/trustStore
trustStorePassword=passToAccess
trustedCertificates=certificates,separated,by,commas
```

```
type=AT
host=localhost
path=v80/devices
provisionPath=collect/iot
```