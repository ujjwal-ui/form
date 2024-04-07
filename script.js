 
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const firstName = form.elements[0].value;
        const lastName = form.elements[1].value;
        const email = form.elements[2].value;
        const password = form.elements[3].value;
        const phoneNumber = form.elements[4].value;

        const obj = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        }

        const jsonData = JSON.stringify(obj);
        localStorage.setItem("formData", jsonData);
        location.href = "display.html";
    });
