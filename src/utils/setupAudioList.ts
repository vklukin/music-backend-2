import fs from "fs";
import "dotenv/config";

import { globalStorage } from "./GlobalStorage";

export interface AudioListPaths {
    musicId: number;
    pathToFile: string;
}

interface AudioListProps {
    id: number;
    title: string;
    author: string;
    path: string;
}

export const setupAudioList = () => {
    if (!process.env.MUSIC_FOLDER_PATH) {
        globalStorage.set("audioFilesList", []);
        return;
    }

    const externalResult: Array<Omit<AudioListProps, "duration">> = [];
    const internalResult: Array<AudioListPaths> = [];

    const files = fs.readdirSync(process.env.MUSIC_FOLDER_PATH as string);
    files.forEach((file, index) => {
        const splittedFileName = file.split(" - ");

        internalResult.push({
            musicId: index,
            pathToFile: `${process.env.MUSIC_FOLDER_PATH}\\${file}`
        });

        externalResult.push({
            id: index,
            title: splittedFileName[0],
            author: splittedFileName[1],
            path: `/audio/${index}`
        });
    });

    globalStorage.set("audioFilesList", externalResult);
    globalStorage.set("audioFilesDBList", internalResult);
};
