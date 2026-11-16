
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;

    const registration = {
        name: name,
        email: email,
        phone: phone,
        plan: plan
    };

    let members = JSON.parse(
        localStorage.getItem("gymMembers")
    ) || [];

    members.push(registration);

    localStorage.setItem(
        "gymMembers",
        JSON.stringify(members)
    );

    document.getElementById("message").textContent =
        "Registration successful! Welcome to FitZone.";

    form.reset();
});

function showMeal(planName) {

    const message = document.getElementById("mealMessage");

    message.textContent =
        "You selected the " + planName +
        " meal plan! Enjoy your healthy journey.";

}

// CONTACT FORM FUNCTIONALITY

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value;

        document.getElementById("contactResponse").textContent =
            "Thank you, " + name + "! Your message has been received in this demo.";

        contactForm.reset();

    });

}

