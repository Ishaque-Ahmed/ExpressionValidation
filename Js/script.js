let emailBtn = document.querySelector('#email');
let phoneBtn = document.querySelector('#phone');
let postCodeBtn = document.querySelector('#postCode');
let otherBtn = document.querySelector('#other');

emailBtn.addEventListener('click', emailValidation);
phoneBtn.addEventListener('click', phoneNumberValidation);
postCodeBtn.addEventListener('click', postCodeValidation);
otherBtn.addEventListener('click', OtherValidation);


function emailValidation(e) {
        let email = prompt("Enter the email address").toString();

        let emailExpression = /^([a-zA-Z0-9_-]\.?)+[^\.]@([a-zA-Z0-9-_]\.?)+[^\.0-9]$/;
        if (emailExpression.test(email)) {
                alert('This is a valid Email Address.');
        } else {
                alert('This is not a valid Email Address');
        }
}

function phoneNumberValidation(e) {
        let phone = prompt("Enter the phone number").toString();

        let phoneNumberExpression = /^((\+88)|(88))?01[0-9]{9}$/;

        if (phoneNumberExpression.test(phone)) {
                alert('This is a valid Phone Number');
        } else {
                alert('this is not a valid Phone Number');
        }


}

function postCodeValidation() {
        let postCode = prompt("Enter the post code").toString();


        let postCodeExpression = /^[0-9]{4}$/;

        if (postCodeExpression.test(postCode)) {
                alert('This is a valid Post Code')
        } else {
                alert("This is not a valid Post Code");
        }
}

function OtherValidation() {
        let other = prompt("Enter Any type to validate").toString();
        if (other !== '') {
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
                                alert('This is a Post Code.');
                                break;
                        case 2:
                                alert('This is a Phone Number');
                                break;
                        case 3:
                                alert('This is a Email Address.');
                                break;
                        default:
                                alert("Doesn't Match any expression");
                                break;
                }
        } else {
                alert('Enter Something to Validate.');
        }

}
