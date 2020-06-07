| Module Group  | Module / Bundle                                                | Dependencies                                          |                                                  |                                                       |                                                   |
| :-----------: | :------------------------------------------------------------: | :---------------------------------------------------: | :----------------------------------------------: | :---------------------------------------------------: | :-----------------------------------------------: |
| Comms         | [MQTT](../infrastructure/comms.md)                             | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Connectors    | [coap](../layers/connectors/coap.md)                           | [Core Commons](../infrastructure/core.md)             | [AT Server](../layers/hardware/atserver.md)      |                                                       |                                                   |
| Connectors    | [DNP3](../layers/connectors/dnp3.md)                           | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Connectors    | [HTTP](../layers/connectors/http.md)                           | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Connectors    | [IEC104](../layers/connectors/iec104.md)                       | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Connectors    | [MQTT](../layers/connectors/mqtt.md)                           | [Core Commons](../infrastructure/core.md)             | [MQTT Comms](../infrastructure/comms.md)         |                                                       |                                                   |
| Connectors    | [websocket](../layers/connectors/websocket.md)                 | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Core          | [commons](../infrastructure/core.md)                           |                                                       |                                                  |                                                       |                                                   |
| Datastream    | [ADC](../layers/datastreams/adc.md)                            | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Datastream    | [Device Info](../layers/datastreams/deviceinfo.md)             | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Datastream    | [Device Info FX30](../layers/datastreams/deviceinfo.md)        | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Datastream    | [GPIO](../layers/datastreams/gpio.md)                          | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Datastream    | [I2C](../layers/datastreams/i2c.md)                            | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) |                                                       |                                                   |
| Datastream    | [ModBus](../layers/datastreams/modbus.md)                      | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Datastream    | [MQTT](../layers/datastreams/mqtt.md)                          | [Core Commons](../infrastructure/core.md)             | [MQTT Comms](../infrastructure/comms.md)         |                                                       |                                                   |
| Datastream    | [Simulador](../layers/datastreams/simulator.md)                | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Dispatchers   | [OpenGate](../layers/operationdispatcher#OpenGate Dispatcher)  | [Core Commons](../infrastructure/core.md)             | [Operation API](../layers/operations)            | [Event API](../layers/eventdispatcher/events.md)      |                                                   |
| Dispatchers   | [SCADA](../layers/operationdispatcher#SCADA Dispatcher)        | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Events        | [Events API](../layers/eventdispatcher/events.md)              | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Hardware      | [AT Server](../layers/hardware/atserver.md)                    | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Hardware      | [Comms](../layers/hardware/comms.md)                           | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Hardware      | [DioZero](../layers/hardware/diozero.md)                       | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Hardware      | [I2C](../layers/hardware/i2c.md)                               | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Hardware      | [JDKDIO](../layers/hardware/jdkdio.md)                         | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Hardware      | [ModBus](../layers/hardware/modbus.md)                         | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Operations    | [API](../layers/operations/README.md)                          | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Operations    | [Get](../layers/operations/getdeviceparameters.md)             | [State Manager API](../layers/statemanager/README.md) | [Operation API](../layers/operations)            |                                                       |                                                   |
| Operations    | [Discovery](../layers/operations/discover.md)                  | [Core Commons](../infrastructure/core.md)             | [Operation API](../layers/operations)            | [MQTT Comms](../infrastructure/comms.md)              |                                                   |
| Operations    | [Refresh Info](../layers/operations/refreshinfo.md)            | [State Manager API](../layers/statemanager/README.md) | [Operation API](../layers/operations)            |                                                       |                                                   |
| Operations    | [Set](../layers/operations/setdeviceparameters.md)             | [State Manager API](../layers/statemanager/README.md) | [Operation API](../layers/operations)            |                                                       |                                                   |
| Operations    | [Set Clock](../layers/operations/setclock.md)                  | [Core Commons](../infrastructure/core.md)             | [Operation API](../layers/operations)            | [State Manager API](../layers/statemanager/README.md) |                                                   |
| Operations    | [Sync Clock](../layers/operations/synchronizeclock.md)         | [Core Commons](../infrastructure/core.md)             | [Operation API](../layers/operations)            | [State Manager API](../layers/statemanager/README.md) |                                                   |
| Operations    | [Update](../layers/operations/update.md)                       | [Core Commons](../infrastructure/core.md)             | [Operation API](../layers/operations)            |                                                       |                                                   |
| Rule Engine   | [API](../layers/ruleengine/README.md)                          | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) |                                                       |                                                   |
| Rule Engine   | [Nashorn](../layers/ruleengine/nashorn.md)                     | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) | [State Manager API](../layers/statemanager/README.md) | [Rule Engine API](../layers/ruleengine/README.md) |
| Services      | [CBOR Serializer](../infrastructure/services.md#Serialization) | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Services      | [JSON Serializer](../infrastructure/services.md#Serialization) | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| State Manager | [API](../layers/statemanager/README.md)                        | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) |                                                       |                                                   |
| State Manager | [In Memory](../layers/statemanager/inmemory.md)                | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) | [State Manager API](../layers/statemanager/README.md) | [Rule Engine API](../layers/ruleengine/README.md) |
| State Manager | [Real Time](../layers/statemanager/realtime.md)                | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) | [State Manager API](../layers/statemanager/README.md) |                                                   |
| Subsystem     | [Collector](../infrastructure/subsystems.md#Collector)         | [Core Commons](../infrastructure/core.md)             | [Event API](../layers/eventdispatcher/events.md) | [State Manager API](../layers/statemanager/README.md) |                                                   |
| Subsystem     | [Poller](../infrastructure/subsystems.md#Poller)               | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |
| Subsystem     | [SSH Server](../infrastructure/subsystems.md#SSH Server)       | [Core Commons](../infrastructure/core.md)             |                                                  |                                                       |                                                   |