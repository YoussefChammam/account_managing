let admin  = {
    name : "Admin",
    password : "Admin"
}
function onSubmit() {
    const username = document.forms["contactForm"]["Username"].value
    const password = document.forms["contactForm"]["UserPassword"].value

    if (username === "" || username == null || password === "" || password == null) {
        alert("please make sure you filled everything.")
        return false
    } else if((username === admin.name) && (password === admin.password)){
        return true
    } else{
        alert("Login credentials incorrect !")
        return false
    }

}