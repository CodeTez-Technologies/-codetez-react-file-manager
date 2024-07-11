import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function Icon() {
  return (
    <SvgIcon sx={{width: 'auto', height: 'auto'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="#01579b"
          d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5L13 3.5M7 13l1.5 7h2l1.5-3 1.5 3h2l1.5-7h1v-2h-4v2h1l-.9 4.2L13 15h-2l-1.1 2.2L9 13h1v-2H6v2h1z"
        />
      </svg>
    </SvgIcon>
  );
}
