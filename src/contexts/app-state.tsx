import { useState, createContext, useContext, FC } from "react";
import { contactListData } from "../assets/consts/contacts";
import { IUser, IContact } from "../assets/types";
type AppStateProviderProps = {
  children?: JSX.Element;
};

type AppStateProps = {
  contactList: IContact[];
  setContactList: (data: IContact[]) => void;
  selectedContact: IContact;
  setSelectedContact: (data: IContact) => void;
  user: IUser;
};

const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  const [contactList, setContactList] = useState<IContact[]>(contactListData);
  const [selectedContact, setSelectedContact] = useState<IContact>({
    name: "",
    id: -1,
    avatar: "",
  });
  const [user, setUser] = useState<IUser>({
    id: 10,
    name: "Me",
    avatar: "avatar/5.png",
  });
  return (
    <AppStateContext.Provider
      value={{
        contactList,
        setContactList,
        selectedContact,
        setSelectedContact,
        user,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const AppStateContext = createContext<AppStateProps>({
  contactList: [],
  setContactList: (data: IContact[]) => {},
  selectedContact: { id: 1, name: "", avatar: "" },
  setSelectedContact: (data: IContact) => {},
  user: { id: -1, name: "", avatar: "" },
});
const useAppState = () => useContext(AppStateContext);

export { AppStateProvider, useAppState };
