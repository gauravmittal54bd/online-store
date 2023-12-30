import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating({ value = 0 }) {
  return (
    <Rating
      name="simple-controlled"
      value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
    />
  );
}
