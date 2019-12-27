### Event Dispatcher

The event dispatcher is responsible for receiving the events generated in the device and sending them through the available connectors.  

The interface defining the service is the [EventDispatcher](https://github.com/amplia-iiot/oda/blob/master/oda-events/api/src/main/java/es/amplia/oda/event/api/EventDispatcher.java) interface and the main method is the __publish__ method that receives an event:
```java
public interface EventDispatcher {
    void publish(Event event);
}
``` 
The [Event](https://github.com/amplia-iiot/oda/blob/master/oda-events/api/src/main/java/es/amplia/oda/event/api/Event.java) is defined as:
```java
public class Event {
    private String datastreamId;
    private String deviceId;
    private String[] path;
    private Long at;
    private Object value;
}
```

#### OpenGate Event Dispatcher

The [OpenGate Event Dispatcher](https://github.com/amplia-iiot/oda/blob/master/oda-dispatchers/opengate/src/main/java/es/amplia/oda/dispatcher/opengate/event/EventDispatcherImpl.java) publishes the received events through an OpenGate connector with the [OpenGate IOT JSON](http://jekyll.amplia.es/OpenGateDoc/LATEST/opengate-doc-api/api-south/opengate-api-south.html#collect_history) format.

The __publish__ method use the proper serializer to serialize the received event to the configured content-type and send it to the active OpenGate Connector.

##### Configuration

The Event Dispatcher can be configured with the following global properties:
* __reducedOutput__: Use a reduced IOT format, removing all optional fields, to decrease the bandwidth consumed. The default value is _false_
* __eventContentType__: Content-type of the published events. The default content-type format is _JSON_.

Using a decorator pattern, the [Event Collector](https://github.com/amplia-iiot/oda/blob/master/oda-dispatchers/opengate/src/main/java/es/amplia/oda/dispatcher/opengate/event/EventCollectorImpl.java) allows to store the events of some configured datastreams to send multiple datapoints in the same message at a configured period of time. Each datastream is configured in a line in the configuration file with the following format:
```
datastreamId;deviceId=initialDelay;period
```
The configuration is built with the properties:
* __datastreamId__: Datastream identifier configured.
* __deviceId__: Device identifier configured. If not set, the current configuration is applied to all devices. _Optional_
* __initialDelay__: First time the collected events are sent. _Optional_
* __period__: Period in which the collected events are sent. May be _0_ to configure a datastream that must be sent just one time when ODA starts.

An example of a valid configuration may be:
```
reducedOutput=true                  # Use reduce output
eventContentType=JSON               # Use JSON format content-type
device.software=30;0                # Send all devices software 30 seconds after start-up and do not sending again
device.temperature.value=60         # Send all devices temperatures every 60 seconds
current;sectionalizer123=30;300     # Send the sectionalizer123 current 30 seconds after start-up and every 5 minutes.
```