function ErrMsg_Name(textbox) { 
  
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Enter the Name!'); 
	}else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Enter the lastname!'); 
	}else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
function ErrMsg_Dob(textbox) { 
  
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Enter the Date Of Birth!'); 
	} else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Enter the Date Of Birth!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
function ErrMsg_Country(textbox) { 
  
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Select the Country!'); 
	} else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Select the Country!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
function ErrMsg_Address(textbox) { 
  
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Enter the Address!'); 
	} else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Enter the Address!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
function ErrMsg_Mail(textbox) { 
  
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Enter the E-mail!'); 
	} else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Enter the valid E-mail id!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
function ErrMsg_Password(textbox) { 
  
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Enter the Password!'); 
	} else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Enter the Password!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
function ErrMsg_Re_Password(textbox) { 
  
	var pass=document.getElementById("password").value;
	if (textbox.value === '') { 
		textbox.setCustomValidity 
			  ('Please Enter Re-Type Password!'); 
	} else if (textbox.validity.typeMismatch) { 
		textbox.setCustomValidity 
			  ('Please Enter Re-Type Password!'); 
	}else if(textbox.value != pass){
		textbox.setCustomValidity 
			  ('Password & Re-Type Password Should be Matched!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 

	return true; 
}
