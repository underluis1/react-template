import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { UseGetDataIn } from "@/hooks/Testing/UseGetDataIn";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.3, minWidth: 70 },

  { field: "code", headerName: "Code", flex: 1, minWidth: 100 },
  {
    field: "assigned_at",
    headerName: "Age",
    type: "number",
    flex: 0.5,
    minWidth: 80,
  },
  { field: "created_at", headerName: "created_at", flex: 1, minWidth: 130 },
];

const handleClick = () => {
  alert("click");
};

const paginationModel = { page: 0, pageSize: 15 };

export default function TableGetIn() {
  const { isLoading, dataEff, errorr } = UseGetDataIn();
  return (
    <>
      {isLoading && (
        <>
          <p>caricamento in corso</p>
        </>
      )}

      {errorr && (
        <>
          <p>{errorr}</p>
        </>
      )}

      <Paper sx={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={dataEff}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[15, 25]}
          checkboxSelection
          sx={{ border: 1 }}
          onRowClick={handleClick}
        />
      </Paper>
    </>
  );
}
