import { useContext} from 'react';
import LeftBoxStyle from './leftBox.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RadioButtons from './radioBtns/RadioButtons';
import TreeListData from './tree/TreeListData';
import { MyMuseumContext } from '../../context/MuseumContext';
import EditLayout from './editLayout/EditLayout';

const LeftBox = () => {
  const {myIsEdit, myRightSideEmpty, myEditAjaxErr, myEditErrMsg, myColorMsg} = useContext(MyMuseumContext);

  const [isEdit, setIsEdit] = myIsEdit;
  const [editAjaxErr, setEditAjaxErr] = myEditAjaxErr;
  const [editErrMsg, setEditErrMsg] = myEditErrMsg;
  const [colorMsg, setColorMsg] = myColorMsg;

  return (
    <Grid className={!isEdit ? LeftBoxStyle.leftBoxWrapp : LeftBoxStyle.leftBoxWrappEdit}>

     {isEdit ?
        <Box className={LeftBoxStyle.editLayoutWrapp }>
            <EditLayout />
        </Box> :
        <>
          {editAjaxErr && <Box style={{color: colorMsg}}>{editErrMsg}</Box>}
          <RadioButtons/>
          <TreeListData />
        </>
  }
    </Grid>
  )
}

export default LeftBox