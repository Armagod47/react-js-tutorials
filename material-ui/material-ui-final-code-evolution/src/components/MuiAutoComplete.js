import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
const skills = ["html", "css", "js", "ts", "sql"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
const MuiAutoComplete = () => {
  const [values, setValues] = useState(null);
  const [skill, setSkill] = useState(null);

  const handleChange = (e, newValue) => {
    setValues(newValue);
  };
  console.log({ values });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        onChange={handleChange}
        value={values}
        // freeSolo : can edit in input type
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
