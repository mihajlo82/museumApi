import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LeftBoxStyle from '../leftBox.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import useRadioBtn from './useRadioBtn';

const RadioButtons = () => {
    const {onRadioChange, handleSearchChange} = useRadioBtn();

  return (
    <Box className={LeftBoxStyle.radioButtonsWrapp}>
        <Grid className={LeftBoxStyle.radioWrapp}>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="0"
                >
                    <FormControlLabel value="0" control={<Radio />} label="All" onChange={() => onRadioChange(0)} />
                    <FormControlLabel value="1" control={<Radio />} label="Paintings" onChange={() => onRadioChange(1)} />
                    <FormControlLabel value="2" control={<Radio />} label="Potteries" onChange={() => onRadioChange(2)}  />
                </RadioGroup>
            </FormControl>
         </Grid>

         <Grid className={LeftBoxStyle.searchWrapp}>
            <OutlinedInput
                id="outlined-adornment-password"
                className={LeftBoxStyle.searchBar}
                onChange={handleSearchChange}
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
         </Grid>
    </Box>
  )
}

export default RadioButtons