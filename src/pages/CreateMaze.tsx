import { Button, FormHelperText, Grid, TextField, Typography } from "@material-ui/core"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Difficulty, MazeRange } from "../api/entities/Maze"
import * as MazeService from "../api/services/MazeService"

interface CreateMazeProps {
    setMazeId: Dispatch<SetStateAction<string>>
    setLoading: Dispatch<SetStateAction<boolean>>
}

const CreateMaze = (props: CreateMazeProps) => {
    const [mazePlayerName, setMazePlayerName] = useState<string>('Morning Glory')
    const [mazeHeight, setMazeHeight] = useState<MazeRange>(15)
    const [mazeWidth, setMazeWidth] = useState<MazeRange>(15)
    const [difficulty, setDifficulty] = useState<Difficulty>(1)

    const [error, setError] = useState<string>('')

    const handleChange = (setFunction: (updatedValue: any) => void) => (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        // If it is a number then make it one!
        setFunction(Number.isFinite(value) ? value : Number(value))
    }

    const createMazeGame = () => {
        props.setLoading(true)
        MazeService.create({ mazePlayerName, mazeHeight, mazeWidth, difficulty })
            .then(response => props.setMazeId(response.data.mazeId))
            .catch(error => setError(error.response.data))
            .finally(() => props.setLoading(false))
    }

    return (
        <Grid container={true} item={true} direction='column' alignItems='center' justifyContent='center' spacing={2}>
            <Grid item={true}>
                <Typography variant='h4'> Maze Game! </Typography>
            </Grid>
            <Grid item={true}>
                <TextField onChange={handleChange(setMazePlayerName)} type='text' value={mazePlayerName} placeholder='Player name' />
            </Grid>
            <Grid item={true}>
                <TextField onChange={handleChange(setMazeHeight)} type='number' value={mazeHeight} placeholder='Maze height' />
            </Grid>
            <Grid item={true}>
                <TextField onChange={handleChange(setMazeWidth)} type='number' value={mazeWidth} placeholder='Maze width' />
            </Grid>
            <Grid item={true}>
                <TextField onChange={handleChange(setDifficulty)} type='number' value={difficulty} placeholder='Difficulty' />
            </Grid>

            <Typography>{error}</Typography>
            <Button onClick={createMazeGame} >Start game!</Button>
        </Grid>
    )
}

export default CreateMaze
