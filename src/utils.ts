import Fighter, { SimpleFighter } from './Fighter';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export function pveFight(player: Fighter, remainingMonsters: SimpleFighter[]) {
  player.attack(remainingMonsters[0]);
  if (remainingMonsters[0].lifePoints <= -1) {
    remainingMonsters.splice(0, 1);
  }
  if (remainingMonsters[0]) {
    remainingMonsters[0].attack(player);
  }
}

export default getRandomInt;
