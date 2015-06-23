$(document).ready(function(){
  $('#inbox_icon').on('click', inbox);

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});



});

var inbox = function(event){
  event.preventDefault();
  $target = $(event.target);

  $.ajax({
    url: '/invitations',
    method: 'get'

  }).done(function(response){
    $('.this-form').append(response)
  }).fail(function(error){
    console.log(error)
  })
}




