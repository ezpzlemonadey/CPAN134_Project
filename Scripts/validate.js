function validateForm() {
  const form = document.getElementById('subs_form')
	var emptyfield = false

    var x = document.getElementById("name").value;
    var y = document.getElementById("email").value;
    var a = document.getElementById("phonenumber").value;
    var b = document.getElementById("age").value;

    if (x == "") {
      alert("Name must be filled out");
      emptyfield = true;
      return false;
    }
    
    if (y == "") {
      alert("Email must be filled out");
      emptyfield = true;
      return false;
    }
    
    if (a == "") {
      alert("Phone must be filled out");
      emptyfield = true;
      return false;
    }
  
    if (b == "") {
      alert("Age must be filled out");
      emptyfield = true;
      return false;
    }

    if (emptyfield == false) { form.submit() }
	
    return false;
}