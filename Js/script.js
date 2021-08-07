let emailBtn = document.querySelector('#email');
let phoneBtn = document.querySelector('#phone');
let postCodeBtn = document.querySelector('#postCode');
let otherBtn = document.querySelector('#other');


emailBtn.addEventListener('click', emailValidation);
phoneBtn.addEventListener('click', phoneNumberValidation);
postCodeBtn.addEventListener('click', postCodeValidation);
otherBtn.addEventListener('click', OtherValidation);


function emailValidation(e) {

        let email = prompt("Enter the email address");

        if (email !== '' && email !== null) {
                let emailExpression = /^([a-zA-Z0-9_-]\.?)+[^\.]@([a-zA-Z0-9-_]\.?)+[^\.0-9]$/;
                if (emailExpression.test(email)) {
                        showAlert('This is a valid Email Address.', "success");
                } else {
                        showAlert('This is not a valid Email Address', "failed");
                }
        } else {
                showAlert('Enter Something to Validate.', "failed");
        }
}

function phoneNumberValidation(e) {

        let phone = prompt("Enter the phone number");

        if (phone !== '' && phone !== null) {
                let phoneNumberExpression = /^((\+88)|(88))?01[0-9]{9}$/;

                if (phoneNumberExpression.test(phone)) {
                        showAlert('This is a valid Phone Number.', "success");
                } else {
                        showAlert('This is not a valid Phone Number.', "failed");
                }
        } else {
                showAlert('Enter Something to Validate.', "failed");
        }
}

function postCodeValidation() {

        let postCode = prompt("Enter the post code");

        if (postCode !== '' && postCode !== null) {
                let postCodeExpression = /^[0-9]{4}$/;

                if (postCodeExpression.test(postCode)) {
                        showAlert("This is a valid Post Code.", "success");
                } else {
                        showAlert("This is not a valid Post Code.", "failed");
                }
        } else {
                showAlert('Enter Something to Validate.', "failed");
        }
}

function OtherValidation() {

        let other = prompt("Enter Any type to validate");

        if (other !== '' && other !== null) {

                let postCodeExpression = /^[0-9]{4}$/;
                let phoneNumberExpression = /^((\+88)|(88))?01[0-9]{9}$/;
                let emailExpression = /^([a-zA-Z0-9_-]\.?)+[^\.]@([a-zA-Z0-9-_]\.?)+[^\.0-9]$/;

                let current;

                if (postCodeExpression.test(other)) { current = 1; }
                else if (phoneNumberExpression.test(other)) { current = 2; }
                else if (emailExpression.test(other)) { current = 3; }
                else current = 0;

                switch (current) {
                        case 1:
                                showAlert("This is a Post Code.", "success");
                                break;
                        case 2:
                                showAlert('This is a Phone Number.', "success");
                                break;
                        case 3:
                                showAlert('This is a Email Address.', "success");
                                break;
                        default:
                                showAlert("Doesn't Match Any Expression", "failed");
                                break;
                }
        }
        else {
                showAlert('Enter Something to Validate.', "failed");
        }
}

function showAlert(message, className) {

        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.containerFinal');
        let button = document.querySelector('#email');
        container.insertBefore(div, button);

        setTimeout(() => {
                document.querySelector('.alert').remove();
        }, 2000);
}