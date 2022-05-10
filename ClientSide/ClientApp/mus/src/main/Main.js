import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LeftBox from './leftBox/LeftBox';
import MainStyle from './main.module.css';
import RightBox from './rightBox/RightBox';

const Main = () => {
  return (
    <Grid className={MainStyle.mainWrapper}>
        <Box className={MainStyle.mainWrapperInner}>
                <Grid className={MainStyle.boxHeader}></Grid>

                <Grid className={MainStyle.boxMain}>
                    <LeftBox />
                    <RightBox />
                </Grid>
        </Box>
    </Grid>
  )
}
export default Main