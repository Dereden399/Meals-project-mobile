import { createContext, ReactNode, useMemo, useState } from "react";

import { FavouriteContextType } from "../../types";

const initialState: FavouriteContextType = {
  ids: [],
  addFavId: (_text) => {},
  removeFavId: (_text) => {},
};

export const FavouritesContext = createContext(initialState);

const FavouritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [ids, setIds] = useState<Array<string>>([]);

  const addFavId = (id: string) => {
    setIds((old) => [...old, id]);
  };

  const removeFavId = (id: string) => {
    setIds((old) => old.filter((x) => x !== id));
  };

  const value = useMemo<FavouriteContextType>(() => {
    return {
      ids,
      addFavId,
      removeFavId,
    };
  }, [ids, addFavId, removeFavId]);

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
