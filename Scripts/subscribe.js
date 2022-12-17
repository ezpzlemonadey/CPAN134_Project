function SubmitForm(){
	const form = document.getElementById('subs_form')
	
	Array.from(form.elements).every(element => {
		if (element.value == "") {
			alert("All fields must be filled out.");
			return false;
		}
		return true;
	});

}