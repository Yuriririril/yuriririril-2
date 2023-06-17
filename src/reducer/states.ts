export interface IStates {
  user: any;
  searchInput: string;
  isSidebarOpen: boolean;
}

export const initialStates: IStates = {
  user: null,
  searchInput: '',
  isSidebarOpen: false,
};

export type StateContextType = {
  states: IStates;
  updateUser: (user: any) => void;
  updateSearchInput: (searchInput: string) => void;
  toggleSidebar: (isSidebarOpen: boolean) => void;
};
