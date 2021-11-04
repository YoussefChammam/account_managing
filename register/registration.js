const username = document.forms["contactForm"]["Username"].value
const Email = document.forms["contactForm"]["E-mail"].value
const password = document.forms["contactForm"]["password"].value

const addUser = () => {
    if (username === "" || username == null || password === "" || password == null || Email === "" || Email == null){
        alert("please fill out all the required information.")
        return false
    }else {
        let user_records = new Array(10)
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[]
        user_records.push({
            "name": username,
            "email": Email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(user_records))
        return true
    }
}

