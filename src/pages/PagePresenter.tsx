import { Box, Grid, Paper } from "@material-ui/core"
import { useEffect, useState } from "react"
import { State } from "../api/generics/State"
import CenteredSpinner from "../components/CenteredSpinner/CenteredSpinner"
import { Stages } from "../infrastructure/enums/Stages"
import CreateMaze from "./CreateMaze"
import PlayGround from "./PlayGround"
import Result from "./Result"


const PagePresenter = () => {
    const [stage, setStage] = useState<Stages>(Stages.CreateMaze)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [mazeId, setMazeId] = useState<string>('')
    const [state, setState] = useState<State>('active')

    useEffect(() => {
        if (mazeId) {
            setStage(Stages.PlayGround)
        }
    }, [mazeId])

    useEffect(() => {
        if (state === 'over' || state === 'won') {
            setStage(Stages.Result)
        }
    }, [state])

    const stages = {
        [Stages.CreateMaze]: () => <CreateMaze setLoading={setLoading} setMazeId={setMazeId} />,
        [Stages.PlayGround]: () => <PlayGround setState={setState} mazeId={mazeId} />,
        [Stages.Result]: () => <Result state={state} />
    }

    return (
        <Paper elevation={0} variant='outlined'>
            <Grid container={true} justifyContent='center' alignContent='center' alignItems='center'>
                <Grid item={true}>
                    <Box padding={2}>
                        {isLoading ? <CenteredSpinner /> : stages[stage]()}
                    </Box>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default PagePresenter