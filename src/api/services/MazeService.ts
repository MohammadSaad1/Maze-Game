import { AxiosResponse } from "axios"
import { root } from "../config/root"
import { GameState } from "../entities/GameState"
import { Maze } from "../entities/Maze"
import { MazeDetails } from "../entities/MazeDetails"
import { axiosRequest } from "../helpers/axiosRequest"
import { Direction } from "../requests/PostDirectionRequest"
import { CreateResponse } from "../responses/CreateResponse"

const mazeRoot = `${root}/maze`

export const create = (maze: Maze): Promise<AxiosResponse<CreateResponse>> => {
    return axiosRequest(getEndpoint(), 'post', maze)
}

export const move = (mazeId: string, direction: Direction): Promise<AxiosResponse<GameState>> => {
    return axiosRequest(getEndpoint(mazeId), 'post', direction)
}

export const getMazeDetails = (mazeId: string): Promise<AxiosResponse<MazeDetails>> => {
    return axiosRequest(getEndpoint(mazeId), 'get')
}

export const printMaze = (mazeId: string): Promise<AxiosResponse<string>> => {
    return axiosRequest(getEndpoint(`${mazeId}/print`), 'get')
}

const getEndpoint = (branch?: string) => {
    if (branch) {
        return `${mazeRoot}/${branch}`
    }

    return mazeRoot
}