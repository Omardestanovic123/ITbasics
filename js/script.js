document.addEventListener('DOMContentLoaded', function () {
    initMenuToggle();
    initSmoothScroll();
    initContactForm();
    initBackToTop();
});

function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const formContainer = form.parentElement;
    let successBox = document.createElement('div');
    successBox.classList.add('form-success');
    successBox.style.display = 'none';
    formContainer.insertBefore(successBox, form.nextSibling);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let valid = true;
        valid = validateField(name, 'Naam is verplicht.') && valid;
        valid = validateEmail(email) && valid;
        valid = validateField(message, 'Bericht is verplicht.') && valid;

        if (valid) {
            successBox.textContent = 'Bedankt voor je bericht! Ik neem snel contact met je op.';
            successBox.style.display = 'block';
            form.reset();
        } else {
            successBox.style.display = 'none';
        }
    });
}

function validateField(input, errorMessage) {
    const errorBox = getErrorBox(input);
    if (!input.value.trim()) {
        errorBox.textContent = errorMessage;
        return false;
    }
    errorBox.textContent = '';
    return true;
}

function validateEmail(input) {
    const errorBox = getErrorBox(input);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.value.trim() || !regex.test(input.value.trim())) {
        errorBox.textContent = 'Voer een geldig e-mailadres in.';
        return false;
    }
    errorBox.textContent = '';
    return true;
}

function getErrorBox(input) {
    let errorBox = input.parentElement.querySelector('.form-error');
    if (!errorBox) {
        errorBox = document.createElement('p');
        errorBox.classList.add('form-error');
        input.parentElement.appendChild(errorBox);
    }
    return errorBox;
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}