import {logger} from "@config";

async function main() {
    logger.debug("Debug message.");

}

main().catch(console.log);
