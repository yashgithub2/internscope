const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');



if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

document.getElementById('next-btn').addEventListener('click', function () {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalTestimonials;
    testimonials[currentIndex].classList.add('active');
});

document.getElementById('prev-btn').addEventListener('click', function () {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    testimonials[currentIndex].classList.add('active');
});


document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const internshipCards = document.querySelectorAll('.internship-card');

    internshipCards.forEach(card => {
        const internshipTitle = card.querySelector('h3').textContent.toLowerCase();
        const company = card.querySelector('p').textContent.toLowerCase();

        if (internshipTitle.includes(searchInput) || company.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});

// Form validation for login and register pages
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Registration successful!");
    }
});