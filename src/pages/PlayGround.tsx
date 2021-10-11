import { Grid } from "@material-ui/core"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { printMaze } from "../api/services/MazeService"
import Field from "../components/GameField/Field"

interface PlayGroundProps {
    setStatus: Dispatch<SetStateAction<'won' | 'lost' | null>>
    mazeId: string,
}

const PlayGround = (props: PlayGroundProps) => {
    const [mazeStatus, setMazeStatus] = useState<string>('string')
    const [mapMaze, setMapMaze] = useState<string>('')

    useEffect(() => {
        printMaze(props.mazeId).then(response => setMapMaze(response.data))
    }, [mazeStatus])

    const fetchMapMaze = () => { }
    const goNorth = () => { }
    const goWest = () => { }

    return (
        <Grid>
            <Field maze={mapMaze} />
        </Grid>
    )
}

export default PlayGround