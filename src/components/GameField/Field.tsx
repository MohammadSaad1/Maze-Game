import { Box, Grid, Paper } from "@material-ui/core"

interface FieldProps {
    maze: string,
}

const Field = (props: FieldProps) => {
    return (
        <Paper style={{ background: 'black' }}>
            <Box padding={2} margin={2} color='green' fontSize='40%'>
                <pre>
                    {props.maze}
                </pre>
            </Box>
        </Paper>
    )
}

export default Field