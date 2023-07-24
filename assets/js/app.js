$(document).ready(function() {
  AOS.init(); // aos animation initialiazation

  // cart page
  $('.cartIncreament').click(function() {
    var quantityInput = $(this).siblings('.cartValue');
    var currentQuantity = parseInt(quantityInput.val());
    currentQuantity++;
    quantityInput.val(currentQuantity);
  });

  $('.cartDecreament').click(function() {
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
});

// header search product
const searchButton = document.getElementById('headerSearchButton');
const searchField = document.getElementById('headerSearchField');
const togleIcon = document.getElementById('togleIcon');

searchButton.addEventListener('click', function () {
  searchField.classList.toggle('show');
  if (togleIcon.classList.contains('fa-magnifying-glass')) {
    togleIcon.classList.remove('fa-magnifying-glass');
    togleIcon.classList.add('fa-xmark');
  } else {
    togleIcon.classList.add('fa-magnifying-glass');
    togleIcon.classList.remove('fa-xmark');
  }
})
// header search product

// filter range
const rangeLeft = document.getElementById('range-left');
const rangeRight = document.getElementById('range-right');

rangeLeft.addEventListener('input', updateRange);
rangeRight.addEventListener('input', updateRange);

function updateRange() {
  const leftValue = parseInt(rangeLeft.value, 10);
  const rightValue = parseInt(rangeRight.value, 10);
  if (leftValue >= rightValue) {
    rangeLeft.value = rightValue - 1;
  }
}
// filter range


// flavour one
function flavourOneInc() {
  let quantityInputOne = document.getElementById('flavourOneValue');
  let currentQuantity = parseInt(quantityInputOne.value);
  currentQuantity++;
  quantityInputOne.value = currentQuantity;
}

function flavourOneDec() {
  let quantityInputOne = document.getElementById('flavourOneValue');
  let currentQuantity = parseInt(quantityInputOne.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityInputOne.value = currentQuantity;
  }
}

// flavour two
function flavourTwoInc() {
  let quantityInputTwo = document.getElementById('flavourTwoValue');
  let currentQuantity = parseInt(quantityInputTwo.value);
  currentQuantity++;
  quantityInputTwo.value = currentQuantity;
}

function flavourTwoDec() {
  let quantityInputTwo = document.getElementById('flavourTwoValue');
  let currentQuantity = parseInt(quantityInputTwo.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityInputTwo.value = currentQuantity;
  }
}

// flavour three
function flavourThreeInc() {
  let quantityInputThree = document.getElementById('flavourThreeValue');
  let currentQuantity = parseInt(quantityInputThree.value);
  currentQuantity++;
  quantityInputThree.value = currentQuantity;
}

function flavourThreeDec() {
  let quantityInputThree = document.getElementById('flavourThreeValue');
  let currentQuantity = parseInt(quantityInputThree.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityInputThree.value = currentQuantity;
  }
}

// flavour four
function flavourFourInc() {
  let quantityInputFour = document.getElementById('flavourFourValue');
  let currentQuantity = parseInt(quantityInputFour.value);
  currentQuantity++;
  quantityInputFour.value = currentQuantity;
}

function flavourFourDec() {
  let quantityInputFour = document.getElementById('flavourFourValue');
  let currentQuantity = parseInt(quantityInputFour.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityInputFour.value = currentQuantity;
  }
}

// variable detail counter
// flavour four
function variableIncCounter() {
  let variableCounterValue = document.getElementById('variableCounterValue');
  let currentQuantity = parseInt(variableCounterValue.value);
  currentQuantity++;
  variableCounterValue.value = currentQuantity;
}

function variableDecCounter() {
  let variableCounterValue = document.getElementById('variableCounterValue');
  let currentQuantity = parseInt(variableCounterValue.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    variableCounterValue.value = currentQuantity;
  }
}

