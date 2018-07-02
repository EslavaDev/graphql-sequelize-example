'use strict'

const db = require('../config/reset')
const inquirer = require('inquirer')
const chalk = require('chalk')
const config = require('./config-db')({secure: true})

const prompt = inquirer.createPromptModule()

async function setup () {
  let flag = false
  process.argv.map(m => {
    if (m === '--yes' || m === '--y') {
      flag = true
    } else {
      flag = false
    }
  })
  if (!flag) {
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }
    ])

    if (!answer.setup) {
      return console.log('Nothing happened :)')
    }
  }
  //console.log(db.Force())
  await db(config).catch(handleFatalError)
  console.log('Success')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`erro: ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
