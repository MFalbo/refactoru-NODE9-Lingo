var beGlobal = require('node-beglobal');
var beglobal = new beGlobal.BeglobalAPI({
  api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
});
var languageList = [];

beglobal.languages.all(
	function(err, results) {
	    if (err) {
	      return console.log(err);
	    }
	    var idLookup = [];
	    for(var i=0; i<results.length; i++){
	    	if(idLookup.indexOf(results[i].from.id) === -1){
	    		idLookup.push(results[i].from.id);
		    	languageList.push(results[i].from);
	    	}				    	
  		}
  	}
);

module.exports = languageList;