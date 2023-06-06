import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  {
    field: 'company',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'jobTitle',
    headerName: 'Job Title',
    width: 150,
    editable: true,
  },
  {
    field: 'link',
    headerName: 'Link',
    width: 110,
    editable: true,
  },
  {
    field: 'coverLetterGenerated',
    headerName: 'Cover Letter Generated',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <StyledRadioGroup
        value={params.value}
        onChange={(e) => {
          params.setValue(e.target.value);
        }}
      >
        <FormControlLabel
          value="Yes"
          control={<StyledRadio color="primary" />}
        />
   
      </StyledRadioGroup>
    ),
  },
  {
    field: 'applied',
    headerName: 'Applied',
    width: 110,
    editable: true,
    renderCell: (params) => (
      <StyledRadioGroup
        value={params.value}
        onChange={(e) => {
          params.setValue(e.target.value);
        }}
      >
        <FormControlLabel
          value="Yes"
          control={<StyledRadio color="primary" />}
        />

      </StyledRadioGroup>
    ),
  },
  {
    field: 'interviewed',
    headerName: 'Interviewed',
    width: 110,
    editable: true,
    renderCell: (params) => (
      <StyledRadioGroup
        value={params.value}
        onChange={(e) => {
          params.setValue(e.target.value);
        }}
      >
        <FormControlLabel
          value="Yes"
          control={<StyledRadio color="primary" />}
        />
      </StyledRadioGroup>
    ),
  },
  {
    field: 'offerReceived',
    headerName: 'Offer Received',
    width: 150,
    editable: true,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 150,
    editable: true,
  },
  {
    field: 'remove',
    headerName: 'Remove',
    width: 110,
    editable: true,
    renderCell: () => <DeleteIcon style={{ color: 'white' }} />,
  },
];

const rows = [
  {
    id: 1,
    company: 'Lighthouse',
    jobTitle: 'Full Stack Developer',
    link: 'jobposting.com',
    coverLetterGenerated: 'Yes',
    applied: 'Yes',
    interviewed: 'No',
    offerReceived: 'No',
    notes: 'Add notes here',
  },
  {
    id: 2,
    company: 'Lakefield',
    jobTitle: 'Junior Front End Developer',
    link: 'jobposting.com',
    coverLetterGenerated: 'Yes',
    applied: 'Yes',
    interviewed: 'No',
    offerReceived: 'No',
    notes: 'Add notes here',
  },
];

const StyledRadioGroup = (props) => (
  <RadioGroup sx={{ flexDirection: 'row', color: 'white' }} {...props} />
);

const StyledRadio = (props) => (
  <Radio sx={{ color: 'white' }} {...props} />
);

export const Careers = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: 2,
        paddingBottom: 8,
        borderRadius: 5,
        height: 300,
        width: '100%',
        marginBottom: '20px',
        marginTop: '20px',
        bgcolor: 'rgba(91, 130, 130, 0.4)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <AddIcon sx={{ color: 'white' }} />
      </Box>
      <h1 style={{ color: 'white' }}>Careers</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={1}
        disableColumnMenu
        disableColumnSelector
        disableSelectionOnClick
      />
    </Box>
  );
};