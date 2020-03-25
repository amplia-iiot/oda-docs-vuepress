### Update

This operation is used to install/change/delete a local file of the application by the third system.

The operation will specifies the steps that ODA have to do and the url where the new files can be download to change the actuals or create news.

This means that his operation can extend the actual Agent already installed into the device at runtime.

#### Dependencies

* [Commons](../../infrastructure/core.md): Required to provide the commons utils.
* [Operation API](README.md): Provides the api of the operation and the enums of the result code.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1557395219834,"name":"UPDATE","parameters":[{"name":"bundleName","value":{"string":"rules-creation-test"}},{"name":"bundleVersion","value":{"string":"2.0.0"}},{"name":"deploymentElements","type":"string","value":{"array":[{"name":"" + this.name + "","version":"2.0.0","type":"SOFTWARE","downloadUrl":"http://" + jschData.getSSH_SERVER_IP() + ":" + PORT_HTTP_SERVER + "/echoGet","path":"rules/" + this.datastreamId + "","order":1,"operation":"INSTALL","validators":[],"size":334,"oldVersion":"1.0.0"}]}}],"id":"48589c6e-3d9f-4e59-a066-81f357fb6cf8"}}}''