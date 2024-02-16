// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## Description
          ${data.description}
          ## Table of Contents
          - [Install instructions](#install-instructions)
          - [Usage instructions](#usage-instructions)
          - [License](#license)
          - [Contribution Rules](#contribution-rules)
          - [Testing instructions](#testing-instructions)
          - [Questions](#questions)
          ## Install instructions
          ${data.install_desc}
          ## Usage instructions
          ${data.usage_desc}
          ## License
          ${data.license}
          ## Contribution Rules
          ${data.contributing_rules}
          ## Testing instructions
          ${data.test_inst}
          ## Questions
          My contact information if you have any questions are the following:
          *Email*: ${data.email}
          *GitHub*: [User Profile](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
