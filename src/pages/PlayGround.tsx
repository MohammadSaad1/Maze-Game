import { Grid } from "@material-ui/core"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { MazeDetails } from "../api/entities/MazeDetails"
import { Direction, DirectionType } from "../api/requests/PostDirectionRequest"
import * as MazeService from "../api/services/MazeService"
import Controllers from "../components/Controllers/Controllers"
import Field from "../components/GameField/Field"

interface PlayGroundProps {
    setStatus: Dispatch<SetStateAction<'won' | 'lost' | null>>
    mazeId: string,
}

const PlayGround = (props: PlayGroundProps) => {
    const [mazeStatus, setMazeStatus] = useState<MazeDetails>()
    const [mapMaze, setMapMaze] = useState<string>('')
    const [isNorthDisabled, setNorthDisabled] = useState<boolean>(false)
    const [isWestDisabled, setWestDisabled] = useState<boolean>(false)

    const fetchMazeStatus = () => MazeService.getMazeDetails(props.mazeId).then(response => setMazeStatus(response.data))
    const isDisabled = (type: DirectionType): boolean => {
        const current = mazeStatus?.domokun[0] ?? 0
        const size = mazeStatus?.size[0] ?? 15
        const data = mazeStatus?.data ?? []

        const wallsFromCurrent = data[current] ?? []
        const wallsFromNeighbour = data[current + 1] ?? []
        const wallsFromEdge = data[current + size] ?? []

        const walls = [...wallsFromCurrent, ...wallsFromNeighbour, ...wallsFromEdge]

        console.log(walls.some(wall => wall === type), type, walls)
        return !walls.some(wall => wall === type)
    }

    useEffect(() => {
        fetchMazeStatus()
    }, [])

    useEffect(() => {
        console.log(mazeStatus?.["game-state"]["state-result"])
        setNorthDisabled(isDisabled('north'))
        setWestDisabled(isDisabled('west'))

        MazeService.printMaze(props.mazeId).then(response => setMapMaze(response.data))
    }, [mazeStatus])

    const directionMove = (direction: Direction) => MazeService.move(props.mazeId, direction).then(() => fetchMazeStatus())

    const goNorth = () => directionMove({ direction: 'north' })
    const goWest = () => directionMove({ direction: 'west' })

    return (
        <Grid container={true} direction='column' alignContent='center'>
            <Field maze={mapMaze} />
            <Controllers
                horizontalMove={goWest}
                verticalMove={goNorth}
                isHorizontalDisabled={isWestDisabled}
                isVertcalDisabled={isNorthDisabled} />
        </Grid>
    )
}

export default PlayGround