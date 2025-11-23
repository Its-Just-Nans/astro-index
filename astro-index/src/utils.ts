import { readdirSync, statSync } from "fs";
import { join } from "path";

function walkDirs(dir: string): string[] {
    let results: string[] = [];
    const list = readdirSync(dir);
    results.push(dir); // include the dir

    for (const entry of list) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
            results = results.concat(walkDirs(fullPath)); // recurse
        }
    }

    return results;
}
export { walkDirs };
