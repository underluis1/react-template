import TableNew from "@/components/reusable/TableNew";
export default function TestSidebar() {
  return (
    <>
      <div className="flex bg-green-400 flex-row min-h-screen w-full items-center justify-center">
        <div className="flex flex-col w-full   p-15">
          <p className=" p-6">Table</p>
          <TableNew></TableNew>
        </div>
      </div>
    </>
  );
}
