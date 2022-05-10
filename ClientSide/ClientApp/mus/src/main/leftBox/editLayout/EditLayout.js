import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import EditLayStyle from './editLayout.module.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useEditLay from './useEditLay';

const EditLayout = () => {

 const {editName, setEditName, editImageUrl, setEditImageUrl, editDescription, setEditDescription, editAjaxErr, editErrMsg, colorMsg, editSave, editPreview} = useEditLay();

  return (
    <Grid className={EditLayStyle.editLayWrapp}>
        <Box className={EditLayStyle.editLayInner}>
           { editAjaxErr && <Box style={{color: colorMsg}}>{editErrMsg}</Box> }
            <FormControl sx={{mt:2}} variant="standard"  className={EditLayStyle.inputField}>
                <InputLabel shrink htmlFor="title">Title</InputLabel>
                <OutlinedInput id='title' sx={{mt:2}} style={{width:'90%'}} value={editName}  onChange={(e)=> setEditName(e.target.value)} />
            </FormControl>

            <FormControl sx={{mt:4}} variant="standard"  className={EditLayStyle.inputField}>
                <InputLabel shrink  htmlFor="image"> Image Url </InputLabel>
                <OutlinedInput id='image' style={{width:'90%'}} sx={{mt:2}} value={editImageUrl} onChange={(e)=> setEditImageUrl(e.target.value)}  />
            </FormControl>

            <FormControl sx={{mt:4}} variant="standard"  className={EditLayStyle.inputField}>
                <InputLabel shrink  htmlFor="desc"> Description </InputLabel>
                <TextareaAutosize
                    id='desc'
                    aria-label="empty textarea"
                    value={editDescription}
                    minRows={16}
                    className={EditLayStyle.textareaEdit}
                    onChange={(e)=> setEditDescription(e.target.value)} 
                    />
            </FormControl>
            
            <Box className={EditLayStyle.btnEditWrapp}>
                <Stack spacing={2} direction="row">
                    <Button sx={{ml:1}} variant="contained" onClick={editSave}>Save</Button>
                    <Button variant="outlined" onClick={editPreview}>Preview</Button>
                </Stack>
             </Box>
        </Box>

    </Grid>
  )
}

export default EditLayout