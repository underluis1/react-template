import Users from "@/api/Users";
import TanProvaGet from "@/api/Prova/TanQueryProvaGet";
import GetDataIn from "@/api/DataIn/TanQueryGetDataIn";
const TanQuery = () => {
  return (
    <div className="flex flex-row px-15 gap-4 items-center justify-between min-h-screen bg-gray-500/40 ">
      <h1 className="text-xl text-shadow-blue-400">tanQuery</h1>
      <Users></Users>
      <TanProvaGet></TanProvaGet>
      <GetDataIn></GetDataIn>
    </div>
  );
};

export default TanQuery;
