module.exports = {
	title: 'ODA',
	base: "/oda-docs/",
	themeConfig: {
		nav: [{
				text: 'Documentation',
				link: '/'
			},
			{
				text: 'Source Code',
				link: 'https://github.com/amplia-iiot/oda'
			}
		],
		sidebar: [{
				title: 'ODA',
				path: '/',
				sidebarDepth: 1
			},
			{
				title: 'Infrastructure',
				path: '/infrastructure/',
				sidebarDepth: 1,
				children: [{
						title: 'Core',
						path: '/infrastructure/core.md',
						sidebarDepth: 2
					},
					{
						title: 'Comms',
						path: '/infrastructure/comms.md',
						sidebarDepth: 2
					},
					{
						title: 'Services',
						path: '/infrastructure/services.md',
						sidebarDepth: 2
					},
					{
						title: 'Subsystems',
						path: '/infrastructure/subsystems.md',
						sidebarDepth: 2
					}
				]
			},
			{
				title: 'Layers',
				path: '/layers/',
				sidebarDepth: 1,
				children: [{
						title: 'Connectors',
						path: '/layers/connectors/README.md',
						sidebarDepth: 2,
						children: [{
						    title: 'CoAP',
                            path: '/layers/connectors/coap.md',
                            sidebarDepth: 3
						},
						{
						    title: 'DNP3',
                            path: '/layers/connectors/dnp3.md',
                            sidebarDepth: 3
						},
						{
						    title: 'HTTP',
                            path: '/layers/connectors/http.md',
                            sidebarDepth: 3
						},
						{
						    title: 'iec104',
                            path: '/layers/connectors/iec104.md',
                            sidebarDepth: 3
						},
						{
						    title: 'mqtt',
                            path: '/layers/connectors/mqtt.md',
                            sidebarDepth: 3
						},
						{
						    title: 'websocket',
                            path: '/layers/connectors/websocket.md',
                            sidebarDepth: 3
						}]
					},
					{
						title: 'Operation Dispatcher',
						path: '/layers/operationdispatcher/README.md',
						sidebarDepth: 2
					},
					{
						title: 'Event Dispatcher',
						path: '/layers/eventdispatcher/README.md',
						sidebarDepth: 2,
                        children: [{
                            title: 'Event API',
                               path: '/layers/eventdispatcher/events.md',
                               sidebarDepth: 3
                        }]
					},
					{
						title: 'Operations',
						path: '/layers/operations/README.md',
						sidebarDepth: 2,
                        children: [{
                            title: 'Local Protocol Discovery',
                               path: '/layers/operations/discover.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Get Device Parameters',
                               path: '/layers/operations/getdeviceparameters.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Refresh Information',
                               path: '/layers/operations/refreshinfo.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Set Clock',
                               path: '/layers/operations/setclock.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Set Device Parameters',
                               path: '/layers/operations/setdeviceparameters.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Synchronize Clock',
                               path: '/layers/operations/synchronizeclock.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Update',
                               path: '/layers/operations/update.md',
                               sidebarDepth: 3
                        }]
					},
					{
						title: 'State Manager',
						path: '/layers/statemanager/README.md',
						sidebarDepth: 2,
                        children: [{
                            title: 'In Memory',
                               path: '/layers/statemanager/inmemory.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Real Time',
                               path: '/layers/statemanager/realtime.md',
                               sidebarDepth: 3
                        }]
					},
					{
						title: 'Rule Engine',
						path: '/layers/ruleengine/README.md',
						sidebarDepth: 2,
                        children: [{
                            title: 'Nashorn Implementation',
                               path: '/layers/ruleengine/nashorn.md',
                               sidebarDepth: 3
                        },
                        {
                            title: 'Utils.js file',
                               path: '/layers/ruleengine/utils.md',
                               sidebarDepth: 3
                        }]
					},
					{
						title: 'Datastreams',
						path: '/layers/datastreams/README.md',
						sidebarDepth: 2,
						children: [{
						    title: 'ADC',
                            path: '/layers/datastreams/adc.md',
                            sidebarDepth: 3
						},
						{
						    title: 'Device Info',
                            path: '/layers/datastreams/deviceinfo.md',
                            sidebarDepth: 3
						},
						{
						    title: 'GPIO',
                            path: '/layers/datastreams/gpio.md',
                            sidebarDepth: 3
						},
						{
						    title: 'I2C',
                            path: '/layers/datastreams/i2c.md',
                            sidebarDepth: 3
						},
						{
						    title: 'ModBus',
                            path: '/layers/datastreams/modbus.md',
                            sidebarDepth: 3
						},
						{
						    title: 'MQTT',
                            path: '/layers/datastreams/mqtt.md',
                            sidebarDepth: 3
						},
						{
						    title: 'Simulator',
                            path: '/layers/datastreams/simulator.md',
                            sidebarDepth: 3
						}]
					},
					{
						title: 'Hardware',
						path: '/layers/hardware/README.md',
						sidebarDepth: 2,
						children: [{
						    title: 'AT Server',
                            path: '/layers/hardware/atserver.md',
                            sidebarDepth: 3
						},
						{
						    title: 'GSM Comms',
                            path: '/layers/hardware/comms.md',
                            sidebarDepth: 3
						},
						{
						    title: 'ADC',
                            path: '/layers/hardware/diozero.md',
                            sidebarDepth: 3
						},
						{
						    title: 'I2C',
                            path: '/layers/hardware/i2c.md',
                            sidebarDepth: 3
						},
						{
						    title: 'JDK DIO',
                            path: '/layers/hardware/jdkdio.md',
                            sidebarDepth: 3
						},
						{
						    title: 'ModBus',
                            path: '/layers/hardware/modbus.md',
                            sidebarDepth: 3
						}]
					}
				]
			},
			{
				title: 'Guides',
				path: '/guides/',
				sidebarDepth: 1,
				children:[]
			}
		]
	}
}