
// handle the form submit event
function prepareEventHandlers() {
	document.getElementById("form1").onsubmit = function() {
		// prevent a form from submitting if no email.
		if(document.getElementById("fn").value == "" ||
		    document.getElementById("un").value == ""||
				document.getElementById("pwd").value == ""||
				document.getElementById("unem").value == ""
			 ){
		if (document.getElementById("fn").value == "") {
			document.getElementById("b").innerHTML = "Please provide your name ";
			return false;
		}

			if (document.getElementById("un").value == "") {
				document.getElementById("a").innerHTML = "Please provide user name ";
				return false;
		}
			if (document.getElementById("pwd").value == "") {
				document.getElementById("c").innerHTML = "Please provide password ";
				return false;
		}
			if (document.getElementById("em").value == "") {
				document.getElementById("e").innerHTML = "Please provide email ";
				return false;
		}
			
		} else {
			// reset and allow the form to submit
			return true;
		}
	};
}

// when the document loads
window.onload =  function() {
	prepareEventHandlers();
};
