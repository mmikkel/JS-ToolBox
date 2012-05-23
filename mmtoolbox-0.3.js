/*
/* ToolBox
/* v.0.3.0
/* @author M. Mikkel Rummelhoff
/* @url http://www.mmikkel.no
/* All code © 2011 M. Mikkel Rummelhoff except where otherwise noted 
*/

// IE Array fix
if(!Array.prototype.indexOf)
	Array.prototype.indexOf = function(item, startIndex) {
    var len = this.length;
    if (startIndex == null)
    	startIndex = 0;
    else if (startIndex < 0) {
    	startIndex += len;
    	if (startIndex < 0)
    		startIndex = 0;
    }
    for (var i = startIndex; i < len; i++) {
    	var val = this[i] || this.charAt && this.charAt(i);
    	if (val == item)
    		return i;
    }
    return -1;
};

// Get URL parameters
function getURLParams()
{
	var vars = [],hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

// UTF-8 ENCODING
function encode_utf8( s )
{
  return unescape( encodeURIComponent( s ) );
}

function decode_utf8( s )
{
  return decodeURIComponent( escape( s ) );
}

/* LOGGER */
function log(msg)
{
	try {
		console.log(msg);
	} catch(err) {
	   	//alert(msg);
	}
}

/* VALIDATION */
function validateEmail(str)
{
	if(str === undefined){
		return false;
	}
	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (str.indexOf(at)==-1){
	   return false;
	}
	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
	   return false;
	}
	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
	    return false;
	}
	if (str.indexOf(at,(lat+1))!=-1){
	   return false;
	}
	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
	   return false;
	}
	if (str.indexOf(dot,(lat+2))==-1){
	   return false;
	}
	if (str.indexOf(" ")!=-1){
	  return false;
	}
	return true;
}

function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');     

   if (fld.value == "") {
        error = "You didn't enter a phone number.\n";
        fld.style.background = 'Yellow';
    } else if (isNaN(parseInt(stripped))) {
        error = "The phone number contains illegal characters.\n";
        fld.style.background = 'Yellow';
    } else if (!(stripped.length == 10)) {
        error = "The phone number is the wrong length. Make sure you included an area code.\n";
        fld.style.background = 'Yellow';
    } 
    return error;
}

function flush(obj) { // Free up the memory 
    for(var key in obj){
    	obj[key] = null;
    }
}

function krEncodeEntities(s){ return $j("<div/>").text(s).html(); }

function krDecodeEntities(s){ s = s.replace('amp;',''); return $j("<div/>").html(s).text(); }

function limitDecimals(num,dec){ var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec); return result; }

function capitalize(string){ return string.charAt(0).toUpperCase() + string.slice(1); }

function rnd(){ return String((new Date()).getTime()).replace(/\D/gi,'') }

String.prototype.escapeHTML = function () {                                        
    return(                                                                 
        this.replace(/&/g,'&amp;').                                         
            replace(/>/g,'&gt;').                                           
            replace(/</g,'&lt;').                                           
            replace(/"/g,'&quot;')                                         
    );                                                                      
};

function PopupCenter(pageURL,title,w,h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	return targetWin;
} 

/* LayerX fix */
try{
    // reset
    $.event.props = window.props;
    // remove layerX and layerY
    $.event.props = $.map($.event.props, function(prop) {
 	 	return /^layer/.test(prop) ? null : prop;
    });
} catch(e){};