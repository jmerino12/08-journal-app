import { Box } from "@mui/system"

const drawerWidth = 240;


export const JornalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}>

                {children}
            </Box>


        </Box>
    )
}
