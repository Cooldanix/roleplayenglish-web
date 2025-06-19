// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DEFINIR TRADUCCIONES (hemos quitado la clave 'lang_button') ---
    const translations = {
        'es': {
            'nav_welcome': 'Bienvenida', 'nav_objective': 'Objetivo', 'nav_methodology': 'Metodología', 'nav_contact': 'Contacto',
            'welcome_title': 'Bienvenido a RolePlay English', 'welcome_subtitle': '¡Prepárate para una experiencia única! En este curso, no solo aprenderás inglés, sino que vivirás el idioma a través de las películas. Olvídate de los libros de texto polvorientos y las listas de verbos interminables. Aquí, las estrellas de Hollywood serán tus profesores y los guiones, tus lecciones más emocionantes.', 'welcome_cta': 'Descubre Nuestra Misión',
            'objective_title': 'Nuestro Objetivo:', 'objective_p1': 'Nuestro propósito es el de aplicar un PLAN DE APRENDIZAJE DE INGLÉS, a través de un MODELO fundamentado en el análisis de DIÁLOGOS SELECTOS de películas de cine y la EJECUCIÓN, de parte de los  estudiantes, de estos diálogos de tal manera que entiendan el vocabulario, comprendan lo que el actor desea expresar, entiendan las emociones involucradas, se compenetren con el contexto en el cual se desarrolla el diálogo,  analicen el perfil psicológico del personaje. De esta manera, los participantes perfeccionarán su capacidad de comunicarse en el idioma inglés.',
            'method_title': 'La Metodología:', 'method_p1': 'El taller está dividido en módulos temáticos  en los cuales se analizan, en orden de incremento paulatino de nivel, diversos diálogos de películas que han hecho historia por el valor de su contenido.', 'card1_title': 'Análisis de Guion', 'card1_text': 'Desglosamos diálogos para entender vocabulario, modismos y contexto cultural.', 'card2_title': 'Role-Playing', 'card2_text': 'Practicas los diálogos adoptando la entonación, el ritmo y la pronunciación.', 'card3_title': 'Improvisación', 'card3_text': 'Usas lo aprendido para crear tus propias conversaciones, ganando fluidez.',
            'contact_title': 'Únete a la Diversión', 'contact_p1': '¡Estamos aquí para ayudarte! Si tienes alguna pregunta o comentario, no dudes en contactarnos. Estamos disponibles para responder tus dudas y ayudarte a mejorar tu nivel de inglés.', 'contact_instagram': 'Instagram: @roleplayenglish', 'contact_email': 'Email: roleplayenglish.info@gmail.com',
            'footer_text': '© 2025 RolePlay English. Todos los derechos reservados.'
        },
        'en': {
            'nav_welcome': 'Welcome', 'nav_objective': 'Objective', 'nav_methodology': 'Methodology', 'nav_contact': 'Contact',
            'welcome_title': 'Welcome to RolePlay English', 'welcome_subtitle': 'Get ready for a unique experience! In this course, you will not only learn English, but you will live the language through movies. Forget dusty textbooks and endless lists of verbs. Here, Hollywood stars will be your teachers and scripts will be your most exciting lessons.', 'welcome_cta': 'Discover Our Mission',
            'objective_title': 'Our Objective:', 'objective_p1': 'Our purpose is to apply an ENGLISH LEARNING PLAN, through a MODEL based on the analysis of SELECTED DIALOGUES from movies and the EXECUTION, by the students, of these dialogues in such a way that they understand the vocabulary, understand what the actor wants to express, understand the emotions involved, understand the context in which the dialogue takes place, analyze the psychological profile of the character. In this way, participants will improve their ability to communicate in English.',
            'method_title': 'The Methodology:', 'method_p1': 'The workshop is divided into thematic modules in which various dialogues from films that have made history for the value of their content are analyzed in order of gradually increasing level.', 'card1_title': 'Script Analysis', 'card1_text': 'We break down dialogues to understand vocabulary, idioms, and cultural context.', 'card2_title': 'Role-Playing', 'card2_text': 'You practice the dialogues, adopting the intonation, rhythm, and pronunciation.', 'card3_title': 'Improvisation', 'card3_text': 'You use what you\'ve learned to create your own conversations, gaining fluency.',
            'contact_title': 'Join in the Fun', 'contact_p1': 'We are here to help you! If you have any questions or comments, don\'t hesitate to contact us. We are available to answer your questions and help you improve your English level.', 'contact_instagram': 'Instagram: @roleplayenglish', 'contact_email': 'Email: roleplayenglish.info@gmail.com',
            'footer_text': '© 2025 RolePlay English. All rights reserved.'
        }
    };

    // --- 2. ELEMENTOS Y FUNCIONES ---
    const langToggleButton = document.getElementById('lang-toggle');

    const setLanguage = (lang) => {
        localStorage.setItem('language', lang);
        
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            // Aseguramos que la clave existe antes de intentar traducir
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // --- CÓDIGO ACTUALIZADO PARA EL BOTÓN ---
        // Cambia el texto del botón para mostrar el idioma AL QUE SE VA A CAMBIAR
        if (lang === 'es') {
            langToggleButton.textContent = 'EN';
        } else {
            langToggleButton.textContent = 'ES';
        }
        
        document.documentElement.lang = lang;
    };

    // --- 3. LÓGICA DE EJECUCIÓN ---
    langToggleButton.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'es';
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    const initialLang = localStorage.getItem('language') || 'es';
    setLanguage(initialLang);
});