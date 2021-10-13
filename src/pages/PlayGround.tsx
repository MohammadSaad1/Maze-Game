import { Box, Grid, Typography } from "@material-ui/core"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DirectionSet, MazeDetails } from "../api/entities/MazeDetails"
import { State } from "../api/generics/State"
import { Direction, DirectionType } from "../api/requests/PostDirectionRequest"
import * as MazeService from "../api/services/MazeService"
import Controllers from "../components/Controllers/Controllers"
import Field from "../components/GameField/GameField"
import { DisabledDirections } from "../infrastructure/interfaces/DisabledDirections"

interface PlayGroundProps {
    setState: Dispatch<SetStateAction<State>>
    mazeId: string,
}

const PlayGround = (props: PlayGroundProps) => {
    const [mazeDetails, setMazeDetails] = useState<MazeDetails>()
    const [mapMaze, setMapMaze] = useState<string>('')
    const [disabledDirections, setDisabledDirections] = useState<DisabledDirections>({
        south: false,
        east: false,
        west: false,
        north: false
    })

    const { mazeId, setState } = props

    const fetchMazeStatus = () => MazeService.getMazeDetails(mazeId).then(response => setMazeDetails(response.data))
    const getDisabledDirections = (): DisabledDirections => {
        const current = mazeDetails?.pony[0] ?? 0
        const size = mazeDetails?.size[0] ?? 15
        const data = mazeDetails?.data ?? []

        const directions = {
            north: (data[current] as string[]).includes('north'),
            west: (data[current] as string[]).includes('west'),
            east: (data[current + 1] as string[]).includes('west'),
            south: (data[current + size] as string[]).includes('north')
        }

        return directions
    }

    useEffect(() => {
        fetchMazeStatus()
    }, [])

    useEffect(() => {
        setState(mazeDetails?.gameState.state ?? 'active')
        setDisabledDirections(getDisabledDirections())

        MazeService.printMaze(mazeId).then(response => setMapMaze(response.data))
    }, [mazeDetails])

    const directionMove = (direction: Direction) => MazeService.move(mazeId, direction).then(() => fetchMazeStatus())

    const move = (direction: DirectionType) => {
        if (direction === 'stay' || !disabledDirections[direction]) {
            directionMove({ direction })
            console.log(`Moved ${direction}`)
            return;
        }

        console.log('Cant move!')
    }

    return (
        <Box maxHeight='100vh'>
            <Grid container={true} direction='column' alignItems='center'>
                <Box mb={2}>
                    <Typography variant='h6'>MazeGame</Typography>
                </Box>
                <Grid item={true}>
                    <Field maze={mapMaze} />
                </Grid>
                <Grid item={true} xs={12}>
                    <Controllers move={move} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default PlayGround