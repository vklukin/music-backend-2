import fs from "fs";
import path from "path";
import "dotenv/config";

interface logProps {
    [key: string]: string;
}

class Logger {
    filePath: string = "";

    constructor() {}

    public init(filePath: string | undefined): Logger {
        console.log(path.join(__dirname, "..", filePath ?? ""));
        if (!filePath) {
            console.error("File path is not defined");
            return this;
        }
        if (!this.isLoggerFileExist(filePath)) {
            console.error("File for logger is not exist");
            return this;
        }

        this.filePath = filePath ?? "";
        return this;
    }

    private isLoggerFileExist(filePath?: string) {
        if (filePath) {
            return fs.existsSync(path.join(__dirname, "..", filePath ?? ""));
        }

        return this.filePath;
    }

    public log(props: logProps): void {
        if (!this.isLoggerFileExist()) return;

        const date = new Date();
        let result = `Date: ${date.toISOString()}. `;

        for (const key in props) {
            result += `${key}: ${props[key]}. `;
        }

        fs.writeFileSync(this.filePath, result);
    }
}

export const logger = new Logger().init(process.env.LOGGER_PATH);
