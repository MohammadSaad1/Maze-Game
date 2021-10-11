import { CircularProgress, Grid } from "@material-ui/core"

const CenteredSpinner = () => {
    return (
        <Grid container={true} justifyContent='center'>
            <CircularProgress size='3rem' />
        </Grid>
    )
}

export default CenteredSpinner