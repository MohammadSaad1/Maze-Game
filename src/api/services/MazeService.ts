import { AxiosResponse } from "axios"
import { root } from "../config/root"
import { Maze } from "../entities/Maze"
import { axiosRequest } from "../helpers/axiosRequest"
import { Direction } from "../requests/PostDirectionRequest"
import { CreateResponse } from "../responses/CreateResponse"
import { GetMazeStatusResponse } from "../responses/GetMazeStatusResponse"
import { MovePonyResponse } from "../responses/MovePonyResponse"

const mazeRoot = `${root}/maze`

export const create = (maze: Maze): Promise<AxiosResponse<CreateResponse>> => {
    return axiosRequest(getEndpoint(), 'post', maze)
}

export const getMazeStatus = (mazeId: string): Promise<AxiosResponse<GetMazeStatusResponse>> => {
    return axiosRequest(getEndpoint(mazeId), 'get')
}

export const movePony = (mazeId: string, direction: Direction): Promise<AxiosResponse<MovePonyResponse>> => {
    return axiosRequest(getEndpoint(mazeId), 'post', direction)
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