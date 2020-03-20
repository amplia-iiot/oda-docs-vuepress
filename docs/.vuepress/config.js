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
						path: '/layers/operationDispatcher.md',
						sidebarDepth: 2
					},
					{
						title: 'Event Dispatcher',
						path: '/layers/eventDispatcher/README.md',
						sidebarDepth: 2
					},
					{
						title: 'Operations',
						path: '/layers/operations.md',
						sidebarDepth: 2
					},
					{
						title: 'State Manager',
						path: '/layers/stateManager.md',
						sidebarDepth: 2
					},
					{
						title: 'Rule Engine',
						path: '/layers/ruleEngine.md',
						sidebarDepth: 2
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
						}
					},
					{
						title: 'Hardware',
						path: '/layers/hardware.md',
						sidebarDepth: 2
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