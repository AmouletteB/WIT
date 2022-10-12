document.getElementById("signup").addEventListener("click", function (event) {
    event.preventDefault ();
    document.getElementById("thankyoumessage").style.display = "block";
    document.getElementById("signupform").style.display = "none";
});


document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault ();
    document.getElementById("welcome").style.display = "block";
    document.getElementById("submitform").style.display = "none";
});

