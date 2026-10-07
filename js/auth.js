document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("login-form");

    if (!loginForm) return;

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const errorBox = document.getElementById("login-error");

        errorBox.textContent = "";

        if (!email || !password) {
            errorBox.textContent = "Please enter your email and password.";
            return;
        }

        try {

            const { data, error } =
                await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });

            if (error) {
                errorBox.textContent = error.message;
                console.error(error);
                return;
            }

            console.log("Login successful:", data);

            window.location.href = "dashboard.html";

        } catch (error) {

            console.error(error);

            errorBox.textContent =
                "Unable to connect to the authentication service.";

        }

    });

});