'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var WIZARDS_NUMBERS = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var wizards = [];

var setupBlock = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var setupSimilarBlock = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
var userWizardCoat = document.querySelector('.js-user-wizard-coat');
var userWizardCoatInput = document.querySelector('.js-user-coat-color-input');
var userWizardEyes = document.querySelector('.js-user-wizard-eyes');
var userWizardEyesInput = document.querySelector('.js-user-eyes-color-input');
var userWizardFireball = document.querySelector('.js-user-fireball');
var userWizardFireballInput = document.querySelector('.js-user-fireball-input');
var userNameInput = document.querySelector('.js-user-name-input');

var fragment = document.createDocumentFragment();

function getRandomIndex(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomName() {
  var firstNameMaxIndex = WIZARD_FIRST_NAMES.length;
  var secondNameMaxIndex = WIZARD_SECOND_NAMES.length;
  return WIZARD_FIRST_NAMES[getRandomIndex(0, firstNameMaxIndex - 1)] + ' ' + WIZARD_SECOND_NAMES[getRandomIndex(0, secondNameMaxIndex - 1)];
}

function getRandomCoatColor() {
  var coatColorMaxIndex = COAT_COLORS.length;
  return COAT_COLORS[getRandomIndex(0, coatColorMaxIndex - 1)];
}

function getRandomEyesColor() {
  var eyesColorMaxIndex = EYES_COLORS.length;
  return EYES_COLORS[getRandomIndex(0, eyesColorMaxIndex - 1)];
}

function getRandomFireballColor() {
  var fireballColorMaxIndex = FIREBALL_COLORS.length;
  return FIREBALL_COLORS[getRandomIndex(0, fireballColorMaxIndex - 1)];
}

function createWizards(x) {
  for (var i = 0, wizardsInfo = []; i < x; i++) {
    wizardsInfo.push({
      name: getRandomName(),
      coatColor: getRandomCoatColor(),
      eyeColor: getRandomEyesColor()
    });
  }
  return wizardsInfo;
}

function renderWizard(wizard) {
  var wizardItem = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardItem.querySelector('.setup-similar-label');
  var wizardCoatColor = wizardItem.querySelector('.wizard-coat');
  var wizardEyesColor = wizardItem.querySelector('.wizard-eyes');

  wizardName.textContent = wizard.name;
  wizardCoatColor.style.fill = wizard.coatColor;
  wizardEyesColor.style.fill = wizard.eyeColor;

  return wizardItem;
}

function openSetupEscPressHandler(evt) {
  if (evt.key === ESC_KEY) {
    if (document.activeElement !== userNameInput) {
      closeSetup();
    }
  }
}

function openSetup() {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', openSetupEscPressHandler);
}

function closeSetup() {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', openSetupEscPressHandler);
}

function changeUserColor(object, input, color) {
  if (object === userWizardFireball) {
    object.style.backgroundColor = color;
  } else {
    object.style.fill = color;
  }
  input.value = color;
}

wizards = createWizards(WIZARDS_NUMBERS);

for (var i = 0; i < WIZARDS_NUMBERS; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);
setupSimilarBlock.classList.remove('hidden');


setupOpenButton.addEventListener('click', function () {
  openSetup();
});

setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openSetup();
  }
});

setupCloseButton.addEventListener('click', function () {
  closeSetup();
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetup();
  }
});

userWizardCoat.addEventListener('click', function () {
  changeUserColor(userWizardCoat, userWizardCoatInput, getRandomCoatColor());
});


userWizardEyes.addEventListener('click', function () {
  changeUserColor(userWizardEyes, userWizardEyesInput, getRandomEyesColor());
});

userWizardFireball.addEventListener('click', function () {
  changeUserColor(userWizardFireball, userWizardFireballInput, getRandomFireballColor());
});
