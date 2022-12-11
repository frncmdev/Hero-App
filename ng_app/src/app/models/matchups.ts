import { Hero } from "./hero";
import { Villain } from "./villain";
export interface Matchups {
  matchupId: number;
  matchupTime: string;
  winner: string;
  heroId: number;
  villainId: number;
  hero: Hero;
  villain: Villain;
}
