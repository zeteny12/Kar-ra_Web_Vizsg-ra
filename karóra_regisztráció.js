//HA_A_JELSZAVAK_NEM_EGYEZNEK
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var submitButton = document.getElementById("regisztracios_gomb");

    submitButton.addEventListener("click", function(event) {
        var password1 = document.getElementById("jelszo_regisztracio").value;
        var password2 = document.getElementById("jelszo_regisztracio_ismet").value;

        if (password1 !== password2) {
            alert("A jelszavak nem egyeznek meg!");
            event.preventDefault();
        }
    });
});