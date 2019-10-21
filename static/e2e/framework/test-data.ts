import {execSync} from "child_process";

/**
 * Test data runner.
 */
export class TestData {

    run() {
        execSync('(cd ../../../; npm run testdata)');
    }

}
