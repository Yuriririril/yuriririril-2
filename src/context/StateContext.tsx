import React, { useState } from "react";
import { initialStates, IStates, StateContextType } from "../reducer/states";

export const StateContext = React.createContext<StateContextType | null>(null);

const StateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [states, setStates] = useState<IStates>(initialStates);

  const updateUser = (user: any) => {
    setStates({...states, user: user});
  }

  const updateSearchInput = (searchInput: string) => {
    setStates({...states, searchInput: searchInput});
  }

  const toggleSidebar = (isSidebarOpen: boolean) => {
    setStates({...states, isSidebarOpen: isSidebarOpen});
  }

  return (
    <StateContext.Provider value = {{ 
      states, 
      updateUser,
      updateSearchInput,
      toggleSidebar
    }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;