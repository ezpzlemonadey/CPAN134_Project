function SubmitForm(){
	const form = document.getElementById('subs_form')
	var emptyfield = false

	Array.from(form.elements).every(element => {
		if (element.value == "") {
			alert("All fields must be filled out.");
			emptyfield = true;
			return false;
		}

		return true;
	});

	if (emptyfield == false) { form.submit() }
	
	return false;
}