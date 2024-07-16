import fs from "fs";
import { Request, Response } from "express";

import { Errors } from "../../utils/Errors";
import { globalStorage } from "../../utils/GlobalStorage";
import { AudioListPaths } from "../../utils/setupAudioList";

export const streamAudio = (req: Request, res: Response) => {
    const { id } = req.query;

    const audioList = globalStorage.get<Array<AudioListPaths>>("audioFilesDBList");
    if (!audioList) {
        return res.status(500).json(Errors.defaultError({ message: "Audio list isn't in global storage" }));
    }

    const audio = audioList.find((i) => String(i.musicId) === id);
    if (!audio) {
        return res.status(404).json(Errors.defaultError({ message: `Couldn't found audio with id ${id}` }));
    }

    return fs.createReadStream(audio.pathToFile, {
        autoClose: true
    });
};
