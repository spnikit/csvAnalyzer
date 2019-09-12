import { MatchData } from "./MatchReader";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndReport(matches: MatchData[]): void {
    const result = this.analyzer.run(matches);
    this.outputTarget.print(result);
  }
}
