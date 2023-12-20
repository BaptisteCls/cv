function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.querySelector(".formBox textarea").value;
    window.location.href = 'mailto:baptiste.collesson.etu@univ-lille.fr?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
};

function scrollID(element){
    document.getElementById(element).scrollIntoView({behavior: 'smooth'});
}

function copyAdress(){
    navigator.clipboard.writeText("17 rue du Parc Tournebride, 59160 Capinghem, Appartement 22");
    alert("Copié dans le presse papié : 17 rue du Parc Tournebride, 59160 Capinghem, Appartement 22")
}

function copyNumber(){
    navigator.clipboard.writeText("0625320216");
    alert("Copié dans le presse papié : 0625320216")
}

