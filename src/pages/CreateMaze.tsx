import { Button, Grid, TextField, Typography } from "@material-ui/core"

//MazeService.create({ mazePlayerName: 'Morning Glory', mazeHeight: 20, mazeWidth: 20, difficulty: 6 }).then(console.log).catch(console.log)


const CreateMaze = () => {
    return (
        <Grid container={true} item={true} direction='column' alignItems='center' justifyContent='center'>
            <Typography variant='h4'> Maze Game! </Typography>
            <TextField placeholder='Player name' />
            <TextField placeholder='Maze height' />
            <TextField placeholder='Maze width' />
            <TextField placeholder='Difficulty' />

            <Button>Start game!</Button>
        </Grid>
    )
}

export default CreateMaze