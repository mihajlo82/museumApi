import RightBoxStyle from './rightBox.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useRightBox from './useRightBox';

const RightBox = () => {

  const {editItem, activeObject, isEdit, isEmptyRightSide} = useRightBox();
    
  return (
    <Box className={!isEdit ? RightBoxStyle.rightBoxWrapp : RightBoxStyle.rightBoxWrappEdit }>
      {!isEmptyRightSide &&
      <>
        <Grid className={RightBoxStyle.imageWrapp}>
            <img className={RightBoxStyle.image}  src={activeObject.imageUrl} />
        </Grid>

        <Box className={RightBoxStyle.restWrapp}>
            <Grid container className={RightBoxStyle.restHeader}>
                <Box className={RightBoxStyle.restTitle} >{activeObject.name}</Box>
                
                <Box>
                  <Button variant="contained" className={RightBoxStyle.restEditBtn} onClick={editItem}> {isEdit ? 'Back' : 'Edit' }</Button>
                </Box>
            </Grid>

            <Grid container className={RightBoxStyle.restMain}>
                <Box className={RightBoxStyle.description}>
                  <p>{activeObject.description}</p>
                </Box>
            </Grid>
        </Box>
      </>
}
    </Box>
  )
}

export default RightBox