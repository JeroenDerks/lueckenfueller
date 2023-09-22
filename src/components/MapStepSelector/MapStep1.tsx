import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export const MapStep1 = ({
  handleStep1Change,
}: {
  handleStep1Change: (v: string) => void;
}) => {
  const handleChange = (event: SelectChangeEvent<any>) => {
    handleStep1Change(event.target.value);
  };

  let options = new Array(20);
  for (let i = 0; i < options.length; i++) {
    options[i] = { label: `Option ${i}`, value: `${i}` };
  }

  const MenuProps = { PaperProps: { style: { maxHeight: 400 } } };

  return (
    <>
      <Typography variant="h5" textAlign="center" mb={3}>
        What are you missing?
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {options.map(({ label, value }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
