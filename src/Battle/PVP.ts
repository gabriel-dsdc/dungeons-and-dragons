import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(protected player: Fighter, protected player2: Fighter) {
    super(player);
  }

  fight(): number {
    while (!([this.player.lifePoints, this.player2.lifePoints].includes(-1))) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;
