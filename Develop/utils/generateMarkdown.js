// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'agpl':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'apache': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'no license':
      return `No license`;
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'agpl':
      return `[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'apache': 
      return `[Apache license 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[MIT license](https://opensource.org/licenses/MIT)`;
    case 'no license':
      return `No license`;
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'agpl':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'apache': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'no license':
      return `No license`;
    default:
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  
  const { title, githubUsername, email, what, why, learn, how, installation, license, confirmContributers, contribute, test } = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `
  
  # ${title}

  ${licenseBadge}

  ## Table of Contents
  - [Description](#description)
  - [Why](#why)
  - [What I Learned](#what-i-learned)
  - [How to Use](#how-to-use)
  - [Installation](#installation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${what}
  ${why}
  ${how}

  ## What I Learned
  ${learn}

  ## Installation
  ${installation}

  ## License
  ${licenseLink}
  ${licenseSection}

  ## Contributing
  ${confirmContributers ? contribute : 'Contributions are not accepted at the moment'}

  ## Tests
  ${test}

  ## Questions 
  - GitHub: [${githubUsername}](https://github.com/${githubUsername})
  - Email: ${email}
`;
}

module.exports = generateMarkdown;
