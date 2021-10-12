import { createTheme, Theme } from "@material-ui/core";

export const theme: Theme = createTheme({
    overrides: {
        MuiIconButton: {
            root: {
                background: 'red',
                color: 'white'
            }
        }
    }
})