var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbyVFR6AoHchzGVLEfiEGQbUUL08p85wJWRRwff93uYUa8qHWpL7/exec'


$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
  )

});
