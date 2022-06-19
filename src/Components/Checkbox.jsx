import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

export default function ControlledCheckbox({ onToggleMale, gender }) {
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
    onToggleMale(event);
  };

  return (
    <FormControlLabel
      label={gender}
      control={
        <Checkbox
          checked={checked}
          inputProps={{ "aria-label": "controlled" }}
          onChange={handleChange}
        />
      }
    />
  );
}
