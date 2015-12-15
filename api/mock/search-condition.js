

module.exports ={
  "title":"高级选项",
  "callback":"searchConditionLoaded",
  "inputArray":[{"init":"show","type":"TEXTFIELD","label":"邮箱","validation":"require:true email","name":"email"},
          		{"init":"show","type":"RAISEDBUTTON","label":"搜索","validation":"ignore","name":"btn"},
          		{"init":"hide","type":"SELECTFIELD","label":"下拉菜单","validation":"require:true","name":"keyword","itemArray":[{"text": "", "id": 0}, {"text": "GRE", "id": 1}, {"text": "SAT", "id": 2}]},
          		{"init":"hide","type":"TEXTFIELD","label":"QQ","validation":"require:false num","name":"qq"},
          		{"init":"hide","type":"TEXTFIELD","label":"手机","validation":"require:false phone","name":"phone"},
          		{"init":"hide","type":"DATEPICKER","label":"开始时间","validation":"require:true","name":"starttime"},
          		{"init":"hide","type":"DATEPICKER","label":"结束时间","validation":"require:true datelater:starttime","name":"endtime"},
          		{"init":"hide","type":"TOGGLE","label":"已试听","validation":"ignore","name":"listen"},
          		{"init":"hide","type":"CHECKBOX","label":"已选择","validation":"ignore","name":"write"}
          		]

}