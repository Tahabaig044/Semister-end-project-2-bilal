// CONTACT FORM VALIDATION
document.querySelector("#submit-cont-form").addEventListener("submit", function(e){
    e.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("message", message);
    alert(`Welcome ! ${fullname} Thanks for your Contact Him`);

    window.location.href= 'home-page.html';
});
// CONTACT FORM VALIDATION