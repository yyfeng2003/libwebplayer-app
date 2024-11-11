function parseQuery(qs) {
    qs = qs || window.location.search;

    var fix = function(v){
		return decodeURIComponent(v.replace(/\+/g, ' '));
    };

    var qsStr = qs.split('?')[1];
    var params = {};

    if(!qs || !qsStr) return params;

    var qsArr = qsStr.split('&');
    var l = qsArr.length;

    for(var i = 0; i < l; i++){
		var cur = qsArr[i].split('=');
		var key = cur[0], val = fix(cur[1] || '');
		var curParam = params[key];

		if(curParam){
			if(Array.isArray(curParam)){
				curParam.push(val);
			}else{
				params[key] = [curParam, val];
			}
		} else {
			params[key] = val;
		}
    }
    return params;
}

window.onload = function() {	
	var q = window.q = parseQuery(); 
	/* q.uid && q.ticket && */ main() 
}