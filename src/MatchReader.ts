import { DataReader } from './DataReader';
import { fromStringToDate } from './utils/fromStringToDate';

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

type MatchData = [Date, string, string, number, number, MatchResult, string];
export class MatchReader {
  data: MatchData[] = [];
  constructor(public reader: DataReader) {}
 
  load(): void {
    this.reader.read();
    this.data = this.reader.data.map(this.mapRow);
  }

  private mapRow(row: string[]): MatchData {
    return [
      fromStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
