//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  if (license == "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license == "Mozilla") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  } else if (license == "Eclipse") {
    return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
  } else if (license == "Apache") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  if (license == "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license == "Mozilla") {
    return "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "Eclipse") {
    return "[Eclipse](https://opensource.org/licenses/EPL-1.0)";
  } else if (license == "Apache") {
    return "[Apache](https://opensource.org/licenses/Apache-2.0)";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
## License
This application is covered under the ${license} license.  More information can be found here, ${renderLicenseLink(license)}.
    `;
}

// function to generate markdown for README
function generateMarkdown(data) {
    const url = `https://github.com/${data.name}`;
    const tableOfContentsUrl = `${url}/${data.title}/tree/main/dist#`;
    return `# ${data.title}
${renderLicenseBadge(data.licenses)}
## Description
${data.description}
## Table of Contents
[Installation](${tableOfContentsUrl}installation)
[Usage](${tableOfContentsUrl}usage)
[License](${tableOfContentsUrl}license)
[Contributing](${tableOfContentsUrl}contributing)
[Tests](${tableOfContentsUrl}tests)
[Questions](${tableOfContentsUrl}questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.licenses)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
This repo was created by, [${data.name}](${url}).
For questions, email: ${data.email}
`;
}

module.exports = generateMarkdown;