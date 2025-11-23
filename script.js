function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_7ucxofz", "template_a639kg9", params)
        .then((res) => {
            alert("Email sent successfully!");
            console.log(res);
        })
        .catch((err) => {
            alert("Something went wrong");
            console.log(err);
        });
}
