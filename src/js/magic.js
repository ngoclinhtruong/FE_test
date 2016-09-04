$(document).ready(function() {

	// validate signup form 

	$("#signupForm_step1").validate({
		rules: {
			service_number: {
				required: true,
				digits: true
			},
			id_number: "required"
		},
		
		messages: {
			service_number: {
				required: "Please enter your Service number",
				digits: "Please enter only digits"
			},
			id_number: "Please enter your ID number"
		}
	});
	
	$("#signupForm_step2").validate({
		rules: {
			password: {
					required: true,
					minlength: 6
				},
				confirm_password: {
					required: true,
					minlength: 6,
					equalTo: "#password"
				},
				email: {
					required: true,
					email: true
				},
				secure_keyword: "required",
				agree: "required"
		},
		messages: {
			email: "Please enter a valid email address",
			password: {
				required: "Please enter your Password",
				minlength: "Your password must be at least 6 characters"
			},
			confirm_password: {
				required: "Please enter your Password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			secure_keyword: "Please enter your secure keyword",
			agree: "Please accept our policy"
		}
	});

});