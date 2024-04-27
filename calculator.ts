#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const input=await inquirer.prompt([
    {
        message:(chalk.green('input First number')),
        type:'number',
        name:'firstnumber'
    },
    {
        message:(chalk.green('input Second number')),
        type:'number',
        name:'secondnumber'
    },
    {
        type:'list',
        message:(chalk.green('Select one choice')),
        name:'choice',
        choices:['sum','Subtract','Multiply','Division']
    }
])

if(input.choice==='sum'){
    console.log((chalk.bold.blue("The Sum is:")),(input.firstnumber+input.secondnumber));
}
else if(input.choice==='Subtract'){
    console.log((chalk.blue.bold("The Subtrsction  is:")),(input.firstnumber-input.secondnumber));
}
else if(input.choice==='Multiply'){
    console.log((chalk.blue.bold("The Multiplication is:")),(input.firstnumber*input.secondnumber));
}
else if(input.choice==='Division'){
    console.log((chalk.blue.bold("The Division is:")),(input.firstnumber/input.secondnumber));
}
else{
    console.log("invalid operator");
}

