// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let form = this;
  if (form.checkValidity()) {
    alert('¡Mensaje enviado correctamente!');
    form.reset();
    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});

// Validación del Test de Seguridad
document.getElementById('testForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let correctAnswers = {
    question1: 'MiPerro2023!',
    question2: 'hacer banca online',
    question3: 'engaño digital',
    question4: 'seguridad',
    question5: '2FA'
  };

  let correctCount = 0;
  let feedbackHTML = '';

  for (let key in correctAnswers) {
    let selectElement = document.getElementById(key);
    let userAnswer = selectElement.value;
    let correctAnswer = correctAnswers[key];

    let userAnswerText = selectElement.options[selectElement.selectedIndex]?.text || '(sin respuesta)';
    let correctText = [...selectElement.options].find(opt => opt.value === correctAnswer)?.text || '';

    let questionText = selectElement.closest('.mb-3').querySelector('.form-label').innerText;

    if (userAnswer === correctAnswer) {
      feedbackHTML += `
        <div class="alert alert-success">
          <strong>✔ Correcto:</strong> ${questionText}<br>
          Tu respuesta: <em>${userAnswerText}</em>
        </div>
      `;
      correctCount++;
    } else {
      feedbackHTML += `
        <div class="alert alert-danger">
          <strong>✘ Incorrecto:</strong> ${questionText}<br>
          Tu respuesta: <em>${userAnswerText}</em><br>
          Respuesta correcta: <em>${correctText}</em>
        </div>
      `;
    }
  }

  feedbackHTML = `<p class="fw-bold">Has acertado ${correctCount} de 5 preguntas.</p>` + feedbackHTML;
  document.getElementById('testFeedback').innerHTML = feedbackHTML;

  // Ocultar botón enviar
  document.getElementById('submitTestBtn').classList.add('d-none');
  // Mostrar botones reiniciar y cerrar
  document.getElementById('restartTestBtn').classList.remove('d-none');
  document.getElementById('closeTestBtn').classList.remove('d-none');
});

// Tomar el test nuevamente
document.getElementById('restartTestBtn').addEventListener('click', function() {
  document.getElementById('testForm').reset();
  document.getElementById('testFeedback').innerHTML = '';
  document.getElementById('submitTestBtn').classList.remove('d-none');
  document.getElementById('restartTestBtn').classList.add('d-none');
  document.getElementById('closeTestBtn').classList.add('d-none');
});

// Cerrar test
document.getElementById('closeTestBtn').addEventListener('click', function() {
  let modalEl = document.getElementById('testModal');
  let modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
});
