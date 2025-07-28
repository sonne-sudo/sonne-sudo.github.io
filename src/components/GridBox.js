import { Box, Grid } from '@mui/material';
import AvatarBox from './AvatarBox';
import './css/Grid.css';


const GridBox = () => {
    return (
        <Box className="GridBox" sx={{ flexGrow: 1, border: '1px solid red' }}>
            <Grid container className="left-container" spacing={2} sx={{ minHeight: '100vh' }}>
                <Grid item direction="column" xs={12} sx={{ border: '1px solid #ccc', height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    {/* Content that should span the whole page */}
                    <AvatarBox />
                </Grid>

                <Grid container className="right-container" direction="column" spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sx={{ border: '1px solid #ccc', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Content */}
                        <h1>About Me</h1>
                        
                    </Grid>
                    <Grid item xs={12} sx={{ border: '1px solid #ccc', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Content */}
                        <h1>Experience</h1>

                    </Grid>
                </Grid>
            </Grid>
        </Box>  
    );
};

export default GridBox;