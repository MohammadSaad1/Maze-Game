import { Grid } from "@material-ui/core"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { MazeDetails } from "../api/entities/MazeDetails"
import { State } from "../api/generics/State"
import { Direction, DirectionType } from "../api/requests/PostDirectionRequest"
import * as MazeService from "../api/services/MazeService"
import Controllers from "../components/Controllers/Controllers"
import Field from "../components/GameField/Field"
import { DisabledDirections } from "../infrastructure/interfaces/DisabledDirection"

interface PlayGroundProps {
    setState: Dispatch<SetStateAction<State>>
    mazeId: string,
}

const PlayGround = (props: PlayGroundProps) => {
    const [mazeDetails, setMazeDetails] = useState<MazeDetails>()
    const [mapMaze, setMapMaze] = useState<string>('')
    const [disabledDirections, setDisabledDirections] = useState<DisabledDirections>({ south: false, east: false, west: false, north: false })

    const { mazeId, setState } = props

    const fetchMazeStatus = () => MazeService.getMazeDetails(mazeId).then(response => setMazeDetails(response.data))
    const isDisabled = (type: DirectionType): boolean => {
        const current = mazeDetails?.domokun[0] ?? 0
        const size = mazeDetails?.size[0] ?? 15
        const data = mazeDetails?.data ?? []

        const wallsFromCurrent = data[current] ?? []
        const wallsFromNeighbour = data[current + 1] ?? []
        const wallsFromEdge = data[current + size] ?? []

        const walls = [...wallsFromCurrent, ...wallsFromNeighbour, ...wallsFromEdge]

        // return walls.length === 2 && walls.every(wall => wall === type)
        return false
    }

    useEffect(() => {
        fetchMazeStatus()
    }, [])

    useEffect(() => {
        setState(mazeDetails?.gameState.state ?? 'active')

        setDisabledDirections({
            north: isDisabled('north'),
            east: isDisabled('east'),
            west: isDisabled('west'),
            south: isDisabled('south')
        })

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
        <Grid container={true} direction='column' alignContent='center'>
            <Field maze={mapMaze} />
            <Controllers move={move} />
        </Grid>
    )
}

export default PlayGround