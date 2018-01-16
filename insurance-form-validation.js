function formValidation()  
{  
var fname = document.registration.firstname;  
var lname = document.registration.lastname;  
var ucity = document.registration.city;  
var uadd = document.registration.address;  
var ustate = document.registration.state;  
var uyear = document.registration.year;
var uzip = document.registration.zip;  
var uphone = document.registration.phone;  
var uemail = document.registration.email;
var ubirth = document.registration.birthdate;
var uposition = document.registration.position;  
var udivision = document.registration.division;  
var uhighschool = document.registration.highschool;  
var ugrade = document.registration.grade;  

	if(allLetter(fname)
		&&allLetter(lname)
		&&allLetter(ucity)
		&&alphanumeric(uadd)
		&&stateselect(ustate)
		&&checkzip(uzip)
		&&ValidatePhone(uphone)
		&&ValidateEmail(uemail)
		&&positionSelect(uposition)
		&&divisionSelect(udivision)
		&&alphanumeric(uhighschool)
		&&gradeSelect(ugrade))
	{    
	} 
return false;  
  
} 
 
function allLetter(uname)  
{   
	var letters = /[A-Za-z\.\-\s]+$/;  
	if(uname.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert('Field must have alphabet characters only');  
		uname.focus();  
		return false;  
	}  
}  

function alphanumeric(uadd)  
{   
	var letters = /[A-Za-z0-9'\.\-\s\,]+$/; 
	if(uadd.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert('User address must have alphanumeric characters only');  
		uadd.focus();  
		return false;  
	}  
} 

function stateselect(ustate)  
{  
	if(ustate.value == "Default")  
	{  
		alert('Select your state from the list');  
		ustate.focus();  
		return false;  
	}  
	else  
	{  
		return true;  
	}  
}  

function allnumeric(uzip)  
{   
	var numbers = /\b[0-9]\b/;  
	if(uzip.value.match(numbers))  
	{  
		return true;  
	}  
	else  
	{  
		alert('ZIP code must have numeric characters only');  
		uzip.focus();  
		return false;  
	}  
}  

function checkzip(uzip)  
{   
	var numbers = /\b[0-9]{5}\b/;  
	if(uzip.value.match(numbers))  
	{  
		return true;  
	}  
	else  
	{  
		alert('ZIP code must have numeric characters only');  
		uzip.focus();  
		return false;  
	}  
} 

function checkbday(ubirth)
{
	var date = /([0-9\/]{10})/;
	if(ubirth.value.match(date))
	{
		return true;
	}
	else
	{
		alert('Have Birth Date in format MM/DD/YYYY');
		ubirth.focus();
		return false;
	}
}

function ValidateEmail(uemail)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{  
		return true;  
	}  
	else  
	{  
		alert("You have entered an invalid email address!");  
		uemail.focus();  
		return false;  
	}  
} 

function ValidateYear(uyear)
{
	var numbers = /\b[0-9]{10}\b/;
	if(uyear.value.match(numbers))
	{
		return true;
	}
	else
	{
		alert('Please insert year in form YYYY');
		uyear.focus();
		return false;
	}
}

function ValidatePhone(uphone)
{
	var numbers = /\b[0-9]{10}\b/;  
	if(uphone.value.match(numbers))  
	{  
		return true;  
	}  
	else  
	{  
		alert('Phone Number must have numeric characters only, no dashes');  
		uphone.focus();  
		return false;  
	}  
}

function positionSelect(uposition){
	if(uposition.value == "Default")  
	{  
		alert('Select your position from the list');  
		uposition.focus();  
		return false;  
	}  
	else  
	{  
		return true;  
	}  
}

function divisionSelect(udivision){
	if(udivision.value == "Default")  
	{  
		alert('Select your division from the list');  
		udivision.focus();  
		return false;  
	}  
	else  
	{  
		return true;  
	} 
}

function gradeSelect(ugrade){
	if(ugrade.value == "Default")  
	{  
		alert('Select your grade from the list');  
		ugrade.focus();  
		return false;  
	}  
	else  
	{  
		return true;  
	} 
}