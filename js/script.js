 // Modal
 $(function () {
    $('#moditoModal').on('show.bs.modal', function (e) {
        $('#moditoModal').focus();
    })            
}); 
$('#moditoModal').on('show.bs.modal', function (event) {
    var modal = $(this)
    modal.find('.modal-body input').val("")
    var button = $(event.relatedTarget) // Button that triggered the modal
    if (button[0].id == 'chatButton') {
        var question = $('#chatQuestion').val()
        $('#chatQuestion').val('')
    } else {
        var question = button.data('question') // Extract info from data-* attributes
    }
    modal.find('.modal-body input').val(question)
  })