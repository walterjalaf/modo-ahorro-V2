// Preloader
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("preloader").classList.add('fade-out');
    setTimeout(() =>{
        document.getElementById("preloader-container").classList.add('fade-out');
    }, 2000);
    
    setTimeout(() => {
        document.getElementById('preloader-container').style.display = 'none';
    }, 4000);
});

// Modal
document.addEventListener('DOMContentLoaded', function () {
    var modalElement = document.getElementById('moditoModal');

    modalElement.addEventListener('show.bs.modal', function () {
        modalElement.focus();
    });

    modalElement.addEventListener('show.bs.modal', function (event) {
        // Limpiar el valor del input en el modal
        var inputElement = modalElement.querySelector('.modal-body input');
        inputElement.value = "";

        // Botón que activó el modal
        var button = event.relatedTarget; // Botón que disparó el modal
        var question = "";

        if (button.id === 'chatButton') {
            var chatQuestion = document.getElementById('chatQuestion');
            question = chatQuestion.value;
            chatQuestion.value = ''; // Limpiar el valor de la pregunta en el input
        } else {
            question = button.getAttribute('data-bs-question'); // Extraer la info de los atributos data-*
        }

        // Establecer el valor en el input del modal
        inputElement.value = question;
    });
});
