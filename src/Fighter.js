const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, weapon = null, shield = null) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.getDamage());

    const damages = Math.max(attackPoints - defender.getDefense(), 0);

    defender.life = Math.max(defender.life - damages, 0);
  }

  getDamage() {
    return this.strength + this.weapon;
  }

  getDefense() {
    return this.dexterity + this.shield;
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
