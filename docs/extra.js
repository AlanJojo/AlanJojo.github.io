function gmail() {
    if( /Android/i.test(navigator.userAgent ) ) {
        // If the user is using an Android device.
        window.location = "mailto:godlovesalanjojo@gmail.com";
    }
    else{
        window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=godlovesalanjojo@gmail.com","_blank");
    }
}