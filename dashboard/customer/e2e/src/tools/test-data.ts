import {execSync} from "child_process";

/**
 * Test data runner.
 */
export class TestData {

    run() {
        execSync('npm run testdata');
    }

}
