import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const initForm = {
  name: 'Toy 9',
  category: 'Shoe',
  price: 0,
  description: 'It\'s lit',
  file: '',

};
export default function BasicTextFields() {
  const [form, setForm] = useState(initForm);
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(form);
    if (event.target.name === 'file')
      console.log(event.target.files[0]);

    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        value={form.name}
        id="outlined-basic1"
        label="Name" name='name'
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        value={form.category}
        id="outlined-basic2"
        label="Category"
        name='category'
        variant="outlined"
        onChange={handleChange}

      />
      <TextField
        value={form.price}
        id="outlined-basic3"
        label="Price ($)"
        name='price'
        variant="outlined"
        onChange={handleChange}

      />
      <TextField
        id="outlined-basic4"
        value={form.description}
        label="Description"
        name='description'
        variant="outlined"
        onChange={handleChange}

      />
      <Input type='file' value={form.file}
        onChange={handleChange}
        name='file'

      />
      <Button>Add</Button>
    </form>
  );
}