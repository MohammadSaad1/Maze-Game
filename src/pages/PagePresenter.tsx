import { Box, Grid, Paper, TextField } from "@material-ui/core"
import { useEffect, useState } from "react"
import CenteredSpinner from "../components/CenteredSpinner/CenteredSpinner"
import { Stages } from "../infrastructure/enums/Stages"
import CreateMaze from "./CreateMaze"
import PlayGround from "./PlayGround"

const PagePresenter = () => {
    const [stage, setStage] = useState<Stages>(Stages.CreateMaze)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [mazeId, setMazeId] = useState<string>('')

    useEffect(() => {
        if (mazeId) {
            setStage(Stages.PlayGround)
        }
    }, [mazeId])

    const stages = {
        [Stages.CreateMaze]: () => <CreateMaze setLoading={setLoading} setId={setMazeId} />,
        [Stages.PlayGround]: () => <PlayGround />,
        [Stages.Result]: () => <Grid />
    }

    return (
        <Paper>
            <Box width='50vw' height='90vh'>
                <Grid container={true} justifyContent='center' alignContent='center' alignItems='center'>
                    {isLoading ? <CenteredSpinner /> : stages[stage]()}
                </Grid>
            </Box>
        </Paper>

    )
}

export default PagePresenter