import TablePagination from "@/components/reusable/TablePagination";
import type { TableType } from "@/components/reusable/TablePagination";
const list: TableType[] = [
  {
    id: 1,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 2,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 3,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 4,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 5,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 6,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 7,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 8,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 9,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 10,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 11,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 12,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 13,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 14,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 15,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 16,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 17,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 18,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 19,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 20,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 21,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 14,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 15,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 22,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 23,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 24,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 25,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 26,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 27,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 28,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 29,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 30,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 31,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 32,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 33,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 34,
    name: "test",
    description: "descrizione prova",
  },
  {
    id: 35,
    name: "test",
    description: "descrizione prova",
  },
];
const TableReusable = () => {
  return (
    <div className="flex flex-col h-screen w-full ">
      <div className="flex flex-row min-h-[120px] items-center justify-between p-5">
        <h1>Header</h1>
        <button>esci</button>
      </div>
      <div className="flex-1 overflow-hidden bg-amber-500">
        <TablePagination template={list}></TablePagination>
      </div>
    </div>
  );
};

export default TableReusable;
