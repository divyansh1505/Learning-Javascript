let msg = prompt("Enter your username : ");
if (msg === "admin") {
    alert("Welcome back");
    let msg2 = prompt("Please enter the password : ");
    if (msg2 == 12345) {
        alert("Welcome back!!");
    } else if (msg != 12345 && msg != " ") {
        alert("Incorrect password. Try again");
    } else if (msg === ""){
        alert("Invalid entry");
    }
}
else{
    alert("Unregonised user");
}

