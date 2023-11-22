import { MatchData } from '../MatchData';
import { Analyser } from '../Summary';
import { MatchResult } from '../MatchResult';
export class WinsAanalysis implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let teamWins = 0;

    for (let match of matches) {
      const isWinner =
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin);

      if (isWinner) teamWins++;
    }

    return `${this.team} has won ${teamWins} games.`
  }
}
