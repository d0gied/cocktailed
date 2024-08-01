import {headerFilter, radioButtonHolder} from '../../styles/FontStyles'
import {Typography, RadioGroup, Box, FormControlLabel, Radio} from '@mui/material'

function FilterHolders(){
    return(
        <Box style={{marginBottom: '24px'}}>
            <Typography style={headerFilter}>Доступно из</Typography>
            <RadioGroup 
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group">
                    <FormControlLabel value="all" control={<Radio size="sm"/>} label={<Typography style={radioButtonHolder}>Все</Typography>} />
                    <FormControlLabel value="cabinet" control={<Radio size="sm"/>} label={<Typography style={radioButtonHolder}>Шкаф</Typography>} />
                    <FormControlLabel value="cabinetCart" control={<Radio size="sm"/>} label={<Typography style={radioButtonHolder}>Шкаф + Корзина</Typography>} />
            </RadioGroup>
        </Box>
    )
}

export default FilterHolders
