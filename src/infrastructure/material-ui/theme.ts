import { createTheme, Theme } from "@material-ui/core";

export const theme: Theme = createTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: 'darkgray'
            }
        },
        MuiIconButton: {
            root: {
                background: 'red',
                color: 'white'
            }
        }
    }
})