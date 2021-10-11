import { Difficulty } from "../entities/Maze";
import { State } from "../generics/State";
import { StateResult } from "../generics/StateResult";

export type DirectionSet = [] | ['north'] | ['west'] | ['west', 'north']

export interface GameState {
    state: State,
    "state-result": StateResult
}

export interface GetMazeStatusResponse {
    pony: number[],
    domokun: number[],
    'end-point': number[],
    size: [number, number],
    difficulty: Difficulty,
    data: DirectionSet[],
    'maze_id': string,
    'game-state': GameState
}