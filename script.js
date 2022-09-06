const form = document. getElementById('form');
const username = document. getElementById('username');
const email = document. getElementById('email');
const passoword = document. getElementById('password');
const passowordTwo = document. getElementById('passowordTwo');
     
form.addEventListener('submit', (e)  => {
    e.preventDefault();
    checkInputs();
});
 
function checkInputs() {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const passwordTwoValue = passwordTwo.value.trim();
	 
	if(usernameValue === '') {
		   errorValidation(username);
        } else {
			successValidation(username);
		}
	 
	if(emailValue === '') {
		  errorValidation(email);
        } else {
	      successValidation(email);
    }
	 
	if(passwordValue === '') {
		 errorValidation(password);
	    } else if(passwordValue.length < 8) {
		 errorValidation(password, 'senha menor que 8 caracteres');
	    } else {
		 successValidation(password);
    }
	 
	if(passwordTwoValue === '') {
		 errorValidation(passwordTwo);
        } else if (passwordValue !== passwordTwoValue) {
		 errorValidation(passwordTwo, 'senhas diferentes');
	    } else {
          successValidation(passwordTwo);
	}
}

function errorValidation(input) {
	const formCONtrol = input.parentElement;
	formCONtrol.className = 'formControl error';
}

function successValidation(input) {
	const formCONtrol = input.parentElement;
	
	formCONtrol.className = 'formControl success';
}