//Vars

var login = {user:'tcaron',password:'11Brownbill!'};

//Button Scripts

var loop = function () {

}


var user = function () {
	document.getElementById('demo').innerHTML= login.user
}

var password = function () {
	document.getElementById('demo').innerHTML= login.password
}


var bigFont = function () {
	document.getElementById('demo').style.fontSize='35px'
}

var smallFont = function () {
	document.getElementById('demo').style.fontSize='15px'
}

var hide = function () {
	document.getElementById('demo').style.display='none'
}

var show = function () {
	document.getElementById('demo').style.display='block'
}

var reset = function () {
	document.getElementById('demo').innerHTML= "TC's World"
}