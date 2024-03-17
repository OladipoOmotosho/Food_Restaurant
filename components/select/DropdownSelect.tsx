import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { colors, FONTFAMILY } from '../../utils';

export default function DropDownSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 464 }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{
            fontFamily: FONTFAMILY.light,
            fontWeight: '300',
            color: '#828282',
            fontSize: '14px',
          }}
        >
          weddings,birthdays,...
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // label="weddings,birthdays,..."
          onChange={handleChange}
        >
          <MenuItem value={10}>WEDDINGS</MenuItem>
          <MenuItem value={20}>BIRTHDAYS</MenuItem>
          <MenuItem value={30}>ANNIVERSARY</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
