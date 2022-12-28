// @ts-check
import chalk from "chalk";
import { readFile } from "fs/promises";

/**
 * @param {string} filePath
 * @returns {Promise<{version: string}>} JSON string
 */
const readJSON = async (filePath) =>
    // @ts-ignore
    JSON.parse(await readFile(new URL(filePath, import.meta.url)));

/**@typedef {{major: string, minor: string, patch: string}} Version */
/**
 * @param {string} versionString
 * @returns {Version} versionOption
 */
const getVersionNumber = (versionString) => {
    const [major, minor, patch] = String(versionString).split(".");
    return {
        major,
        minor,
        patch,
    };
};

/**
 * @param {Version} versionOption
 * @returns version string
 */
const getVersionHeader = ({ major, minor, patch }) =>
    `   version: ${major}.${minor}.${patch}   `;

/**
 * @param {string} versionString
 */
const logVersion = (versionString) => {
    console.log(chalk.bgYellowBright.black.bold(versionString));
};

(async () => {
    const packageJSON = await readJSON("../package.json");
    const versionOption = getVersionNumber(packageJSON.version);
    const versionHeader = getVersionHeader(versionOption);
    logVersion(versionHeader);
})();
