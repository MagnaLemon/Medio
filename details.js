function fnSubmit()
{
if(document.form1.phno.value === "")
{
alert("Enter a valid phone number")
return false;
}
else if(document.form1.address.value === "")
{
alert("Enter a valid address")
return false;
}
else
{
return true;
}
}
