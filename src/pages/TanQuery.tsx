import Users from "@/api/Users";
import TanProvaGet from "@/api/Prova/TanQueryProvaGet";
const TanQuery = () => {
  return (
    <div>
      <h1>tanQuery</h1>
      <Users></Users>
      <TanProvaGet></TanProvaGet>
    </div>
  );
};

export default TanQuery;
