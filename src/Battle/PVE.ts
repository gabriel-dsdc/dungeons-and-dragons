import Fighter, { SimpleFighter } from '../Fighter';
import { pveFight } from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected monstersList: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    const remainingMonsters = [...this.monstersList];
    while (this.player.lifePoints > 0 && remainingMonsters[0]) {
      pveFight(this.player, remainingMonsters);
    }
    return super.fight();
  }
}

export default PVE;
