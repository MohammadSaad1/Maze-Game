
export type MazeRange = 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25
export type Difficulty = 0 |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface Maze {
    mazeWidth: MazeRange,
    mazeHeight: MazeRange,
    mazePlayerName: string,
    difficulty: Difficulty
}