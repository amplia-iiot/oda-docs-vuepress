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
				collapsable: false,
				sidebarDepth: 1
			},
			{
				title: 'Layers',
				collapsable: false,
				sidebarDepth: 1,
				children: [{
						title: 'Connectors',
						path: '/connectors.md',
						sidebarDepth: 2
					},
					{
						title: 'Operation Dispatcher',
						path: '/operationDispatcher.md',
						sidebarDepth: 2
					},
					{
						title: 'Event Dispatcher',
						path: '/eventDispatcher.md',
						sidebarDepth: 2
					},
					{
						title: 'Operations',
						path: '/operations.md',
						sidebarDepth: 2
					},
					{
						title: 'State Manager',
						path: '/stateManager.md',
						sidebarDepth: 2
					},
					{
						title: 'Rule Engine',
						path: '/ruleEngine.md',
						sidebarDepth: 2
					},
					{
						title: 'Datastraems',
						path: '/datastreams.md',
						sidebarDepth: 2
					},
					{
						title: 'Hardware',
						path: '/hardware.md',
						sidebarDepth: 2
					},
				]
			}
		]
	}
}