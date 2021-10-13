import { Box, Grid, IconButton } from "@material-ui/core"
import {
    KeyboardArrowUpRounded,
    KeyboardArrowLeftRounded,
    KeyboardArrowRightRounded,
    KeyboardArrowDownRounded,
    CropSquareRounded
} from "@material-ui/icons"
import { KeyboardEvent } from "react"
import { DirectionType } from "../../api/requests/PostDirectionRequest"
import GridMap from "../GridMap/GridMap"

interface ControllersProps {
    move: (direction: DirectionType) => void,
}


const Controllers = (props: ControllersProps) => {
    const handleMove = (direction: DirectionType) => () => props.move(direction)
    const handleMoveByKey = (event: KeyboardEvent<HTMLAnchorElement>) => {
        const keyCodeActions: { [key: string]: () => void } = {
            ArrowRight: handleMove('east'),
            ArrowUp: handleMove('north'),
            ArrowLeft: handleMove('west'),
            ArrowDown: handleMove('south'),
            Space: handleMove('stay')
        }

        if (keyCodeActions[event.code]) {
            keyCodeActions[event.code]()
        }
    }

    return (
        <Box onKeyDown={handleMoveByKey} padding={4} width={150}>
            <GridMap
                rows={3}
                columns={3}
                gridContents={[
                    {
                        row: 0,
                        column: 1,
                        content: () => (
                            <Box style={{ background: 'red', borderRadius: '10px 10px 0px 0px' }}>
                                <IconButton onClick={handleMove('north')}>
                                    <KeyboardArrowUpRounded />
                                </IconButton>
                            </Box>
                        )
                    },
                    {
                        row: 2,
                        column: 1,
                        content: () => (
                            <Box style={{ background: 'red', borderRadius: '0px 0px 10px 10px' }}>
                                <IconButton onClick={handleMove('south')}>
                                    <KeyboardArrowDownRounded />
                                </IconButton>
                            </Box>
                        )
                    },
                    {
                        row: 1,
                        column: 1,
                        content: () => (
                            <Box style={{ background: 'red' }}>
                                <IconButton onClick={handleMove('stay')}>
                                    <CropSquareRounded />
                                </IconButton>
                            </Box>
                        )
                    },
                    {
                        row: 1,
                        column: 0,
                        content: () => (
                            <Box style={{ background: 'red', borderRadius: '10px 0px 0px 10px' }}>
                                <IconButton onClick={handleMove('west')}>
                                    <KeyboardArrowLeftRounded />
                                </IconButton>
                            </Box>
                        )
                    },
                    {
                        row: 1,
                        column: 2,
                        content: () => (
                            <Box style={{ background: 'red', borderRadius: '0px 10px 10px 00px' }}>
                                <IconButton onClick={handleMove('east')}>
                                    <KeyboardArrowRightRounded />
                                </IconButton>
                            </Box>
                        )
                    }
                ]}
            />
        </Box >
    )
}

export default Controllers