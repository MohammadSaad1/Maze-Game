import { Box, Button, Typography } from "@material-ui/core";
import { State } from "../api/generics/State";

interface ResultProps {
    state: State
}

const Result = (props: ResultProps) => {
    const handleClick = () => window.location.reload()

    return (
        <Box>
            <Typography variant='h4'>{`The game is ${props.state}!`}</Typography>
            <Button onClick={handleClick}>Restart game</Button>
        </Box>
    )
}

export default Result