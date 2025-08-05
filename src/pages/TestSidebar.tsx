import TableGetIn from "@/components/reusable/TableGetIn";
import { DialogTest } from "@/components/Dialog/DialogTest";
export default function TestSidebar() {
  return (
    <>
      <div className="flex bg-green-400 flex-row min-h-screen w-full items-center justify-center">
        <div className="flex flex-col w-full gap-3  p-15">
          <div className="flex flex-row items-start justify-between">
            <p className="text-2xl">Table</p>
            <DialogTest></DialogTest>
          </div>
          <TableGetIn></TableGetIn>
        </div>
      </div>
    </>
  );
}
