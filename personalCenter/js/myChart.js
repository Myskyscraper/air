// 指定图表的配置项和数据
option = {
	backgroundColor:'#fff',

	tooltip : {
		trigger: 'axis'
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	toolbox: {

	},
	xAxis : [
		{
			axisLine:{show:false},
			axisTick:{show:false},
			type : 'category',
			boundaryGap : true,
			data: preMonthArray
		}
	],
	yAxis : [
		{
			axisTick:{show:false},
			axisLine:{show:false},
			type : 'value'
		}
	],
	series : [
		{
			name:'',
			type:'line',
			stack: '总量',
			itemStyle: {
				normal: {  color: '#62abf5',borderColor:'#62abf5',borderWidth :'3'}},

			name:'日净资产',
			data: preMonthDataArray,
			areaStyle: {normal: { color:'rgba(200,234,255,0.4)'}}

		}
	]
};




// 指定图表的配置项和数据
option1 = {
	backgroundColor:'#fff',

	tooltip : {
		trigger: 'axis'
	},
	legend: {
		data:['邮件营销']
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	toolbox: {

	},
	xAxis : [
		{
			axisLine:{show:false},
			axisTick:{show:false},
			type : 'category',
			boundaryGap : true,
			data: currMonthArray
		}
	],
	yAxis : [
		{
			axisTick:{show:false},
			axisLine:{show:false},
			type : 'value'
		}
	],
	series : [
		{
			name:'',
			type:'line',
			stack: '总量',
			itemStyle: {
				normal: { color: '#62abf5',borderColor:'#62abf5',borderWidth :'3'}},
			name:'日净资产',
			data: currMonthDataArray,
			areaStyle: {normal: { color:'rgba(200,234,255,0.4)'}}

		}
	]
};


/*基于准备好的dom，初始化echarts实例*/
var myChart = echarts.init(document.getElementById('main-chart'));
var myChart1 = echarts.init(document.getElementById('main-chart1'));
myChart1.setOption(option1);

/*使用刚指定的配置项和数据显示图表。*/
myChart.setOption(option);