import { Request, Response } from "express";

import { globalStorage } from "../../utils/GlobalStorage";

export interface AudioListProps {
    id: number;
    title: string;
    author: string;
    path: string;
    duration: number;
}

export const getAudioList = (_: Request, res: Response) => {
    const result = globalStorage.get("audioFilesList") || [];

    return res.status(200).json(result);
};
