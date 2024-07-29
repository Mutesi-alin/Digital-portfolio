particlesJS.load('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
 });
 
 
 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
 });
 
 
 // Animate skill bars
 function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = `${percent}%`;
        }, 100);
    });
 }
 
 
 // Intersection Observer for skill bars animation
 const skillsSection = document.querySelector('#skills');
 const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
 }, { threshold: 0.5 });
 
 
 skillsObserver.observe(skillsSection);
 
 
 // 3D background animation using Three.js
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ alpha: true });
 
 
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.getElementById('canvas-container').appendChild(renderer.domElement);
 
 
 const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
 const material = new THREE.MeshBasicMaterial({ color: 0x6200ea, wireframe: true });
 const torus = new THREE.Mesh(geometry, material);
 
 
 scene.add(torus);
 camera.position.z = 30;
 
 
 function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    renderer.render(scene, camera);
 }
 
 
 animate();
 
 
 // Resize handler for 3D background
 window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
 });
 
 
 // GSAP animations for project cards
 gsap.from('.project-card', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#projects',
        start: 'top center'
    }
 });
 
 
 // Form submission handling
 const contactForm = document.getElementById('contact-form');
 contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
 });
 
 
 // Typewriter effect for the subtitle
 const subtitle = document.querySelector('.subtitle');
 const text = subtitle.textContent;
 subtitle.textContent = '';
 let i = 0;
 
 
 function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
 }
 
 
 typeWriter();
 
 
 // Hover effect for tech stack items
 const techItems = document.querySelectorAll('.tech-item');
 techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.2, duration: 0.3, ease: 'power2.out' });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
 });
 