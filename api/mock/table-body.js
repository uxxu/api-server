
var data = [];
for(var i=0; i<200; i++){
	data.push({
		id: i,
		name: 'jim'+i,
		age: 21,
		mobile: '13000000'+ Math.random().toString().slice(-4)
	})
}

module.exports = data



