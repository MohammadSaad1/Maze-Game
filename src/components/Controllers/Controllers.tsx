import { Box, Grid, IconButton } from "@material-ui/core"
import {
    KeyboardArrowUpRounded,
    KeyboardArrowLeftRounded,
    KeyboardArrowRightRounded,
    KeyboardArrowDownRounded
} from "@material-ui/icons"
import { DirectionType } from "../../api/requests/PostDirectionRequest"
import GridMap from "../GridMap/GridMap"

interface ControllersProps {
    move: (direction: DirectionType) => void,
}

const Controllers = (props: ControllersProps) => {
    const handleMove = (direction: DirectionType) => () => props.move(direction)

    return (
        <Box padding={2}>
            <GridMap
                rows={3}
                columns={3}
                gridContents={[
                    {
                        row: 0,
                        column: 1,
                        content: () => (
                            <IconButton onClick={handleMove('north')}>
                                <KeyboardArrowUpRounded />
                            </IconButton>
                        )
                    },
                    {
                        row: 2,
                        column: 1,
                        content: () => (
                            <IconButton onClick={handleMove('south')}>
                                <KeyboardArrowDownRounded />
                            </IconButton>
                        )
                    },
                    {
                        row: 1,
                        column: 0,
                        content: () => (
                            <IconButton onClick={handleMove('west')}>
                                <KeyboardArrowLeftRounded />
                            </IconButton>
                        )
                    },
                    {
                        row: 1,
                        column: 2,
                        content: () => (
                            <IconButton onClick={handleMove('east')}>
                                <KeyboardArrowRightRounded />
                            </IconButton>
                        )
                    }
                ]}
            />
        </Box >
    )
}

export default Controllers