import { useContext } from "react";

import ItemForDetailsContext from "../contexts/ItemForDetailsContext";

const useDetailItemStorage = () => {
  return useContext(ItemForDetailsContext);
};

export default useDetailItemStorage;