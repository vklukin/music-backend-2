import fs from "fs";
import getMP3Duration from "get-mp3-duration";

import { TIME } from "../types/time";

export function getAudioDuration(path: string): number {
    const file = fs.readFileSync(path);
    const msDuration = getMP3Duration(file);
    const duration = msDuration / TIME.SECOND;

    return duration;
}
