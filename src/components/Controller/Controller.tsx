import { Grid, IconButton } from "@material-ui/core"

interface ControllerProps {
    horizontalMove: () => void,
    verticalMove: () => void,
}

const Controller = (props: ControllerProps) => {
    return (
        <Grid container={true} direction='row'>
            <Grid item={true}>
            <IconButton onClick={props.horizontalMove}/>
            </Grid>
            <Grid item={true}>
            <IconButton onClick={props.verticalMove}/>
            </Grid>
        </Grid>
    )
}

export default Controller