import {Stack, } from '@mui/material'
import FilterHolders from './filters/FilterHolders'

function Filters(){
    return(
        <Stack direction="column" style={{ paddingLeft: '16px', paddingTop: '16px', marginLeft: '16px', gap: '24px', borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)" }}>
            <FilterHolders />
        </Stack>
    )
}

export default Filters
