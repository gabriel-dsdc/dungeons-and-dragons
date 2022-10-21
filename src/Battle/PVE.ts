import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected monstersList: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  fight(): number {
    const remainingMonsters = [...this.monstersList];
  
    while (remainingMonsters[0]) {
      this.player.attack(remainingMonsters[0]);
      if (remainingMonsters[0].lifePoints <= -1) {
        remainingMonsters.splice(0, 1);
      }
      if (remainingMonsters[0]) {
        remainingMonsters[0].attack(this.player);
      }
    }
    return super.fight();
  }
}

export default PVE;
