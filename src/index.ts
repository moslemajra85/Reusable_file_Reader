import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';
import { WinsAanalysis } from './analysers/WinsAnalysis';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { Summary } from './Summary';

const csvReader = new CSVFileReader('src/football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
const analyser = new WinsAanalysis('Man United');
const reporter = new ConsoleReport();
const summary = new Summary(analyser, reporter)
summary.buildAndPrintReport(matchReader.data)
 