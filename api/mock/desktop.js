module.exports = {
	"pannels": [
		{
			"name" : "pannel-1",
			"large" : true
		},
		{
			"name" : "pannel-2",
			"large" : false
		}

	],
	"widgets": [
		{
			"name"      : "CRM1",
			"viewType"  : "IndexView",
			"pannelName": "pannel-1",
			"order": 0
		},
		{
			"name"      : "CRM2",
			"viewType"  : "IndexView",
			"pannelName": "pannel-2",
			"order": 0
		},
		{
			"name"      : "CRM3",
			"viewType"  : "IndexView",
			"pannelName": "",
			"order": 1
		},
		{
			"name"      : "CRM4",
			"viewType"  : "ChartView",
			"pannelName": "",
			"order": 2
		},
		{
			"name"      : "CRM5",
			"viewType"  : "DeviceView",
			"pannelName": "",
			"order": 3
		}
	]
}
