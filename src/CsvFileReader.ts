import fs from "fs";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, "utf-8")
      .split("\n")
      .map((match: string): string[] => match.split(","));
  }

  getData(): string[][] {
    return this.data;
  }
}
