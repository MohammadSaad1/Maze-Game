import { Grid } from "@material-ui/core"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { MazeDetails } from "../api/entities/MazeDetails"
import { Direction, DirectionType } from "../api/requests/PostDirectionRequest"
import * as MazeService from "../api/services/MazeService"
import Controllers from "../components/Controllers/Controllers"
import Field from "../components/GameField/Field"
import { DisabledDirections } from "../infrastructure/interfaces/DisabledDirection"

interface PlayGroundProps {
    setStatus: Dispatch<SetStateAction<'won' | 'lost' | null>>
    mazeId: string,
}

const PlayGround = (props: PlayGroundProps) => {
    const [mazeStatus, setMazeStatus] = useState<MazeDetails>()
    const [mapMaze, setMapMaze] = useState<string>('')
    const [disabledDirections, setDisabledDirections] = useState<DisabledDirections>({ south: false, east: false, west: false, north: false })

    const fetchMazeStatus = () => MazeService.getMazeDetails(props.mazeId).then(response => setMazeStatus(response.data))
    const isDisabled = (type: DirectionType): boolean => {
        const current = mazeStatus?.domokun[0] ?? 0
        const size = mazeStatus?.size[0] ?? 15
        const data = mazeStatus?.data ?? []

        const wallsFromCurrent = data[current] ?? []
        const wallsFromNeighbour = data[current + 1] ?? []
        // const wallsFromEdge = data[current + size] ?? []

        const walls = [...wallsFromCurrent, ...wallsFromNeighbour,]

        return walls.length === 2 && walls.every(wall => wall === type)
    }

    useEffect(() => {
        fetchMazeStatus()
    }, [])

    useEffect(() => {
        setDisabledDirections({
            north: isDisabled('north'),
            east: isDisabled('east'),
            west: isDisabled('west'),
            south: isDisabled('south')
        })

        MazeService.printMaze(props.mazeId).then(response => setMapMaze(response.data))
    }, [mazeStatus])

    const directionMove = (direction: Direction) => MazeService.move(props.mazeId, direction).then(() => fetchMazeStatus())

    const move = (direction: DirectionType) => {
        if (!disabledDirections[direction]) {
            directionMove({ direction })
            console.log(`Moved ${direction}`)
            return;
        }

        console.log('Cant move!')
    }

    return (
        <Grid container={true} direction='column' alignContent='center'>
            <Field maze={mapMaze} />
            <Controllers move={move} />
        </Grid>
    )
}

export default PlayGround