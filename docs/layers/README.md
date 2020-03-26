## Layers

ODA is composed of the following layers:

* [__Connectors__](connectors/README.md): Send and received data to/from the Internet at a low level of abstraction (byte array).
* [__Operation Dispatcher__](operationdispatcher/README.md): Converts from low level data into high level representation to process operations and send the responses.
* [__Event Dispatcher__](eventdispatcher/README.md): Converts data events into a low level data representation to send it through the connectors.
* [__Operations__](operations/README.md): Implements a specific operation inside the device.
* [__State Manager__](statemanager/README.md): Stores the device data state in the current moment.
* [__Rule Engine__](ruleengine/README.md): Triggers custom business logic rules over the device data.
* [__Datastream Getters, Setters and Events__](datastreams/README.md): Abstracts the data sources to ease the access to read and write data from the upper layers.
* [__Hardware__](hardware/README.md): Abstracts the hardware specifics.

![ODA layers](../asset/img/layers.png)