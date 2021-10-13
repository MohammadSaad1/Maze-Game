import { Difficulty } from "./Maze";
import { GameState } from "./GameState";

export type DirectionSet = [] | ['north'] | ['west'] | ['west', 'north']

export interface MazeDetails {
    pony: number[],
    domokun: number[],
    endPoint: number[],
    size: [number, number],
    difficulty: Difficulty,
    data: DirectionSet[],
    mazeId: string,
    gameState: GameState
}