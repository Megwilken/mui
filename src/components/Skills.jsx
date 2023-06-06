import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, MenuItem, Stack, IconButton } from '@mui/material';

export const Skills = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [skills, setSkills] = useState([]);

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value);
  };

  const handleAddSkill = () => {
    const skill = {
      skillName: newSkill,
      skillLevel: skillLevel,
    };

    setSkills((prevSkills) => [...prevSkills, skill]);
    setNewSkill('');
    setSkillLevel('');
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleEditSkill = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        padding: 2,
        borderRadius: 5,
        marginTop: '20px',
        width: '200%',
        bgcolor: 'rgba(91, 130, 130, 0.4)',
        maxHeight: 300,
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          Width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '18px',
            color: 'white',
            width: '100%',
          }}
        >
          Skills
        </Box>
        <IconButton color="inherit" onClick={handleAddSkill} sx={{ marginLeft: 'auto' }}>
          <AddIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      {skills.length === 0 ? (
        <Box sx={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
          No skills added.
        </Box>
      ) : (
        <Box sx={{ }}>
          {skills.map((skill, index) => (
            <Stack direction="row" spacing={2} alignItems="center" justifyContent='center' key={index} sx={{ marginBottom: '10px' }}>
              <TextField
                label="Skill"
                variant="outlined"
                value={skill.skillName}
                onChange={(e) => handleEditSkill(index, 'skillName', e.target.value)}
                fullWidth
              />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '120px' }}>
                <TextField
                  label="Skill Level"
                  select
                  value={skill.skillLevel}
                  onChange={(e) => handleEditSkill(index, 'skillLevel', e.target.value)}
                >
                  <MenuItem value="beginner">Beginner</MenuItem>
                  <MenuItem value="intermediate">Intermediate</MenuItem>
                  <MenuItem value="advanced">Advanced</MenuItem>
                </TextField>
              </Box>
              <IconButton color="inherit" onClick={() => handleDeleteSkill(index)}>
                <DeleteIcon sx={{ color: 'white' }} />
              </IconButton>
            </Stack>
          ))}
          <Stack direction="row" spacing={2} sx={{ marginTop: '10px' }}>
            <TextField
              label="New Skill"
              variant="outlined"
              value={newSkill}
              onChange={handleNewSkillChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Skill Level"
              variant="outlined"
              select
              value={skillLevel}
              onChange={handleSkillLevelChange}
              margin="dense"
              sx={{ minWidth: '120px' }} 
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </TextField>
            <IconButton color="inherit" onClick={handleAddSkill}>
              <DeleteIcon sx={{ color: 'white' }} />
            </IconButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
