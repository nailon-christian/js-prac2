const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForMarks() {
    rl.question("Enter your marks: ", (marks) => {
        marks = parseInt(marks);

        if (marks >= 90) {
            console.log("Grade: Excellent");
        } else if (marks >= 80) {
            console.log("Grade: Very Good");
        } else if (marks >= 70) {
            console.log("Grade: Good");
        } else {
            console.log("Grade: Needs Improvement");
        }

        askForMarks(); 
    });
}

askForMarks();
