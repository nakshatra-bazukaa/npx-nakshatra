#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
}

const data = {
    name: chalk.green('                Nakshatra Gupta'),
    work: chalk.white('Android and Node developer, Blockchain Enthausiast'),
    github: chalk.gray('https://github.com/') + chalk.green('nakshatra-bazukaa'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('nakshatra-gupta-0199b9181'),
    instagram: chalk.grey('https://www.instagram.com/') + chalk.magenta('nakshatra_bazukaa'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bazukaaNaksh'),
    website: chalk.gray('https://nakshatra-bazukaa.github.io/'),
    npx: chalk.red('npx') + ' ' + chalk.white('nakshatra'),
    labelWork: chalk.white.bold('      Work:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelInstagram: chalk.white.bold(' Instagram:'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelWebsite: chalk.white.bold('   Website:'),
    labelCard: chalk.white.bold('      Card:'),
    labelIntroLine1: chalk.green.bold('A techie guy with a keen sense of development,'),
    labelIntroLine2: chalk.green.bold('connect with me and have a chat.')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const websiting = `${data.labelWebsite}  ${data.website}`
const carding = `${data.labelCard}  ${data.npx}`
const introLine1 = `${data.labelIntroLine1}`
const introLine2 = `${data.labelIntroLine2}`

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  instagraming +
  newline +
  twittering +
  newline +
  websiting +
  newline +
  newline +
  carding +
  newline +
  newline +
  newline +
  introLine1 +
  newline + 
  introLine2

console.log(chalk.green(boxen(output, options)))