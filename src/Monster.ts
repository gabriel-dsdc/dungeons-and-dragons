import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    private _lifePoints: number = 85,
    private _strength: number = 63,
  ) {}

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) { this._lifePoints -= attackPoints; }
    if (this.lifePoints <= 0) { this._lifePoints = -1; }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    if (this.lifePoints > 0) {
      enemy.receiveDamage(this.strength);
    }
  }
}

export default Monster;
