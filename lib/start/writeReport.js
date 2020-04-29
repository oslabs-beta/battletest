  /**
   * 
   */

  const fs = require('fs');
  const path = require('path');

  /**
   * This determines names of .json files to read.
   */
  const dirPath = path.resolve(process.cwd(), '__battletest__/__result__');
  const jsonFiles = fs.readdirSync(dirPath)
    .filter(filename => /[\w|:]*\.json/.test(filename))
    .map(filename => path.resolve(process.cwd(), '__battletest__/__result__', filename));

  cosnt htmlFile = '';
  for (let file of jsonFiles) {
    // each file is a particular json file
    console.log(file)
    // some logic 
    const data = fs.readFileSync(file)
    for (let eachTest in file) {
      file[eachTest]
      // some logic appends template for each Test to the big report
    }
  }
  ``



  function testInfo() {
    // `escape` is used to prevent JS from interpreting quotes in `eachTest` as the end of the onClick argument
    for (let eachTest in data) {
      if (data[eachTest]["passed"]) {
        const trTemplate = `
            <tr>
                <td>
                    <p><button onClick="changeShow('${escape(eachTest)}')">PASSED</button><span class="endpoint">${eachTest}</span></p>
                    <div id="${escape(eachTest)}" class="results" style="display: none">
                        <ul class="result_keys">
                            <li>Timer</li>
                        </ul>
                        <ul class="result_values">
                            <li>${data[eachTest]["timer"]}</li>
                        </ul>
                    </div>
                </td>
            </tr>
            `
        const resultHTML = parser.parseFromString(trTemplate, 'text/html')
        passedBlock.appendChild(resultHTML.documentElement)
      } else {
        const trTemplate = `
                <tr>
                    <td>
                        <p><button onClick="changeShow('${escape(eachTest)}')">FAILED</button><span class="endpoint">${eachTest}</span></p>
                        <div id="${escape(eachTest)}" class="results" style="display: none">
                            <ul class="result_keys">
                                <li>Request</li>
                                <li>Status</li>
                                <li>Timer</li>
                                <li>Body</li>
                            </ul>
                            <ul class="result_values">
                                <li>QUERY</li>
                                <li>${data[eachTest]["response"]["status"]}</li>
                                <li>${data[eachTest]["timer"]}</li>
                                <li>
                                    <pre>${JSON.stringify(data[eachTest]["request"]["body"], null, '\t')}</pre>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            `
        const resultHTML = parser.parseFromString(trTemplate, `text/html`)
        failedTable.appendChild(resultHTML.documentElement)
      }
    }
  }

  testInfo()