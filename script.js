// ═══════════════════════════════════════════
// TRADUCCIONES / TRANSLATIONS
// ═══════════════════════════════════════════
const translations = {
    es: {
        nav: {
            catalog: "Catálogo",
            teachers: "Profesores",
            about: "Nosotros",
            faq: "FAQ",
            reviews: "Opiniones",
            contact: "Contacto"
        },
        hero: {
            badge: "🖨️ Impresión 3D personalizada",
            title1: "Creamos tus ideas",
            title2: "capa a capa",
            subtitle: "Piezas educativas, figuras, prototipos y mucho más. Diseño personalizado para profesores, creativos y particulares.",
            cta1: "Ver catálogo",
            cta2: "Pide presupuesto",
            stat1: "Piezas impresas",
            stat2: "Clientes felices",
            stat3: "Personalizable",
            scroll: "Descubre más"
        },
        catalog: {
            tag: "Nuestro trabajo",
            title: "Catálogo de piezas",
            subtitle: "Cada pieza es impresa con cuidado y atención al detalle. ¿No encuentras lo que buscas? ¡Te lo diseñamos!",
            all: "Todos",
            educational: "Educativo",
            decoration: "Decoración",
            functional: "Funcional",
            custom: "Personalizado",
            placeholder: "Foto del producto",
            popular: "Popular",
            customBadge: "A medida",
            ask: "Consultar",
            tellUs: "¡Cuéntanos!",
            p1: {
                name: "Letras del abecedario 3D",
                desc: "Set completo de letras táctiles para aprendizaje en infantil. Varios colores disponibles."
            },
            p2: {
                name: "Números y formas geométricas",
                desc: "Piezas encajables para aprender números y formas básicas. Ideal para actividades manipulativas."
            },
            p3: {
                name: "Animales del mundo",
                desc: "Colección de animales para enseñar fauna y ecosistemas. Cada pieza con base y nombre."
            },
            p4: {
                name: "Macetero geométrico",
                desc: "Macetero con diseño poligonal moderno. Disponible en varios tamaños y colores."
            },
            p5: {
                name: "Organizador de escritorio",
                desc: "Organizador modular personalizable con compartimentos para bolígrafos, clips y más."
            },
            p6: {
                name: "Tu idea hecha realidad",
                desc: "¿Tienes una idea en mente? Cuéntanos y la diseñamos e imprimimos para ti."
            }
        },
        teachers: {
            tag: "Para educación",
            title: "Material 3D para tu aula",
            desc: "Creamos materiales didácticos en 3D pensados para profesores de educación infantil y primaria. Piezas táctiles, resistentes y coloridas que hacen el aprendizaje más divertido.",
            f1: {
                title: "Colores seguros",
                desc: "Filamentos no tóxicos y colores vibrantes aptos para niños."
            },
            f2: {
                title: "Diseño pedagógico",
                desc: "Piezas diseñadas para objetivos educativos concretos."
            },
            f3: {
                title: "Resistentes",
                desc: "Impresas para aguantar el uso diario en el aula."
            },
            f4: {
                title: "A tu medida",
                desc: "Nos cuentas qué necesitas y lo adaptamos a tu programación."
            },
            cta: "Solicita material para tu aula",
            card1: "Letras táctiles",
            card2: "Números",
            card3: "Mapas",
            card4: "Ciencia",
            card5: "Música"
        },
        about: {
            tag: "Quiénes somos",
            title: "Sobre Capa Capa AyA",
            story1: "Somos un pequeño taller de impresión 3D con una gran pasión: transformar ideas en objetos reales, capa a capa.",
            story2: "Nuestro foco principal está en crear material didáctico para profesores de educación infantil, pero nos encanta cualquier reto creativo que nos propongas.",
            story3: "Cada pieza que sale de nuestras impresoras está hecha con mimo, pensada para durar y diseñada para cumplir una función.",
            processTitle: "Cómo trabajamos",
            s1: {
                title: "Cuéntanos tu idea",
                desc: "Escríbenos por WhatsApp o rellena el formulario con lo que necesitas."
            },
            s2: {
                title: "Diseñamos o adaptamos",
                desc: "Creamos el diseño 3D o adaptamos uno existente a tus necesidades."
            },
            s3: {
                title: "Imprimimos con cuidado",
                desc: "Elegimos el material y color adecuados e imprimimos tu pieza."
            },
            s4: {
                title: "Te la enviamos",
                desc: "Revisamos la calidad y te la hacemos llegar rápidamente."
            }
        },
        faq: {
            tag: "Dudas frecuentes",
            title: "Preguntas frecuentes",
            q1: "¿Qué materiales utilizáis?",
            a1: "Trabajamos principalmente con PLA, un plástico biodegradable y seguro. También disponemos de PETG para piezas que necesiten más resistencia, y TPU para piezas flexibles. Todos nuestros materiales son aptos para uso infantil.",
            q2: "¿Cuánto tarda un pedido?",
            a2: "Depende de la complejidad y cantidad. Piezas sencillas pueden estar listas en 2-3 días. Proyectos más complejos o con diseño personalizado pueden tardar entre 1 y 2 semanas. Siempre te daremos un plazo estimado antes de empezar.",
            q3: "¿Hacéis envíos?",
            a3: "Sí, hacemos envíos a toda España. Los costes de envío dependen del peso y tamaño del pedido. También ofrecemos recogida en mano si estás cerca.",
            q4: "¿Puedo enviar mi propio diseño?",
            a4: "¡Por supuesto! Aceptamos archivos STL, OBJ y 3MF. Si tienes un boceto o una idea sin diseño digital, también podemos modelarlo por ti con un pequeño coste adicional.",
            q5: "¿Las piezas son seguras para niños?",
            a5: "Sí. Utilizamos PLA, un material biodegradable y no tóxico, y nuestros diseños para educación infantil evitan piezas pequeñas o bordes afilados. Siempre recomendamos supervisión adulta con niños menores de 3 años.",
            q6: "¿Cuánto cuesta una impresión?",
            a6: "El precio depende del tamaño, material y complejidad de la pieza. Contacta con nosotros con tu idea y te enviamos un presupuesto sin compromiso en menos de 24 horas."
        },
        reviews: {
            tag: "Lo que dicen de nosotros",
            title: "Opiniones de nuestros clientes",
            r1: {
                text: "\"Pedí un set de letras para mi clase de 4 años y llegaron perfectas. Los niños las adoran y el acabado es genial.\"",
                name: "María G.",
                role: "Profesora de infantil"
            },
            r2: {
                text: "\"Les pedí un soporte personalizado para mi tablet y quedó exacto a lo que necesitaba. Muy buena comunicación.\"",
                name: "Carlos R.",
                role: "Particular"
            },
            r3: {
                text: "\"Encargamos un mapa en relieve para geografía y superó todas las expectativas. Mis alumnos lo usan todos los días.\"",
                name: "Pablo M.",
                role: "Profesor de primaria"
            },
            r4: {
                text: "\"Muy contenta con el organizador de escritorio. Lo único que tardó un poco más de lo esperado, pero el resultado merece la pena.\"",
                name: "Laura S.",
                role: "Particular"
            }
        },
        contact: {
            tag: "Hablemos",
            title: "¿Tienes un proyecto en mente?",
            subtitle: "Cuéntanos qué necesitas y te respondemos en menos de 24 horas.",
            name: "Nombre *",
            email: "Email *",
            subject: "Asunto",
            message: "Mensaje *",
            opt1: "Pedir presupuesto",
            opt2: "Material educativo",
            opt3: "Diseño personalizado",
            opt4: "Otro",
            send: "Enviar mensaje",
            success: "¡Mensaje enviado! Te responderemos pronto.",
            waTitle: "WhatsApp directo",
            waDesc: "¿Prefieres hablarlo directamente? Escríbenos por WhatsApp.",
            waBtn: "Abrir WhatsApp",
            socialTitle: "Síguenos"
        },
        footer: {
            tagline: "Tus ideas, capa a capa.",
            rights: "Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            catalog: "Catalog",
            teachers: "Teachers",
            about: "About",
            faq: "FAQ",
            reviews: "Reviews",
            contact: "Contact"
        },
        hero: {
            badge: "🖨️ Custom 3D Printing",
            title1: "We create your ideas",
            title2: "layer by layer",
            subtitle: "Educational pieces, figures, prototypes and much more. Custom design for teachers, creatives and individuals.",
            cta1: "View catalog",
            cta2: "Get a quote",
            stat1: "Pieces printed",
            stat2: "Happy clients",
            stat3: "Customizable",
            scroll: "Discover more"
        },
        catalog: {
            tag: "Our work",
            title: "Product catalog",
            subtitle: "Every piece is printed with care and attention to detail. Can't find what you're looking for? We'll design it!",
            all: "All",
            educational: "Educational",
            decoration: "Decoration",
            functional: "Functional",
            custom: "Custom",
            placeholder: "Product photo",
            popular: "Popular",
            customBadge: "Custom made",
            ask: "Inquire",
            tellUs: "Tell us!",
            p1: {
                name: "3D Alphabet Letters",
                desc: "Complete set of tactile letters for early childhood learning. Various colors available."
            },
            p2: {
                name: "Numbers and Geometric Shapes",
                desc: "Interlocking pieces to learn numbers and basic shapes. Ideal for hands-on activities."
            },
            p3: {
                name: "Animals of the World",
                desc: "Collection of animals to teach fauna and ecosystems. Each piece with base and name."
            },
            p4: {
                name: "Geometric Planter",
                desc: "Planter with modern polygonal design. Available in various sizes and colors."
            },
            p5: {
                name: "Desk Organizer",
                desc: "Customizable modular organizer with compartments for pens, clips and more."
            },
            p6: {
                name: "Your Idea Made Real",
                desc: "Have an idea in mind? Tell us and we'll design and print it for you."
            }
        },
        teachers: {
            tag: "For education",
            title: "3D Materials for Your Classroom",
            desc: "We create 3D educational materials designed for early childhood and primary education teachers. Tactile, durable and colorful pieces that make learning more fun.",
            f1: {
                title: "Safe Colors",
                desc: "Non-toxic filaments and vibrant colors suitable for children."
            },
            f2: {
                title: "Pedagogical Design",
                desc: "Pieces designed for specific educational objectives."
            },
            f3: {
                title: "Durable",
                desc: "Printed to withstand daily classroom use."
            },
            f4: {
                title: "Custom Made",
                desc: "Tell us what you need and we'll adapt it to your curriculum."
            },
            cta: "Request materials for your classroom",
            card1: "Tactile Letters",
            card2: "Numbers",
            card3: "Maps",
            card4: "Science",
            card5: "Music"
        },
        about: {
            tag: "Who we are",
            title: "About Capa Capa AyA",
            story1: "We are a small 3D printing workshop with a great passion: transforming ideas into real objects, layer by layer.",
            story2: "Our main focus is creating educational materials for early childhood teachers, but we love any creative challenge you propose.",
            story3: "Every piece that comes out of our printers is made with care, designed to last and built to serve a function.",
            processTitle: "How we work",
            s1: {
                title: "Tell us your idea",
                desc: "Write to us on WhatsApp or fill out the form with what you need."
            },
            s2: {
                title: "We design or adapt",
                desc: "We create the 3D design or adapt an existing one to your needs."
            },
            s3: {
                title: "We print carefully",
                desc: "We choose the right material and color and print your piece."
            },
            s4: {
                title: "We send it to you",
                desc: "We check the quality and deliver it to you quickly."
            }
        },
        faq: {
            tag: "Common questions",
            title: "Frequently Asked Questions",
            q1: "What materials do you use?",
            a1: "We mainly work with PLA, a biodegradable and safe plastic. We also have PETG for pieces that need more resistance, and TPU for flexible pieces. All our materials are suitable for children's use.",
            q2: "How long does an order take?",
            a2: "It depends on the complexity and quantity. Simple pieces can be ready in 2-3 days. More complex projects or with custom design can take between 1 and 2 weeks. We will always give you an estimated timeframe before starting.",
            q3: "Do you ship?",
            a3: "Yes, we ship throughout Spain. Shipping costs depend on the weight and size of the order. We also offer in-person pickup if you're nearby.",
            q4: "Can I send my own design?",
            a4: "Of course! We accept STL, OBJ and 3MF files. If you have a sketch or an idea without a digital design, we can also model it for you with a small additional cost.",
            q5: "Are the pieces safe for children?",
            a5: "Yes. We use PLA, a biodegradable and non-toxic material, and our designs for early childhood education avoid small pieces or sharp edges. We always recommend adult supervision with children under 3 years old.",
            q6: "How much does a print cost?",
            a6: "The price depends on the size, material and complexity of the piece. Contact us with your idea and we'll send you a no-obligation quote in less than 24 hours."
        },
        reviews: {
            tag: "What they say about us",
            title: "Customer Reviews",
            r1: {
                text: "\"I ordered a set of letters for my 4-year-old class and they arrived perfect. The kids love them and the finish is great.\"",
                name: "María G.",
                role: "Preschool teacher"
            },
            r2: {
                text: "\"I asked them for a custom tablet stand and it was exactly what I needed. Very good communication.\"",
                name: "Carlos R.",
                role: "Individual"
            },
            r3: {
                text: "\"We ordered a relief map for geography and it exceeded all expectations. My students use it every day.\"",
                name: "Pablo M.",
                role: "Primary school teacher"
            },
            r4: {
                text: "\"Very happy with the desk organizer. The only thing is it took a little longer than expected, but the result is worth it.\"",
                name: "Laura S.",
                role: "Individual"
            }
        },
        contact: {
            tag: "Let's talk",
            title: "Have a project in mind?",
            subtitle: "Tell us what you need and we'll respond in less than 24 hours.",
            name: "Name *",
            email: "Email *",
            subject: "Subject",
            message: "Message *",
            opt1: "Request quote",
            opt2: "Educational materials",
            opt3: "Custom design",
            opt4: "Other",
            send: "Send message",
            success: "Message sent! We'll respond soon.",
            waTitle: "Direct WhatsApp",
            waDesc: "Prefer to talk directly? Write to us on WhatsApp.",
            waBtn: "Open WhatsApp",
            socialTitle: "Follow us"
        },
        footer: {
            tagline: "Your ideas, layer by layer.",
            rights: "All rights reserved."
        }
    }
};

// ═══════════════════════════════════════════
// ESTADO GLOBAL
// ═══════════════════════════════════════════
let currentLang = 'es';

// ═══════════════════════════════════════════
// INICIALIZACIÓN
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLanguageToggle();
    initDarkMode();
    initCatalogFilters();
    initFAQ();
    initContactForm();
    initSmoothScroll();
    updateTranslations();
});

// ═══════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ═══════════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════════
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langFlag = document.getElementById('langFlag');
    const langLabel = document.getElementById('langLabel');

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateTranslations();

        langFlag.textContent = currentLang === 'es' ? '🇬🇧' : '🇪🇸';
        langLabel.textContent = currentLang === 'es' ? 'EN' : 'ES';
    });
}

// ═══════════════════════════════════════════
// MODO OSCURO / DARK MODE
// ═══════════════════════════════════════════
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[currentLang];

        for (const k of keys) {
            translation = translation[k];
        }

        if (translation) {
            // Para inputs y textareas, actualizar placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// ═══════════════════════════════════════════
// CATALOG FILTERS
// ═══════════════════════════════════════════
function initCatalogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter products
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ═══════════════════════════════════════════
// FAQ ACCORDION
// ═══════════════════════════════════════════
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ═══════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Aquí normalmente enviarías el formulario a un servidor
        // Por ahora, solo mostramos el mensaje de éxito
        console.log('Form submitted:', formData);

        // Show success message
        successMessage.classList.add('show');
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);

        // Opcional: Abrir WhatsApp con el mensaje prellenado
        const whatsappMessage = encodeURIComponent(
            `Hola! Me llamo ${formData.name}.\n\nAsunto: ${formData.subject}\n\n${formData.message}`
        );
        // window.open(`https://wa.me/34XXXXXXXXX?text=${whatsappMessage}`, '_blank');
    });
}

// ═══════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ═══════════════════════════════════════════
// INTERSECTION OBSERVER (ANIMATIONS)
// ═══════════════════════════════════════════
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ═══════════════════════════════════════════
// EFECTO TILT 3D EN TARJETAS
// ═══════════════════════════════════════════
function init3DTilt() {
    // Solo activar en dispositivos con hover (no móviles)
    if (window.matchMedia('(hover: hover)').matches) {
        const cards = document.querySelectorAll('.product-card, .review-card, .teachers-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// Inicializar efecto 3D tilt
init3DTilt();

// ═══════════════════════════════════════════
// PARALLAX FLOTANTE
// ═══════════════════════════════════════════
function initParallaxFloat() {
    const floatingElements = document.querySelectorAll('.float-item');
    const teachersSection = document.getElementById('profesores');

    if (!teachersSection || floatingElements.length === 0) return;

    let isInView = false;

    // Detectar cuando la sección está visible
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isInView = entry.isIntersecting;
        });
    }, { threshold: 0.1 });

    sectionObserver.observe(teachersSection);

    // Aplicar parallax en scroll
    window.addEventListener('scroll', () => {
        if (!isInView) return;

        const scrolled = window.pageYOffset;
        const sectionTop = teachersSection.offsetTop;
        const offset = scrolled - sectionTop;

        floatingElements.forEach((item, index) => {
            const speed = parseFloat(item.dataset.speed) || 0.5;
            const movement = offset * speed;
            const rotation = (offset * speed) / 10;

            item.style.transform = `translateY(${movement}px) rotate(${rotation}deg)`;
        });
    });
}

// Inicializar parallax flotante
initParallaxFloat();

// ═══════════════════════════════════════════
// EFECTO CONFETI
// ═══════════════════════════════════════════
function launchConfetti() {
    const colors = [
        'var(--edu-red)',
        'var(--edu-orange)',
        'var(--edu-yellow)',
        'var(--edu-green)',
        'var(--edu-blue)',
        'var(--edu-purple)',
        'var(--primary)',
        'var(--accent)'
    ];

    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 1) + 's';

        // Formas variadas
        const shapes = ['square', 'circle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        }

        document.body.appendChild(confetti);

        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// ═══════════════════════════════════════════
// BOTÓN VOLVER ARRIBA
// ═══════════════════════════════════════════
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modificar la función del formulario para incluir confeti
const originalInitContactForm = initContactForm;
initContactForm = function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        console.log('Form submitted:', formData);

        // Show success message
        successMessage.classList.add('show');
        form.reset();

        // ¡LANZAR CONFETI! 🎉
        launchConfetti();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    });
};

// Reinicializar el formulario con confeti
initContactForm();
