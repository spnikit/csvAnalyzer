import { MatchReader, MatchData } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./ConsoleReport";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();
const matches = reader.matches;

new Summary(new WinsAnalysis("Man City"), new ConsoleReport()).buildAndReport(
  matches
);
