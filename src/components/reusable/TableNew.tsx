import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.3, minWidth: 70 },
  { field: "firstName", headerName: "First name", flex: 1, minWidth: 130 },
  { field: "lastName", headerName: "Last name", flex: 1, minWidth: 100 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1.5,
    minWidth: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];
const handleClick = () => {
  alert("click");
};
const rows = [
  { id: 1, lastName: "Johnson", firstName: "Emma", age: 28 },
  { id: 2, lastName: "Smith", firstName: "Liam", age: 35 },
  { id: 3, lastName: "Williams", firstName: "Olivia", age: 22 },
  { id: 4, lastName: "Brown", firstName: "Noah", age: 45 },
  { id: 5, lastName: "Jones", firstName: "Ava", age: 30 },
  { id: 6, lastName: "Garcia", firstName: "Elijah", age: 50 },
  { id: 7, lastName: "Martinez", firstName: "Sophia", age: 27 },
  { id: 8, lastName: "Rodriguez", firstName: "Mason", age: 40 },
  { id: 9, lastName: "Davis", firstName: "Isabella", age: 19 },
  { id: 10, lastName: "Hernandez", firstName: "Lucas", age: 33 },
  { id: 11, lastName: "Lopez", firstName: "Mia", age: 24 },
  { id: 12, lastName: "Gonzalez", firstName: "James", age: 55 },
  { id: 13, lastName: "Wilson", firstName: "Charlotte", age: 29 },
  { id: 14, lastName: "Anderson", firstName: "Benjamin", age: 60 },
  { id: 15, lastName: "Thomas", firstName: "Amelia", age: 26 },
  { id: 16, lastName: "Taylor", firstName: "Ethan", age: 38 },
  { id: 17, lastName: "Moore", firstName: "Harper", age: 31 },
  { id: 18, lastName: "Jackson", firstName: "Alexander", age: 48 },
  { id: 19, lastName: "Martin", firstName: "Evelyn", age: 52 },
  { id: 20, lastName: "Lee", firstName: "Daniel", age: 36 },
  { id: 21, lastName: "Perez", firstName: "Abigail", age: 41 },
  { id: 22, lastName: "Thompson", firstName: "Michael", age: 47 },
  { id: 23, lastName: "White", firstName: "Emily", age: 33 },
  { id: 24, lastName: "Harris", firstName: "Henry", age: 44 },
  { id: 25, lastName: "Sanchez", firstName: "Elizabeth", age: null },
  { id: 26, lastName: "Clark", firstName: "Sebastian", age: 39 },
  { id: 27, lastName: "Ramirez", firstName: "Victoria", age: 28 },
  { id: 28, lastName: "Lewis", firstName: "Samuel", age: 22 },
  { id: 29, lastName: "Robinson", firstName: "Grace", age: 34 },
  { id: 30, lastName: "Walker", firstName: "David", age: 58 },
  { id: 31, lastName: "Young", firstName: "Lily", age: 21 },
  { id: 32, lastName: "Allen", firstName: "Joseph", age: 49 },
  { id: 33, lastName: "King", firstName: "Zoey", age: 27 },
  { id: 34, lastName: "Wright", firstName: "Owen", age: 32 },
  { id: 35, lastName: "Scott", firstName: "Chloe", age: null },
  { id: 36, lastName: "Torres", firstName: "Matthew", age: 53 },
  { id: 37, lastName: "Nguyen", firstName: "Penelope", age: 25 },
  { id: 38, lastName: "Hill", firstName: "Jackson", age: 30 },
  { id: 39, lastName: "Flores", firstName: "Eleanor", age: 46 },
  { id: 40, lastName: "Green", firstName: "Aiden", age: 37 },
  { id: 41, lastName: "Adams", firstName: "Hannah", age: 23 },
  { id: 42, lastName: "Nelson", firstName: "Christopher", age: 59 },
  { id: 43, lastName: "Baker", firstName: "Layla", age: 20 },
  { id: 44, lastName: "Hall", firstName: "Joshua", age: 42 },
  { id: 45, lastName: "Rivera", firstName: "Nora", age: 28 },
  { id: 46, lastName: "Campbell", firstName: "Andrew", age: 51 },
  { id: 47, lastName: "Mitchell", firstName: "Scarlett", age: 29 },
  { id: 48, lastName: "Carter", firstName: "Gabriel", age: 35 },
  { id: 49, lastName: "Roberts", firstName: "Stella", age: 45 },
  { id: 50, lastName: "Gomez", firstName: "Matthew", age: 40 },
];

const paginationModel = { page: 0, pageSize: 15 };

export default function TableNew() {
  return (
    <Paper sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[15, 25]}
        checkboxSelection
        sx={{ border: 3 }}
        onRowClick={handleClick}
      />
    </Paper>
  );
}
