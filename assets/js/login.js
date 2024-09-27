const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginFormData = document.getElementById('login-form-data');
const registerFormData = document.getElementById('register-form-data');

// Toggle between login and register forms
loginBtn.addEventListener('click', () => {
  loginForm.classList.toggle('active');
  registerForm.classList.remove('active');
  loginBtn.classList.toggle('active');
  registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
  loginForm.classList.remove('active');
  registerForm.classList.toggle('active');
  loginBtn.classList.remove('active');
  registerBtn.classList.toggle('active');
});

// Handle form submissions
registerFormData.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = registerFormData.elements.name.value;
  const email = registerFormData.elements.email.value;
  const password = registerFormData.elements.password.value;
  localStorage.setItem(email, JSON.stringify({ name, email, password }));
  // Display a success message or redirect to login page
});

loginFormData.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = loginFormData.elements.email.value;
  const password = loginFormData.elements.password.value;
  const storedUserData = localStorage.getItem(email);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.password === password) {
      console.log("kkkk");
    } else {
      console.log("kkooo");
      
    }
  } else {
    console.log("ooo");
    
  }
});