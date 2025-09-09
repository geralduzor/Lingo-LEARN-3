document.querySelectorAll('.question').forEach(question => {
    const correctAnswer = question.getAttribute('data-correct');

    question.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            // Disable all buttons after answering
            question.querySelectorAll('button').forEach(btn => btn.disabled = true);

            if (button.textContent.trim() === correctAnswer) {
                button.style.backgroundColor = '#0077ff';
                button.style.color = 'white';
            } else {
                button.style.backgroundColor = 'red';
                button.style.color = 'white';

                // Highlight correct answer
                question.querySelectorAll('button').forEach(btn => {
                    if (btn.textContent.trim() === correctAnswer) {
                        btn.style.backgroundColor = '#0077ff';
                        btn.style.color = 'white';
                    }
                });
            }
        });
    });
});
