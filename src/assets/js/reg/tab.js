$('.personal-tab input[required]').change(function() {
  $(this).parent().removeClass('has-error');

  if (!$(this).val().length) {
    $(this).parent().addClass('has-error');
  }
});

var animatingFlag;
var inValidFlag;

$('#registrationForm').on('invalid.bs.validator', function(e) { inValidFlag = true; });

$('#registrationForm').on('valid.bs.validator', function(e) { inValidFlag = false; });

$('.next').click(function(e, options) {
  const duration = options ? options.duration : 800;
  $('#registrationForm').validator();

  if (animatingFlag || inValidFlag) {
    return false;
  }

  var inputs = $(this).parent().find('input[required]');

  inputs.removeClass('has-error');

  var invalidInputs = inputs
    .filter(function() { return $(this).val().length === 0; })
    .each(function() { $(this).parent().addClass('has-error'); });

  if (invalidInputs.length !== 0) {
    return false;
  }

  animatingFlag = true;

  var current_fs = $(this).parent();
  var next_fs = $(this).parent().next();

  // activate next step on progressbar using the index of next_fs
  $('#progressbar li').eq($('.tab').index(next_fs)).addClass('active');

  // show the next tab
  next_fs.css('opacity', 1).show();
  // hide the current tab with style
  if (window.innerWidth <= 994) { // dont use animation on mobile because it causes glitches
    window.scrollTo(0,0);
    current_fs.css('opacity', 0).hide();
    animatingFlag = false;
  } else {
    current_fs.animate({ opacity: 0 }, {
      step: function(now, mx) {
        var scale = 1 - (1 - now) * 0.2;
        var left = (now * 50) + '%';
        var opacity = 1 - now;
  
        current_fs.css({ transform: 'scale(' + scale + ')' });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: duration,
      complete: function() {
        current_fs.hide();
        animatingFlag = false;
      },
      easing: 'easeInOutBack'
    });
  };
});

$('.previous').click(function(e, options) {
  const duration = options ? options.duration : 800;
  if (animatingFlag || inValidFlag) {
    return false;
  }
  animatingFlag = true;

  var current_fs = $(this).parent();
  var previous_fs = $(this).parent().prev();

  // de-activate current step on progressbar
  $('#progressbar li').eq($('.tab').index(current_fs)).removeClass('active');

  // show the previous tab
  previous_fs.css('opacity', 1).show();
  if (window.innerWidth <= 994) { // dont use animation on mobile because it causes glitches
    window.scrollTo(0,0);
    current_fs.css('opacity', 0).hide();
    animatingFlag = false;
  } else {
    // hide the current tab with style
    current_fs.animate({ opacity: 0 }, {
      step: function(now, mx) {
        var scale = 0.8 + (1 - now) * 0.2;
        var left = ((1 - now) * 50) + '%';
        var opacity = 1 - now;

        current_fs.css({ left: left });
        previous_fs.css({ transform: 'scale(' + scale + ')', opacity: opacity });
      },
      duration: duration,
      complete: function() {
        current_fs.hide();
        animatingFlag = false;
      },
      easing: 'easeInOutBack'
    });
  };
});
