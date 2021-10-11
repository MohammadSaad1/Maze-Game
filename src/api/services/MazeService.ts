import axios, { AxiosResponse, Method } from "axios"
import { keysToKebabCase } from "../../infrastructure/utility/keysToKebabCase"
import { Maze } from "../entities/Maze"
import { Direction } from "../requests/PostDirectionRequest"

const root = 'https://ponychallenge.trustpilot.com/pony-challenge/maze'
const axiosRequest = (url: string, method: Method, data?: any) => (
    axios({ url, method, data: keysToKebabCase(data) })
)

export const create = (maze: Maze): Promise<AxiosResponse<{'maze_id': string}>> => {
    return axiosRequest(getEndpoint(), 'post', maze)
}

export const findLocation = (mazeId: string)  => {
    return axiosRequest(getEndpoint(mazeId), 'get')
}

export const postDirection = (mazeId: string, direction: Direction): Promise<AxiosResponse<Maze>> => {
    return axiosRequest(getEndpoint(mazeId), 'post', direction)
}

export const printMaze = (mazeId: string): Promise<AxiosResponse<Maze>> => {
    return axiosRequest(getEndpoint(`${mazeId}/print`), 'get')
}

const getEndpoint = (branch?: string) => {
    if (branch) {
        return `${root}/${branch}`
    }

    return root
}