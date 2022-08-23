import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function print() {
    console.clear()
    figlet('Welcoomeeee!!!', function(err, data) {
        if (err) {
            console.log('Somethin went wrong....')
            return
        }
        console.log(data)
    })
}

async function askWhatDo() {
    const ask = await inquirer.prompt({
        name: 'What_Do',
        type: 'list',
        message: 'What do you Want?',
        choices: [
            'Celsius',
            'Fahrenheit',
        ]
    })
    switch(ask.What_Do) {
        case 'Celsius':
            celsius()
            break
        case 'Fahrenheit':
            fahrenheit()
            break
        default:
            console.log('ERROOORRR')
    }
}

async function celsius() {
    console.clear()
    const value = await inquirer.prompt({
        name: 'Convert',
        type: 'number',
        message: 'Type value in Fahrenheit to convert for Celsius'
    })
    if(!isNaN(value.Convert)) {
        const result = Math.round((value.Convert - 32) * 5/9)
        console.log(`${result}ºC`)
        await returnMain()
        return
    }
    console.log(chalk.bgRed('Not an Number'))
    await sleep(2000)
    console.clear()
    return askWhatDo()
}

async function fahrenheit() {
    console.clear()
    const value = await inquirer.prompt({
        name: 'Convert',
        type: 'number',
        message: 'Type value in Celsius to convert for Fahrenheit'
    })
    if(!isNaN(value.Convert)) {
        const result = Math.round((value.Convert * 9/5 + 32))
        console.log(`${result}°F`)
        await returnMain()
        return
    }
        console.log(chalk.bgRed('Not an Number'))
        await sleep(2000)
        console.clear()
        return askWhatDo()
}

async function returnMain() {
    const returnMain = await inquirer.prompt({
        name: 'return',
        type: 'list',
        message: 'Do you want return to main menu?',
        choices: ['Yes', 'No']
    })
    if(returnMain.return == 'Yes') {
        console.clear()
        askWhatDo()
        return
    } process.exit(0)
}
print()
void await sleep(2000)
await askWhatDo()
