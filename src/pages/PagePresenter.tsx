import { Box, Grid, Paper, TextField } from "@material-ui/core"
import { useState } from "react"
import { Stages } from "../infrastructure/enums/Stages"
import CreateMaze from "./CreateMaze"
import PlayGround from "./PlayGround"

const stages = {
    [Stages.CreateMaze]: () => <CreateMaze />,
    [Stages.PlayGround]: () => <PlayGround />,
    [Stages.Result]: () => <Grid />
}

const PagePresenter = () => {
    const [stage, setStage] = useState<Stages>(Stages.CreateMaze)

    return (
        <Paper>
            <Box width='50vw' height='90vh'>
                <Grid container={true} justifyContent='center' alignContent='center' alignItems='center'>
                {stages[stage]()}
                </Grid>
            </Box>
        </Paper>

    )
}

export default PagePresenter