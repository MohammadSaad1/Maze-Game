import { Grid, GridSize, GridSpacing } from '@material-ui/core'

interface GridContent {
    content: () => JSX.Element
    row: number
    column: number
}

interface GridMapProps {
    rows: number
    columns: number
    gridContents: GridContent[]
}

const GridMap = (props: GridMapProps) => {
    const { gridContents } = props

    const rowSize = Math.min(12, Math.ceil(12 / props.rows)) as GridSize

    const loadContentOnCorrectGrid = (currentColumn: number, currentRow: number) => {
        const gridContent = gridContents.find(content => (
            currentColumn === content.column && currentRow === content.row
        ))

        return gridContent?.content()
    }

    return (
        <Grid id='grid-map' container={true} direction='column'>
            {Array(props.columns).fill(null).map((__, rowIndex) => (
                <Grid key={`grid-row-${rowIndex}`} item={true} container={true} direction='row'>
                    {Array(props.rows).fill(null).map((__, columnIndex) => (
                        <Grid key={`grid-column-${columnIndex}`} xs={rowSize} item={true} container={true} direction='column'>
                            {loadContentOnCorrectGrid(columnIndex, rowIndex)}
                        </Grid>
                    ))}
                </Grid>
            ))}

        </Grid>
    )
}

export default GridMap