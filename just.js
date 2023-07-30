 // JavaScript code
    const welcomeNote = document.querySelector('.welcome-note');

    const stackMessages = [
      'Software Developer',
      'Frontend Engineer',
      'Full Stack Developer'
    ];

    let currentStackIndex = 0;

    function updateWelcomeNote() {
      welcomeNote.textContent = `I'm a ${stackMessages[currentStackIndex]}`;
      currentStackIndex = (currentStackIndex + 1) % stackMessages.length;
    }

    // Update welcome note every 3 seconds
    setInterval(updateWelcomeNote, 3000);
    // JavaScript code remains the same