import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,Button } from '@mui/material';

export default function BasicTextFields() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [numberofbedrooms, setNumberOfBedrooms] = useState('');
  const HandleClick = (e) => {
    e.preventDefault();
    const Home = { name, address, phonenumber, numberofbedrooms: parseInt(numberofbedrooms, 10) }; // Convert to integer
    console.log(Home);
    fetch("http://localhost:8080/estate/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Home)
    }).then(() => {
        console.log("New Home added!");
    });
}

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Add Home Details</h1>
          <TextField
            id="name"
            label="Name"
            variant="filled"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="address"
            label="Address"
            variant="filled"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id="phonenumber"
            label="Phone Number"
            variant="filled"
            fullWidth
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <TextField
            id="numberofrooms"
            label="Number of Bedrooms"
            variant="filled"
            fullWidth
            value={numberofbedrooms}
            onChange={(e) => setNumberOfBedrooms(e.target.value)}
          />
           <Button variant="contained" onClick={HandleClick}>Add to DB</Button>
       
       
        </Box>
      </Paper>
    </Container>
  );
}
