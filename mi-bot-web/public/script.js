document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Array para mantener el historial de la conversación (para que la IA tenga contexto)
    // Se enviará al backend, y el backend lo usará para la API de IA
    let conversationHistory = [];

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return; // No enviar mensajes vacíos

        // Mostrar mensaje del usuario en el chat
        addMessageToChat(message, 'user-message');
        userInput.value = ''; // Limpiar el input

        // Añadir el mensaje del usuario al historial para el contexto de la IA
        conversationHistory.push({ role: 'user', parts: [{ text: message }] });

        // Añadir un mensaje de "escribiendo..." para feedback al usuario
        const typingIndicator = addMessageToChat('Escribiendo...', 'ai-message typing-indicator');
        chatBox.scrollTop = chatBox.scrollHeight; // Asegurar que se vea el último mensaje

        try {
            // Enviar el mensaje y el historial al backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    history: conversationHistory // Envía el historial al backend
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Eliminar el indicador de "escribiendo..."
            chatBox.removeChild(typingIndicator);

            // Mostrar respuesta de la IA
            addMessageToChat(data.reply, 'ai-message');

            // Añadir la respuesta de la IA al historial
            conversationHistory.push({ role: 'model', parts: [{ text: data.reply }] });

        } catch (error) {
            console.error('Error al enviar mensaje al servidor:', error);
            // Eliminar el indicador de "escribiendo..." si hay un error
            if (chatBox.contains(typingIndicator)) {
                chatBox.removeChild(typingIndicator);
            }
            addMessageToChat('Lo siento, no pude obtener una respuesta en este momento.', 'ai-message error-message');
        } finally {
             chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll al final
        }
    }

    function addMessageToChat(text, className) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('chat-message', className);
        msgElement.textContent = text;
        chatBox.appendChild(msgElement);
        // Para scroll automático
        chatBox.scrollTop = chatBox.scrollHeight;
        return msgElement; // Retorna el elemento para poder eliminarlo si es un indicador
    }
});