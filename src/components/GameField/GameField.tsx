import { Box } from "@material-ui/core"
import './GameField.scss'

interface GameFieldProps {
    maze: string,
}

const GameField = (props: GameFieldProps) => {
    return (
            <Box className='game-field'>
                <pre>
                    {props.maze}
                </pre>
            </Box>
    )
}

export default GameField