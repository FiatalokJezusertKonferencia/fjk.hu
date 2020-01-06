'use strict';

var request = require('superagent');

require('./reg/tab');
require('./reg/shirt')(calculatePrice);
require('./reg/bindings');

function changeSwagCalculator() {
  var swagCalculator = $('#swagCalculator');
  var selectedSwag = $('[data-swag]:checked');
  var swagPrice = selectedSwag.data().price;

  swagCalculator.text(swagPrice);

  $('#calculator').trigger('updateFullPrice');
}

$('#swag').change(changeSwagCalculator);

$('#calculator').on('updateFullPrice', function (e) {
  var swagPrice = parseInt($('#swagCalculator').text(), 10);
  var regPrice = parseInt($('#regCalculator').text(), 10);
  var price = swagPrice + regPrice;

  $('#fullCalculator')
    .animate({ 'font-size': '150%' }, { duration: 250 })
    .text(price)
    .animate({ 'font-size': '100%' }, { duration: 250 });
});

var payableSelector = '[data-price]:checked, [data-price].shirtOrder';

function calculatePrice() {
  var prices = $(payableSelector);

  var regCalculator = $('#regCalculator');
  var orignalVal = parseInt(regCalculator.text(), 10);
  var price = 0;
  prices.each(function () {
    if (!$(this).data().swag) {
      price += $(this).data().price;
    }
  });

  if (orignalVal === price) {
    return;
  }

  regCalculator.text(price);
  $('#calculator').trigger('updateFullPrice');
}

calculatePrice();

$('#registrationForm').on('change', '[data-price], [data-price].shirtOrder', calculatePrice);

var submitted = false;
$('#registrationForm').on('submit', function (e) {
  e.preventDefault();

  if (submitted) {
    return false;
  }
  submitted = true;

  var form = $(this).serializeArray();

  form.push({ name: 'lang', value: (window.location.pathname.indexOf('/en/') > -1) });

  $('#submitNext').trigger('click', { duration: 1 });

  request
    .post('https://reg-fjk-staging.herokuapp.com/register')
    .send(form)
    .end(function (err, res) {
      if (err) {
        submitted = false;
        $('#server-error').fadeIn();
        return $('#submitError').trigger('click');
      }

      if (res.statusType === 2) {
        return $('#submitOk').trigger('click');
      }

      if (res.statusType === 4) {
        $('#user-error').fadeIn();
        return $('#submitError').trigger('click');
      }
    });

  return true;
});

$(window).on('load', function(){
  if (window.innerWidth <= 994) {
    $('#regInfoModal').modal('show');
  };
});