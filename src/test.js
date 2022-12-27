import chalk from "chalk";

/**
 * @param {string} string
 * @returns capitalized case string
 */
const toCapitalCase = (string) =>
    `${string[0].toUpperCase()}${string.slice(1, string.length)}`;

/**
 * @param {string[]} tests
 * @param {"red" | "yellow" | "green"} color
 */
const testRunner = (tests, color = "red") => {
    const testChalk = chalk.white.bold;
    const testLogger = (message, chalkOption) =>
        console.log(testChalk[chalkOption](`   ${message}   `));

    tests.forEach((test, order) => {
        testLogger(`test${order + 1}: ${test}`, `bg${toCapitalCase(color)}`);
    });
};

const tests = ["good", "too good", "hello test"];

testRunner(tests, "yellow");
