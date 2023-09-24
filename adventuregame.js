import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon("Welcome to Typescript Adventure Game Made by Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let getRandomNumber = (minimum, maximum) => {
    let temp = 0;
    temp = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    return temp;
};
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrese() {
        let fueel = this.fuel - 25;
        this.fuel = fueel;
    }
    fuelincrese() {
        this.fuel = 100;
    }
}
class opposite {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrese() {
        let fueel = this.fuel - 25;
        this.fuel = fueel;
    }
}
let questions = await inquirer.prompt([
    {
        message: "Kindly enter your Name:",
        type: "input",
        name: "username"
    },
    {
        message: "Kindly select your Oponent:",
        type: "list",
        choices: ["Skeleton", "Zombie", "Snake"],
        name: "userchoice"
    }
]);
let p1 = new player(questions.username);
let o1 = new player(questions.userchoice);
console.log(chalk.bold.red(`${questions.username} VS ${questions.userchoice}`));
while (true) {
    if (questions.userchoice == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                message: "select your choice which you want",
                type: "list",
                choices: ["Attack", "Drinkfuel", "Run for your life"],
                name: "opt"
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fueldecrese();
                console.log(chalk.bold.red(`${p1.name} now your fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} now your fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(console.log(chalk.bold.red("You loose try next time !")));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(chalk.bold.red(`${o1.name} now your fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} now your fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(console.log(chalk.bold.green("HURRAH you Won !!")));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drinkfuel") {
            p1.fuelincrese();
            console.log(chalk.bold.italic.green(`${p1.name}  you drink health portion now your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(console.log(chalk.bold.red("You loose try next time !")));
            process.exit();
        }
    }
    if (questions.userchoice == "Zombie") {
        let ask = await inquirer.prompt([
            {
                message: "select your choice which you want",
                type: "list",
                choices: ["Attack", "Drinkfuel", "Run for your life"],
                name: "opt"
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fueldecrese();
                console.log(chalk.bold.red(`${p1.name} now your fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} now your fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(console.log(chalk.bold.red("You loose try next time !")));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(chalk.bold.red(`${o1.name} now your fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} now your fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(console.log(chalk.bold.green("HURRAH you Won !!")));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drinkfuel") {
            p1.fuelincrese();
            console.log(chalk.bold.italic.green(`${p1.name}  you drink health portion now your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(console.log(chalk.bold.red("You loose try next time !")));
            process.exit();
        }
    }
    if (questions.userchoice == "Snake") {
        let ask = await inquirer.prompt([
            {
                message: "select your choice which you want",
                type: "list",
                choices: ["Attack", "Drinkfuel", "Run for your life"],
                name: "opt"
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fueldecrese();
                console.log(chalk.bold.red(`${p1.name} now your fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} now your fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(console.log(chalk.bold.red("You loose try next time !")));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(chalk.bold.red(`${o1.name} now your fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} now your fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(console.log(chalk.bold.green("HURRAH you Won !!")));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drinkfuel") {
            p1.fuelincrese();
            console.log(chalk.bold.italic.green(`${p1.name}  you drink health portion now your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(console.log(chalk.bold.red("You loose try next time !")));
            process.exit();
        }
    }
}
