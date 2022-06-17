import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox({ onToggleMale }) {
	const [checked, setChecked] = React.useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);
		onToggleMale();
	};

	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			inputProps={{ 'aria-label': 'controlled' }}
		/>
	);
}
