import fs from "fs";
import { Request, Response } from "express";
import "dotenv/config";

import { Errors } from "../../utils/Errors";
import { globalStorage } from "../../utils/GlobalStorage";

interface Result {
    id: number;
    title: string;
    author: string;
    path: string;
}

export const getAudioList = (_: Request, res: Response) => {
    if (!process.env.MUSIC_FOLDER_PATH) {
        return res
            .status(500)
            .json(Errors.defaultError({ message: `Couldn't read folder with path: ${process.env.MUSIC_FOLDER_PATH}` }));
    }

    const result: Result[] = [];

    const files = fs.readdirSync(process.env.MUSIC_FOLDER_PATH);
    files.forEach((file, index) => {
        const splittedFileName = file.split(" - ");

        result.push({
            id: index,
            title: splittedFileName[0],
            author: splittedFileName[1],
            path: `/audio/${index}`
        });
    });

    globalStorage.set("audioFilesList", result);
    return res.status(200).json(result);
};
