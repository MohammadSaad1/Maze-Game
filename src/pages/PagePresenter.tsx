import { Box, Grid, Paper } from "@material-ui/core"
import { useEffect, useState } from "react"
import CenteredSpinner from "../components/CenteredSpinner/CenteredSpinner"
import { Stages } from "../infrastructure/enums/Stages"
import CreateMaze from "./CreateMaze"
import PlayGround from "./PlayGround"

const PagePresenter = () => {
    const [stage, setStage] = useState<Stages>(Stages.CreateMaze)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [mazeId, setMazeId] = useState<string>('')
    const [status, setStatus] = useState<'won' | 'lost' | null>(null)

    useEffect(() => {
        if (mazeId) {
            setStage(Stages.PlayGround)
        }
    }, [mazeId])

    const stages = {
        [Stages.CreateMaze]: () => <CreateMaze setLoading={setLoading} setId={setMazeId} />,
        [Stages.PlayGround]: () => <PlayGround setStatus={setStatus} mazeId={mazeId} />,
        [Stages.Result]: () => <Grid />
    }

    return (
        <Paper elevation={3} style={{background: 'darkgray'}}>
            <Box width='40vw' height='80vh' maxWidth={600} maxHeight={800} padding={5}>
                <Grid container={true} justifyContent='center' alignContent='center' alignItems='center'>
                    {isLoading ? <CenteredSpinner /> : stages[stage]()}
                </Grid>
            </Box>
        </Paper>

    )
}

export default PagePresenter