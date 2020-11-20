'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:govind302034@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Govind Maheshwari"),
    handle: chalk.white("@govind1530"),
    work: `${chalk.white("Software Developer at")} ${chalk
        .hex("#2b82b2")
        .bold("Some IT Company")}`,
    github: chalk.gray("https://github.com/") + chalk.green("govind1530"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("govind-bagla-75ab32b3"),
    npx: chalk.red("npx") + " " + chalk.white("govind1530"),

    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am a software developer I am here to help to develop software that is going to meet individual client needs,"
        )}`,
        `${chalk.italic("I am improving my skills day by day to a more clean and optimized code.")}`,
        `${chalk.italic(
            " I believe in constant learning and exploring new things. a bit about me,  I like to travel and foodie"
        )}`,
        `${chalk.italic(
            " Javascript, React Native"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
