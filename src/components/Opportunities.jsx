import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { IconButton } from "@mui/material";

export const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([
    { id: 1, date: null, opportunity: "", notes: "" },
  ]);

  const handleEditCellChange = (params) => {
    const updatedOpportunities = [...opportunities];
    updatedOpportunities[params.id][params.field] = params.value;
    setOpportunities(updatedOpportunities);
  };

  const handleAddRow = () => {
    const newOpportunity = {
      id: opportunities.length + 1,
      date: null,
      opportunity: "",
      notes: "",
    };

    setOpportunities((prevOpportunities) => [
      ...prevOpportunities,
      newOpportunity,
    ]);
  };

  const handleDeleteOpportunity = (id) => {
    const updatedOpportunities = opportunities.filter((opp) => opp.id !== id);
    setOpportunities(updatedOpportunities);
  };

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={params.value}
            onChange={(date) =>
              handleEditCellChange({ ...params, value: date })
            }
            renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>
      ),
    },
    {
      field: "opportunity",
      headerName: "Opportunity",
      width: 300,
      editable: true,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(e) => handleEditCellChange(params)}
        />
      ),
    },
    {
      field: "notes",
      headerName: "Notes",
      width: 300,
      editable: true,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(e) => handleEditCellChange(params)}
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDeleteOpportunity(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const CustomToolbar = () => <GridToolbarContainer></GridToolbarContainer>;

  return (
    <Box
      sx={{
        position: "relative",
        padding: 2,
        borderRadius: 5,
        height: "auto",
        width: "115%",
        marginLeft: "58%",
        marginTop: "20px",
        marginBottom: "25px",
        bgcolor: "rgba(91, 130, 130, 0.4)",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <IconButton onClick={handleAddRow}>
          <AddIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          fontWeight: "bold",
          fontSize: "18px",
          color: "white",
        }}
      >
        Opportunities
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <DataGrid
          rows={opportunities}
          columns={columns}
          pageSize={2}
          autoHeight
          disableColumnMenu
          components={{
            Toolbar: CustomToolbar,
          }}
          onEditCellChange={handleEditCellChange}
        />
      </Box>
    </Box>
  );
};
