const eventArea = document.getElementById('event_area');
const imageArea = document.getElementById('image_area');
const restartButton = document
  .getElementById('restart')
  .addEventListener('click', () => restart());
const attackButton = document
  .getElementById('attack')
  .addEventListener('click', () => attack());
const defendButton = document
  .getElementById('defend')
  .addEventListener('click', () => defend());
const healButton = document
  .getElementById('heal')
  .addEventListener('click', () => heal());
const breakdanceButton = document
  .getElementById('breakdance')
  .addEventListener('click', () => breakdance());
const eatButton = document
  .getElementById('eat')
  .addEventListener('click', () => eatCronut());

function restart() {
  while (eventArea.hasChildNodes()) {
    eventArea.removeChild(eventArea.lastChild);
  }
  var div = document.createElement('div');
  div.appendChild(document.createTextNode('Out on the street, ready to go!'));
  eventArea.prepend(div);
  imageArea.className = 'new';
}

function attack() {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
  eventArea.prepend(div);
  imageArea.className = 'attack';
}

function defend() {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode('You put sunglasses on.'));
  eventArea.prepend(div);
  imageArea.className = 'defend';
}

function heal() {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode('You feel refreshed after yoga.'));
  eventArea.prepend(div);
  imageArea.className = 'heal';
}

function breakdance() {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode("It's really spinning class"));
  eventArea.prepend(div);
  imageArea.className = 'breakdance';
}

function eatCronut() {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode("You've gained 1000 health points."));
  eventArea.prepend(div);
  imageArea.className = 'eat';
}
