# Reusible File Reader

We want to read from multiple types of files `txt|json|csv|pdf` etc... \
we need to read files in different format from our local machine,
or a remote server and writing code that implements the logic for
each of these files can be `very tedious` and `repetitive` which is
something that we are supposed to ovide while writing codes.

The current application needs to read data from a csv file, do some processing then generates a report. The logic is pretty straightforward but the problem is how to make this app `open to change` if we decide to change the data source.We want to be able to read from multiple types of files without changing the core of our program.

## Data Source

Our Data source is csv file that contains information about football matches.

| Date       | HomeTeam    | Away Team | Home Team Goals | Away Team Goals | Winner | Referee    |
| :--------- | :---------- | :-------- | :-------------- | :-------------- | :----- | :--------- |
| 12/08/2018 | Arsenal     | Man City  | 0               | 2               | A      | M Oliver   |
| 12/08/2018 | Liverpool   | West Ham  | 4               | 0               | H      | A Taylor   |
| 12/08/2018 | Southampton | Burnley   | 0               | 0               | D      | G Scott    |
| 18/08/2018 | Cardiff     | Newcastle | 0               | 0               | D      | C Pawson   |
| 18/08/2018 | Chelsea     | Arsenal   | 3               | 2               | H      | M Atkinson |
| ...        | ...         | ...       | ...             | ...             | ...    | ...        |

## Design Solution

![design](design.png)

The Design show that the **concrete class** `MatchReader` **delegates** the reading of data to an appropriate object that is responsible of
implementing the logic of reading a file from a data source.
The Reader object might be an instance of PDFFileReader, CSVFileReader, APIReader wich reads data from a remote server or any other Reader the app might needs in the future thus `MatchReader` does not depends on concrete classes.

## Reader in action

<details>
<summary>Click to expend</summary>

```js
const reader = new CSVFILEReader(pathtofile);
const matchReader = new MatchReader(reader);
matchReader.load();

// we can access to our data throught:
const result = matchReader.data();
```

</details>

## Processing Time ( Analysing Data)

The phase that comes after loading the data is the `analysing`
phase in which we can perform many types of analysis based on
what kind of information we want to extract from the data.
Then we can move the `reporting phase` or `visualization phase`.

![data flow](flow.png)

# Designing Analyser and Reporter

We will adopt the same `design pattern` while implementing the `analysis` and `reporting` phase.The Summary class is `decoupled` from any `concrete class` that implements some sort of analysis or reporting which will give us the freedom to use different type of analysis and reporting.

![analyser & reporter](design2.png)

## How Everything Fits Togeter
<details>
 <summary>Click to expend</summary>

```js
const csvReader = new CSVFileReader('src/football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
const analyser = new WinsAanalysis('Man United');
const reporter = new ConsoleReport();
const summary = new Summary(analyser, reporter);
summary.buildAndPrintReport(matchReader.data);
```
</details>
<<<<<<< HEAD
=======

## Todo
Add a `graphical user interface` and `data visualization`

 download the this repo as zip file or clone it to your local machine:

```js
 npm install : to install dependencies
 npm start : to build & run
 npm run start:build : to build your code
 npm run start:run: to run your code 

```
>>>>>>> origin/main
