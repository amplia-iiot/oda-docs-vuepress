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
						path: '/layers/connectors.md',
						sidebarDepth: 2
					},
					{
						title: 'Operation Dispatcher',
						path: '/layers/operationDispatcher.md',
						sidebarDepth: 2
					},
					{
						title: 'Event Dispatcher',
						path: '/layers/eventDispatcher.md',
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
						path: '/layers/datastreams.md',
						sidebarDepth: 2
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