$('#attendanceSabbath').click(function() {
  $('input[value$="day"]').filter( 'input[name$="lunch"]').prop('checked', false);
});

$('input[value$="day"]').filter( 'input[name$="lunch"]').click(function() {
  $('#attendanceFull').prop('checked', true);
});

// Voluntary service
$('#otherVoluntaryText').focusin(function() {
  $('#otherVoluntaryChB').prop('checked', true);
});

$('#otherVoluntaryText').focusout(function() {
  if (!this.value.length) {
    $('#otherVoluntaryChB').prop('checked', false);
  }
});
