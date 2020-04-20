### Real Time State Manager

This State Manager will process directly any operation or event that arrives to it. This means, that the incoming value
isn't processed in the state manager and the rule engine is not used.

When a event arrives, the state manager will send it directly to the third system, and the sent the value as it comes.

When a get operation arrives, the state manager will get the value from the datastream source.

When a set operation arrives, the arrived value from the operation will be setted into the datastream source directly,
without any affect over the state of the state manager.

#### Dependencies

* __[Core Commons](../../infrastructure/core.md)__: Provides the API of the configurable Bundles, Datastreams handling API's and Device API's.
* __[State Manager API](../statemanager/README.md)__: Provides the API that this module will implements.
* __[Event API](../eventdispatcher/events.md)__: Provides the event interface to handle the internal events of ODA.

#### Configuration

This bundle doesn't requires any configuration. 