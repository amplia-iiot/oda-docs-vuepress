### Operations

The operation layer contains operations that can be executed by the device.

The [API module](https://github.com/amplia-iiot/oda/tree/master/oda-operations/api) has the basic operation definitions and the custom operations interface.

#### Basic Operations

The basic operations are:
* __Refresh Info__: Send the values of the datastreams at the moment the operation is received.
* __Get Device Parameters__: Get the values of the specified datastreams at the moment the operation is received.
* __Set Device Parameters__: Set the given values in the specified datastreams.
* __Set Clock__: Set the clock of the specified device with the given timestamp.
* __Synchronize Clock__: Synchronize the clock of the specified device with the given source.
* __Discover__: Send a discovery command to all devices in the LAN network to register themselves.
* __Update__: Make a software or configuration update in the device.

#### Custom Operations

The [CustomOperation](https://github.com/amplia-iiot/oda/blob/master/oda-operations/api/src/main/java/es/amplia/oda/operation/api/CustomOperation.java) interface allows to add operation specific to project needs easily, without modifying the operations api modules and operation dispatcher.

```java
public interface CustomOperation {
    CompletableFuture<Result> execute(String deviceId, Map<String, Object> params);
    String getOperationSatisfied();
}
```

To implement a custom operation you should deploy a new OSGi bundle with a registered service implementing the __execute__ method. Usually, this method should extract the operation params from the params generic map, execute the operation and return a result object with all the necessary information about the operation execution. It also has to define which operation is responsible for through the __getOperationSatisfied__ method. 