class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000;

    this.eventArea = document.getElementById('event_area');
    this.imageArea = document.getElementById('image_area');
    this.attackButton = document
      .getElementById('attack')
      .addEventListener('click', () => this.attack());

    this.restartButton = document
    .getElementById('restart')
    .addEventListener('click', () => this.restart());

    this.defendButton = document
  .getElementById('defend')
  .addEventListener('click', () => this.defend());

    this.healButton = document
    .getElementById('heal')
    .addEventListener('click', () => this.heal());
  }

  

  attack() {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode("'ATTAAAAAAAAACK!''"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'attack';
  }

  restart() {
    while (this.eventArea.hasChildNodes()) {
      this.eventArea.removeChild(this.eventArea.lastChild);
    }
    var div = document.createElement('div');
    div.appendChild(document.createTextNode('Out on the street, ready to go!'));
    this.eventArea.prepend(div);
    this.imageArea.className = 'new';
  }
    defend() {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode('You put sunglasses on.'));
    this.eventArea.prepend(div);
    this.imageArea.className = 'defend';
  }

    heal() {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode('You feel refreshed after yoga.'));
    this.eventArea.prepend(div);
    this.imageArea.className = 'heal';
  }
}




let kenny = new Unicorn('Kenny', 'Flatiron Student');
