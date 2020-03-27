## Guides

This section will include guides to execute common tasks in ODA development.

### Demos

The demos are examples of a deploy of ODA.

Demos are composed by:
* An assembly directory, with a file in xml format that contains what bundles will be included in the demo. This bundles
are the basic resources of apache and logging and the ODA bundles, which contain the functions of the application.
* A resources bundle that contains all the config files, either of the oda or of the apache and gogo console. Also contains
the script that will run the ODA.

To use them, you have to run the command
```
mvn clean install
```
to generate the tar with everything installed. This tar will have a name with the following format
```
<name of the demo>-<version of the demo>.tar.bz2
``` 
Extract the tar and, if you use a device, move the directory extracted to the device. Change the current directory to
the demo directory and enter the command:
```
./bin/run.sh
```

:::tip
If you're running the demo into OWA450, is important run this as su. To do it, run the command with sudo.
:::

#### Provided demos

Actually are three provided demos by us that the new users of ODA can use to test.

These demos can be extended, adapted and used as a base to make your own demo thanks to the modularity of the ODA components.

##### COAP Demo

This demo contains the required modules to enable the communication through CoAP, use simulated datastreams,
handle operations, handle event and communicate with the OpenGate platform.

This demo can run in any platform just changing the device info module to the specific device info module of it device.

You can see the implementation in [our repository](https://github.com/amplia-iiot/oda/tree/master/oda-demos/coap)

##### MQTT Demo

This demo contains the required modules to enable the communication through MQTT with Opengate, use simulated datastreams,
handle operations and handle event. Also use the In Memory State Manager, that will
store values of the events into a state instead of send it, receiving the stored data when we do a get.

This demo can run in any platform just changing the device info module to the specific device info module of it device.

You can see the implementation in [our repository](https://github.com/amplia-iiot/oda/tree/master/oda-demos/mqtt)

##### FX30 MQTT Demo

This demo contains the required modules to enable the communication through MQTT with Opengate, use simulated datastreams,
handle operations and handle event.

This demo can run in any platform just changing the device info module to the specific device info module of it device.

You can see the implementation in [our repository](https://github.com/amplia-iiot/oda/tree/master/oda-demos/fx30-mqtt)

#### Custom demos

For made your own demo, you have to create the next things:
* assembly/xxxxx.xml: This is a file with the same format as a pom.xml that specify the name of the demo and the deploy
    steps of the demo with the bundles used in the demo.
* resources/apacheFelixConfiguration/config.properties: Framework configuration file.
* resources/apacheFelixConfiguration/logback.xml: Logger configuration file. Specifies how and where (in which file it 
    is stored) the log information have to be stored.
* resources/gogoConsoleConfiguration/gosh_profile: Specifies what the console has to write to interact with the user.
* resources/gogoConsoleConfiguration/motd: Nothing inside this.
* resources/gogoConsoleConfiguration/motd_remote: Initial output of the demo in the console.
* resources/gogoConsoleConfiguration/ssh_profile: Specifies what the console has to write to interact with the user if
    the demo is run through ssh.
* resources/odaBundlesConfiguration/*: The configuration files of the bundles. These files have to be named as is specified
    in its documentation page, in the configuration section.
* resources/scripts/run.sh: This is the bash script that have to run the ODA application.

:::tip
It is advisable to use a provided demo as base for the custom demo.
This is because use existing configuration files, run script and assembly file is easier than made it from scratch.
Instead of create a new file of assembly, change the bundles included in the dependencySet of the deploy directory to the
desired bundles, putting a include section for each bundle included.
If a bundle is removed from the assembly file, delete the configuration file of that bundle and, if it is added, add its
configuration file as is explained in the configuration section of its documentation page. 
:::

In order to choose the bundles that will make up the ODA application it's important to know the dependencies of the bundles that 
we want to use. The dependencies are listed in the Dependencies section of the documentation page of the desired bundle.
A bundle won't work if its dependencies are not included in the demo.

### Devices

Some bundles have many versions depending on the device where the bundle will be run. That is because the libraries implemented
use native code and is require to cross-compile the bundle with the right cross-tools. This bundles are, at this moment:
* [DNP3 Connector](../layers/connectors/dnp3.md)
* [ADC Hardware](../layers/hardware/diozero.md)
* [GPIO Hardware](../layers/hardware/jdkdio.md)

To make it work, you have to install the oda-external-dependencies. To do that, you must have installed the cross-tool of 
the target device and run the install-oda-external-dependencies:
```
./install-oda-external-dependencies.sh
```

#### x86_64 Linux system

To work in your local x86_64 system is not required any installation of a specific cross-tool. Just run the command of
external dependencies and deploy the ODA application.

#### FX30

To work in a FX30 device, you must have installed Legato on your computer and put the legato directory on your home directory.

To install the legato application and its cross tool, download its [official IDE](https://source.sierrawireless.com/resources/airprime/software/developer-studio-installinstructions/#sthash.YUYdT817.dpbs).

:::tip
Remember to extract the content of the downloaded zip in the directory *$HOME/legato* or you will have to change the
path used in the external dependencies pom's to locate the legato cross-tools.
:::

#### OWA450

To work in a OWA device, you must have installed a ng cross-tool on your computer and put it in /opt directory with the
name */opt/gcc-linaro-5.3-2016.02-x86_64_arm-linux-gnueabihf*.

To install a ng cross tool follow the next steps:
1. Download the cross tool with the command: *wget http://crosstool-ng.org/download/crosstool-ng/crosstool-ng-1.23.0.tar.bz2*.
2. Create a directory called *gcc-linaro-5.3-2016.02-x86_64_arm-linux-gnueabihf* in */opt*.
3. Extract the downloaded tar in the directory.

If any command of the download is missed, you will have to install it, doing an `apt-get install \<name of the command>`.
This commands are usually gperf, bison, flex, texinfo and help2man.

If an error which contains "lib curses" occurs you have to do an `apt-get install libncurses-dev`.

### Functions

#### MQTT Communication

There are several bundles about the MQTT communication and can be a little confusing understand how to use them. For this
reason, we have created this guide. To explain what is the point of each bundle and how to deploy it.

##### MQTT Comms

This is a kind of interface to the MQTT functionality bundles.

Provides of various interfaces that the MQTT bundles will use and implements to achieve the connection with the remote MQTT
broker and the minimum implemented common classes to handle the MQTT local clients that use the functions and classes of
the ODA's MQTT library.

The main end of this module is collect all the uses of the MQTT library in one module as hardware modules do with their respective libraries.

The library that implements ODA to handle the MQTT connection is the [eclipse paho](https://www.eclipse.org/paho/).

To add this bundle to the ODA application is not needed another MQTT bundle, but it's necessary (like with the most part
of ODA bundles) to add the [Core Commons](../infrastructure/core.md). That is because the core commons provides some enums
that this module uses. 

##### MQTT Connector

This connector allow to connect with the third system platform (e.g. SCADA or OpenGate) in order to send to it the collected
data and allow to receive and respond the operation that these platforms can send to ODA.

This module doesn't uses the paho library but requires that the [MQTT Comms](../infrastructure/comms.md) bundle has been added to the ODA.
In addition to this, requires the [Core Commons](../infrastructure/core.md). That is because the core commons provides the
same enums that uses the MQTT Comms, some interfaces and proxies of other dependencies that this module have and some utils.

##### MQTT Datastream

This datastream allow to connect with another device through MQTT and use its registered datastreams. To do this, ODA 
have to connect to the same broker that the device, ask it for its registered datastreams, enable the datastreams that the
device provides to ODA and, when this is done, made the desired operations about the datastreams controlled by this device.
To do the operations on the remote device's datastreams, the connection have to be still alive. To know if is alive or not,
the device should have a Last Will Message accorded with the broker that will sent to the ODA if the connection of the device
is dropped to disable the datastreams in ODA and the device itself have to send a similar message if disconnect correctly.

That messages will have a topic specific to its message type, sending the Last Will messages through one topic, enabling
datastreams messages through another, disabling datastreams messages by another...

This module doesn't uses the paho library but requires that the [MQTT Comms](../infrastructure/comms.md) bundle has been added to the ODA.
In addition to this, requires the [Core Commons](../infrastructure/core.md). That is because the core commons provides the
same enums that uses the MQTT Comms, some interfaces and proxies of other dependencies that this module have and some utils.