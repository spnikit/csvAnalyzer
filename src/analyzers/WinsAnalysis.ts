import { Analyzer } from "../Summary";
import { MatchData } from "../MatchReader";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const winMatches = matches.filter((match: MatchData): boolean => {
      return (
        (match[1] === this.team && match[5] === MatchResult.HOME_WIN) ||
        (match[2] === this.team && match[5] === MatchResult.AWAY_WIN)
      );
    });

    return `${this.team} wins ${winMatches.length} matches`;
  }
}
