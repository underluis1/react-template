import TableGetIn from "@/components/reusable/TableGetIn";

export default function TestSidebar() {
  return (
    <>
      <div className="flex bg-green-400 flex-row min-h-screen w-full items-center justify-center">
        <div className="flex flex-col w-full gap-3  p-15">
          <p className="text-2xl">Table</p>
          <TableGetIn></TableGetIn>
        </div>
      </div>
    </>
  );
}
