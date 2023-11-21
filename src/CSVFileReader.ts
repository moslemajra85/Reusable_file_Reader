import fs from 'fs';
import { DataReader } from './DataReader';

export class CSVFileReader implements DataReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row): string[] => row.split(','));
  }
}
