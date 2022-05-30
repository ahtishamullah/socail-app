import Navbar from "../../navbar";
import { userStore } from "../../../store/store";

const DashBoard = (props) => {
  const name = userStore.getState().accessToken?.data?.username;
  console.log(name, "name");
  return (
    <>
      <Navbar login={""} name={name} signup={"Log out"} />
    </>
  );
};

export default DashBoard;
