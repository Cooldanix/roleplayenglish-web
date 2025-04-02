document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        "¿Puedes presentarte en inglés (decir tu nombre, edad, nacionalidad, etc.) de manera clara y fluida?",
        "¿Te sientes cómodo/a hablando de tus hobbies o intereses en inglés?",
        "¿Puedes mantener una conversación básica en inglés (por ejemplo, preguntar y responder sobre el clima, la hora, o direcciones)?",
        "¿Entiendes preguntas comunes en inglés, como \"¿Cómo estás?\" o \"¿De dónde eres?\"?",
        "¿Puedes expresar tus opiniones en inglés sobre temas simples, como películas o comida?",
        "¿Te sientes seguro/a al hacer preguntas en inglés durante una conversación?",
        "¿Puedes hablar de tu rutina diaria en inglés (por ejemplo, lo que haces por la mañana, tarde y noche)?",
        "¿Entiendes cuando alguien te habla en inglés a una velocidad normal?",
        "¿Puedes describir a una persona, lugar o cosa en inglés con detalles?",
        "¿Te sientes cómodo/a hablando en inglés por teléfono o videollamada?",
        "¿Puedes hablar de planes futuros en inglés (por ejemplo, lo que harás el próximo fin de semana)?",
        "¿Puedes explicar una experiencia pasada en inglés (por ejemplo, unas vacaciones o un evento importante)?",
        "¿Te sientes capaz de corregirte a ti mismo/a si cometes un error al hablar en inglés?",
        "¿Puedes mantener una conversación en inglés durante 5 minutos o más sin sentirte bloqueado/a?",
        "¿Entiendes el humor o las bromas en inglés durante una conversación?",
        "¿Puedes hablar de temas complejos en inglés, como noticias, política o tecnología?",
        "¿Te sientes cómodo/a hablando en inglés con personas nativas o con un nivel avanzado?",
        "¿Puedes usar expresiones idiomáticas o frases comunes en inglés durante una conversación?",
        "¿Te sientes capaz de resolver un malentendido o aclarar algo en inglés si no te entienden?",
        "¿Puedes hablar en inglés sin traducir mentalmente desde el español?"
    ];

    const options = ["Siempre", "Casi Siempre", "Pocas Veces", "Nunca"];

    const questionsContainer = document.getElementById("questions");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <label for="q${index + 1}">${index + 1}. ${question}</label>
            <select id="q${index + 1}" name="q${index + 1}" required>
                <option value="">Selecciona una opción</option>
                ${options.map(option => `<option value="${option}">${option}</option>`).join("")}
            </select>
        `;
        questionsContainer.appendChild(questionDiv);
    });

    const form = document.getElementById("englishTest");
    const resultDiv = document.getElementById("result");
    const levelSpan = document.getElementById("level");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let score = 0;

        questions.forEach((_, index) => {
            const selectedOption = document.getElementById(`q${index + 1}`).value;
            switch (selectedOption) {
                case "Siempre":
                    score += 3;
                    break;
                case "Casi Siempre":
                    score += 2;
                    break;
                case "Pocas Veces":
                    score += 1;
                    break;
                case "Nunca":
                    score += 0;
                    break;
            }
        });

        let level;
        if (score >= 45) {
            level = "Avanzado";
        } else if (score >= 30) {
            level = "Intermedio";
        } else {
            level = "Básico";
        }

        levelSpan.textContent = level;
        resultDiv.classList.remove("hidden");
    });
});