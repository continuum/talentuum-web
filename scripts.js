$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

(function() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
})();

$(function() {
  $('#WAButton').floatingWhatsApp({
      phone: '56944092889',
      // phone: '1231231231', //WhatsApp Business phone number International format- 
      //Get it with Toky at https://toky.co/en/features/whatsapp. 56 9 6231 8954
      headerTitle: 'Talentuum - WhatsApp!', //Popup Title
      popupMessage: 'Hola, como puedo ayudarte?', //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
      //headerColor: 'crimson', //Custom header color
      //backgroundColor: 'crimson', //Custom background button color
      position: "right"    
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 350) {
      // $(".navbar").css("background-color", "rgba(0, 0, 0, 0.8)");
      $(".navbar").addClass("solid-black");
    } else {
      $(".navbar").removeClass("solid-black");
      // $(".navbar").css("background-color", "transparent");
    }
  });
});

function updateForm(show_this_class){
  
  if( show_this_class == 'filter_candidate'){
      $(".filter_candidate").addClass('is-hidden');
      $(".filter_company").addClass('is-hidden');

      $(".filter_candidate").removeClass('is-hidden');
  }
  
  if( show_this_class == 'filter_company'){
      $(".filter_candidate").addClass('is-hidden');
      $(".filter_company").addClass('is-hidden');

      $(".filter_company").removeClass('is-hidden');
  }

}

(function(){
  emailjs.init("user_sA75mYspddybgzpGJml4p");
})();
function send_email(){
  $("#response").hide();
  $("#response").removeClass("is-success");
  $("#response").removeClass("is-danger");
  $("#response").addClass("is-danger");

  if( $("#contact_name").val() == "" ){
    $("#response").show();
    $("#response").html("El nombre es obligatorio");
  }else if ( $("#contact_email").val() == "" ){
    $("#response").show();
    $("#response").html("El email es obligatorio");
  }else if ( $("#contact_message").val() == "" ){
    $("#response").show();
    $("#response").html("El mensaje es obligatorio");
  }else{

    $origin = "Empresa";
    $extra = "Nombre empresa: "+$("#contact_empresa").val()
    if( $("input[name='option']:checked").val() == 'talento'){
        $origin = "Talento";
        $extra = "Linkedin: "+$("#contact_linkedin").val()
    }

    var template_params = {
        "reply_to": "noreply@talentuum.cl",
        "from_name": "Talentuum Web",
        "contact_name": $("#contact_name").val(),
        "from_mail": $("#contact_email").val(),
        "from_origin": $origin,
        "extra_info": $extra,
        "message_html": $("#contact_message").val()
    }

    var service_id = "default_service";
    var template_id = "template_JJ0hOd2n";

    emailjs.send(service_id, template_id, template_params);
    $("#response").removeClass("is-danger");
    $("#response").addClass("is-success");
    $("#response").html("Mensaje enviado exitosamente");
    $("#response").show()

    $("#contact_name").val("")
    $("#contact_email").val("")
    $("#contact_linkedin").val("")
    $("#contact_empresa").val("")
    $("#contact_message").val("")

    $("#button_send").hide();
  
  }
  
}