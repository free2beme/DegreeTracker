function validateForm()
{
var x=document.forms["ContactInfo"]["first Name"].value;
if (x==null || x=="")
  {
  alert("Name field is required");
  ContactInfo.name.focus();
  return false;
  }
var x=document.forms["ContactInfo"]["last Name"].value;
if (x==null || x=="")
  {
  alert("Name field is required");
  ContactInfo.name.focus();
  return false;
  }
var x=document.forms["ContactInfo"]["MI"].value;
if (x==null || x=="")
  {
  alert("Name field is required");
  ContactInfo.name.focus();
  return false;
  }
var x=document.forms["ContactInfo"]["email"].value;
 var atpos=x.indexOf("@");
 var dotpos=x.lastIndexOf(".");
 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
   {
   alert("Not a valid e-mail address");
   ContactInfo.email.focus();
   return false;
}
if (ContactInfo.phone.value=="")
{
	alert("Phone field is required");
	ContactInfo.phone.focus();
	return false;
}
if(isNaN(ContactInfo.phone.value))
{
	alert("Invalid phone number");
	ContactInfo.phone.focus();
	return false;
}
if((ContactInfo.phone.value).length < 10)
{
	alert("Phone number should be minimum 10 digits");
	ContactInfo.phone.focus();
	return false;
}
var x=document.forms["ContactInfo"]["text"].value;
if (x==null || x=="")
  {
  alert("Please enter somthing in the text field");
  ContactInfo.text.focus();
  return false;
  }
}

