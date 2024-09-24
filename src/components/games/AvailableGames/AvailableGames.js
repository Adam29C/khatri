import ReusableCard from "../ReusableCard";
import { GET_ALL_GAMES } from "../../service/admin.service";
import { PagesIndex } from "../../Pages/PagesIndex";
const AvailableGames = () => {
  const [getData, setgetData] = PagesIndex.useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMES();
    if (res?.status) {
      setgetData(res?.data);
    }
  };
  PagesIndex.useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div>
 

      <ReusableCard
        GameData={getData}
        title="AVAILABLE GAMES"
        showPana={true}
      />
    </div>
  );
};

export default AvailableGames;
