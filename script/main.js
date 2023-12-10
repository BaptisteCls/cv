function sendMail() {
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:baptiste.collesson.etu@univ-lille.fr?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
};
