const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

const weapon = new Weapon("sword");
const shield = new Shield("toto");

/** Create Heracles  */
const heracles = new Fighter(
  "Heracles",
  20,
  6,
  weapon.damage,
  shield.protection
);

/** Create the opponent  */
const boar = new Fighter("Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} attack ${fighter2.name}  ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};

// console.log(roundDisplay(heracles, boar));
// console.log(heracles);
// console.log(boar);

{
  let round = 0;

  while (heracles.isAlive() && boar.isAlive()) {
    console.log(` Round #${round}`);

    heracles.fight(boar);
    console.log(roundDisplay(heracles, boar));

    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));

    round++;
  }

  const result = score(heracles, boar);

  console.log(` ${result.loser.name} is dead`);
  console.log(` ${result.winner.name} wins ( ${result.winner.life} )`);
}
