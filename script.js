document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', function() {
        alert('Button clicked!');
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        console.log('Window scrolled');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-primary');
        } else {
            navbar.classList.remove('bg-primary');
        }
    });

    // Toggle navigation menu visibility
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarResponsive = document.getElementById('navbarResponsive');
    navbarToggler.addEventListener('click', function() {
        console.log('Navbar toggler clicked');
        navbarResponsive.classList.toggle('show');
    });

    // Smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            console.log(`Smooth scrolling to ${targetId}`);
            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            console.log('Name is invalid');
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        if (email.value.trim() === '' || !validateEmail(email.value)) {
            console.log('Email is invalid');
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (message.value.trim() === '') {
            console.log('Message is invalid');
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.remove('is-invalid');
        }

        if (isValid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Filter projects
    window.filterProjects = function(category) {
        console.log(`Filtering projects by category: ${category}`);
        const projects = document.querySelectorAll('.project-item');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    };

    // Lightbox effect
    const projectImages = document.querySelectorAll('.project-image');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');

    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            console.log(`Opening lightbox for image: ${this.src}`);
            lightboxImage.src = this.src;
            $(lightboxModal).modal('show');
        });
    });
});