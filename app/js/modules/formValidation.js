(function () {
  function setFormValidation(form) {
    $("." + form).validate({
      rules: {
        subscribe__email: {
          required: true,
          email: true,
          minlength: 6
        }
      },
      messages: {
        subscribe__email: {
          required: "This field is required",
          email: "Please enter a valid email address"
        }
      },
      errorClass: "subscribe__input--invalid",
      validClass: "subscribe__input--valid",
      focusCleanup: true,
      focusInvalid: false,
      onkeyup: false,
      onfocusout: function (element) {
        this.element(element);
      },
      errorPlacement: function (error, element) {
        return true;
      },
      submitHandler: function (form) {
        console.log("form valid");
        form.submit(); // отправка простая
        return false;
      }
      // submitHandler: function (form) {
      //   // $(".modal--login").fadeIn(500);
      //   $.ajax({
      //     url: form.action,
      //     type: form.method,
      //     data: form.serialize(),
      //     success: function (response) {
      //       // $('.answers').html(response);
      //       // $(".modal--order").slideUp();
      //       console.log("success");
      //     }
      //   });
      //   return false;
      // }
    });
  }

  window.setFormValidation = setFormValidation;
}());
