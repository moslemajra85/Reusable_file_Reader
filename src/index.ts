import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchReader';
const csvReader = new CSVFileReader('src/football.csv');
csvReader.read();
const matchReader = new MatchReader(csvReader);
matchReader.load();

let manWins = 0;

for (let match of matchReader.data) {
  const isManWinner =
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin);

  if (isManWinner) {
    manWins++;
  }
}

console.log(`Man United has won ${manWins} games.`);
