import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';
import { WinsAanalysis } from './analysers/WinsAnalysis';

const csvReader = new CSVFileReader('src/football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
const analyser = new WinsAanalysis('Man United');

const report = analyser.run(matchReader.data);
console.log(report);
