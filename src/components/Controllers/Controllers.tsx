import { Grid, IconButton } from "@material-ui/core"
import { KeyboardArrowUpRounded, KeyboardArrowLeftRounded } from "@material-ui/icons"

interface ControllersProps {
    horizontalMove: () => void,
    verticalMove: () => void,
    isHorizontalDisabled: boolean,
    isVertcalDisabled: boolean,
}

const Controllers = (props: ControllersProps) => {
    return (
        <Grid container={true} direction='row' justifyContent='center'>
            <Grid item={true}>
                <IconButton disabled={props.isHorizontalDisabled} onClick={props.horizontalMove}>
                    <KeyboardArrowLeftRounded />
                </IconButton>
            </Grid>
            <Grid item={true}>
                <IconButton disabled={props.isVertcalDisabled} onClick={props.verticalMove}>
                    <KeyboardArrowUpRounded />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Controllers