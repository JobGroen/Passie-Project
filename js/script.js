// Oproepen van navigatie
function openNav() {
    document.getElementById("navigatie").style.display = "block";
    document.getElementById("openbtn").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("navigatie").style.display = "none";
    document.getElementById("openbtn").style.display = "block";
  }


// Functie op nav te sluiten anywhere on screen
var closenav = document.getElementById("navigatie");

closenav.onclick = function () {
    if(event.target == closenav){
        closenav.style.display = "none";
        document.getElementById("openbtn").style.display = "block";
    }
};


// Navigatie other class when scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if(scroll >= 300) {
      $("header.page").addClass("darkNav");
  } else {
      $("header.page").removeClass("darkNav");
  }
});



/* Contact form validation */
function validateForm() {
  document.getElementById('status').innerHTML = "Sending...";
  formData = {
      'tel': $('input[name=tel]').val(),
      'name': $('input[name=name]').val(),
      'email': $('input[name=email]').val(),
      'subject': $('input[name=subject]').val(),
      'message': $('textarea[name=message]').val()
  };

  var name = $('input[name=name]');
  var email = $('input[name=email]');
  var tel = $('input[name=tel]');
  var subject = $('input[name=subject]');
  var message = $('textarea[name=message]');
  var visual_error = "1px solid red";
  var visual_reset = "1px solid rgba(51,51,51,0.4)";

  if (name.val() == '') {
      name.css("border", visual_error);
  } else {
      name.css("borer", visual_reset);
  }

  if (email.val() == '' || !email.val().includes("@")) {
      email.css("border", visual_error);
  } else {
      email.css("border", visual_reset);
  }

  if (tel.val() == '') {
    tel.css("border", visual_error);
  } else {
    tel.css("border", visual_reset);
  }

  if (subject.val() == '') {
      subject.css("border", visual_error);
  } else {
      subject.css("border", visual_reset);
  }

  if (message.val() == '') {
      message.css("border", visual_error);
  } else {
      message.css("border", visual_reset);
  }


  $.ajax({
      url: "../mail.php",
      type: "POST",
      data: formData,
      success: function (data, textStatus, jqXHR) {

          $('#status').text(data.message);
          if (data.code)
              $('#contact-form').closest('form').find("input[type=text], textarea").val("");
      },
      error: function (jqXHR, textStatus, errorThrown) {
          $('#status').text(jqXHR);
      }
  });
}