import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const content = ` 
        
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        
        <h1>Report</h1>
          ${report}
        </body>
        </html>
        `;

    fs.writeFileSync('report.html', content);
  }
}
