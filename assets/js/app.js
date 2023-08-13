$(document).ready(function () {
  AOS.init(); // aos animation initialiazation

  // header search product
  $('#headerSearchButton').on('click', function () {
    $('#headerSearchField').toggleClass('show');
  });
  // header search product

  // header cart drawer
  $(".cartOpenBtn").click(function () {
    $("#cartDrawer").addClass("drawer-open");
  });

  $(".cartCloseBtn, .cartBackdrop").click(function () {
    $("#cartDrawer").removeClass("drawer-open");
  });
  // header cart drawer

  // product detail page variable flavour qty handle
  $('.flavourInc').click(function () {
    var quantityInput = $(this).siblings('.flavourValue');
    var currentQuantity = parseInt(quantityInput.val());
    currentQuantity++;
    quantityInput.val(currentQuantity);
  });

  $('.flavourDec').click(function () {
    var quantityInput = $(this).siblings('.flavourValue');
    var currentQuantity = parseInt(quantityInput.val());
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityInput.val(currentQuantity);
    }
  });
  // product detail page variable flavour qty handle

  // product detail page main counter
  $('.variableIncCounter').click(function () {
    var quantityInput = $(this).siblings('.variableCounterValue');
    var currentQuantity = parseInt(quantityInput.val());
    currentQuantity++;
    quantityInput.val(currentQuantity);
  });

  $('.variableDecCounter').click(function () {
    var quantityInput = $(this).siblings('.variableCounterValue');
    var currentQuantity = parseInt(quantityInput.val());
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityInput.val(currentQuantity);
    }
  });
  // product detail page main counter

  // cart page
  $('.cartIncreament').click(function () {
    var quantityInput = $(this).siblings('.cartValue');
    var currentQuantity = parseInt(quantityInput.val());
    currentQuantity++;
    quantityInput.val(currentQuantity);
  });

  $('.cartDecreament').click(function () {
    var quantityInput = $(this).siblings('.cartValue');
    var currentQuantity = parseInt(quantityInput.val());
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityInput.val(currentQuantity);
    }
  });
  // cart page

  // checkout page
  $('#countrySelect2').select2({
    selectOnClose: true
  });
  // checkout page

  // home video iframe
  // Open the modal when the button is clicked
  $('#openModalButton').on('click', function () {
    $('#videoModal').modal('show');
  });

  // When the modal is hidden, pause the video
  $('#videoModal').on('hidden.bs.modal', function () {
    const iframe = document.getElementById('videoPlayer');
    iframe.src = iframe.src; // This will reload the iframe, pausing the video
  });
  // home video iframe

  // login
  $('#togglePassword').click(function () {
    const passwordInput = $('#passwordInput');
    const passwordType = passwordInput.attr('type');
    const eyeIcon = $(this).find('.icon');

    if (passwordType === 'password') {
      passwordInput.attr('type', 'text');
      eyeIcon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      passwordInput.attr('type', 'password');
      eyeIcon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
  // login
});
