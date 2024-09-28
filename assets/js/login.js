const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = existingUsers.find(user => user.email === email);

    if (existingUser) {
        alert('User already exists. Please try a different email.');
    } else {
        // Add user to local storage
        existingUsers.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Redirect to signup page (you can customize this)
        container.classList.remove("right-panel-active");
    // Replace with your desired page
    }
});

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Check if user exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = existingUsers.find(user => user.email === email && user.password === password);

    if (existingUser) {
        // Successful login, redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});