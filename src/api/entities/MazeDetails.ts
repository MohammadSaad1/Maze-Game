import { Difficulty } from "./Maze";
import { GameState } from "./GameState";

export type DirectionSet = [] | ['north'] | ['west'] | ['west', 'north']

export interface MazeDetails {
    pony: number[],
    domokun: number[],
    'end-point': number[],
    size: [number, number],
    difficulty: Difficulty,
    data: DirectionSet[],
    'maze_id': string,
    'game-state': GameState
}