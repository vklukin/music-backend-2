import fs from "fs";
import "dotenv/config";

import { globalStorage } from "./GlobalStorage";
import { getAudioDuration } from "./getAudioDuration";

export interface AudioListPaths {
    musicId: number;
    pathToFile: string;
}

interface AudioListProps {
    id: number;
    title: string;
    author: string;
    duration: number;
}

export const setupAudioList = () => {
    if (!process.env.MUSIC_FOLDER_PATH) {
        globalStorage.set("audioFilesList", []);
        return;
    }

    const externalResult: Array<AudioListProps> = [];
    const internalResult: Array<AudioListPaths> = [];

    const files = fs.readdirSync(process.env.MUSIC_FOLDER_PATH as string);
    files.forEach((file, index) => {
        const splittedFileName = file.replace(/\.mp.+/, "").split(" - ");
        const fullFilePath = `${process.env.MUSIC_FOLDER_PATH}\\${file}`;

        internalResult.push({
            musicId: index,
            pathToFile: fullFilePath
        });

        externalResult.push({
            id: index,
            title: splittedFileName[0],
            author: splittedFileName[1],
            duration: getAudioDuration(fullFilePath)
        });
    });

    globalStorage.set("audioFilesList", externalResult);
    globalStorage.set("audioFilesDBList", internalResult);
};
