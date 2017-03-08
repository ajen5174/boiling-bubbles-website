function submitButtonOnPress(){
	
	
	var nameTextField = document.getElementById('name').value;
	var emailTextField = document.getElementById('email').value;
	var commentTextArea = document.getElementById('comment').value;
	
	if(nameTextField.length > 0 && emailTextField.length > 0 && commentTextArea.length > 0){
		window.alert("Thanks for your comment! We will get back to you as soon as we can!");
	}
}