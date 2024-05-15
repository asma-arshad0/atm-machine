import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.magenta("\n-*-*-*-Wellcome to ATM Machine-*-*-*-\n"));
// set the pin
// set the balance
let myBalance = 100000;
let myPin = 1234;
// Enter the pin number
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your Pin Number"
});
// condition apply either is correct or not
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct!");
    let operationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Please setect a transaction.",
        choices: ["Balance Inquiry", "Fast Cash", "Cash Withdrawal",]
    });
    // one by one  runnig operations 
    // Fast Cash
    if (operationAns.operation === "Fast Cash") {
        let amountFast = await inquirer.prompt({
            name: "amount",
            type: "list",
            message: "Select you Amount",
            choices: ["1000", "2000", "5000", "10000"]
        });
        // Fast cash along with the condition of insufficient balance 9of less than my balance
        if (amountFast > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= amountFast.amount;
            console.log(`${amountFast.amount} Withdrawal Sucessfully!`);
            console.log(`Your remaining amount is $ ${myBalance}`);
        }
    }
    // Cash Withdrawal
    else if (operationAns.operation === "Cash Withdrawal") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter your amount to withdrawal"
        });
        // Fast Cash along with the condition of less the my balance
        if (amountAns.amount > myBalance) {
            console.log("Insfficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdrawal Sucessfully!`);
            console.log(`Your remaining balance is $ ${myBalance}`);
        }
    }
    // Balance Inquiry 
    else if (operationAns.operation === "Balance Inquiry") {
        console.log(`Your Balance is $ ${myBalance}`);
    }
}
// else contition when incorrect pin  
else {
    console.log("Sorry! Your enter pin is incorrect.");
}
