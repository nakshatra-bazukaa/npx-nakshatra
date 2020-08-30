#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
}

const data = {
    name: chalk.white('               Nakshatra Gupta'),
    handle: chalk.white('nakshatra-bazukaa'),
    work: chalk.white('Android and Node Developer, Blockchain Enthausiast'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bazukaaNaksh'),
    github: chalk.gray('https://github.com/') + chalk.green('nakshatra-bazukaa'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('nakshatra-gupta-0199b9181'),
    npx: chalk.red('npx') + ' ' + chalk.white('nakshatra'),
    labelWork: chalk.white.bold('      Work:'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelCard: chalk.white.bold('      Card:'),
}

const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))