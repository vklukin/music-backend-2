import fs from "fs";
import "dotenv/config";

import { AudioListProps } from "../routes/audio/getAudioList";
import { globalStorage } from "./GlobalStorage";

export interface AudioListPaths {
    musicId: number;
    pathToFile: string;
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
        const splittedFileName = file.split(" - ");

        internalResult.push({
            musicId: index + 1,
            pathToFile: `${process.env.MUSIC_FOLDER_PATH}\\${file}`
        });

        import("music-metadata").then(async (mm) => {
            const fileMetadata = await mm.parseFile(`${process.env.MUSIC_FOLDER_PATH}\\${file}`);
            if (!fileMetadata) {
                return;
            }

            const audioDuration = Math.ceil(fileMetadata.format.duration || 0);

            externalResult.push({
                id: index,
                title: splittedFileName[0],
                author: splittedFileName[1],
                path: `/audio/${index + 1}`,
                duration: audioDuration
            });
        });
    });

    globalStorage.set("audioFilesList", externalResult);
    globalStorage.set("audioFilesDBList", internalResult);
};
