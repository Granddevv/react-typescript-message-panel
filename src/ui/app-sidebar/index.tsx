import React, { useState, useCallback } from "react";
import "./style.scss";
import { useAppState } from "../../contexts/app-state";
import { ContactItem } from "../../components";
import { IContact } from "../../assets/types";

const AppSidebar = () => {
  const { contactList, setSelectedContact } = useAppState();
  const [selected, setSelected] = useState(-1);

  const handleSelect = useCallback(
    (index: number) => {
      setSelected(index);
      setSelectedContact(contactList[index]);
    },
    [contactList, setSelectedContact]
  );

  return (
    <div className="app_sidebar">
      {contactList.map((item: IContact, index: number) => (
        <ContactItem
          data={item}
          key={item.id}
          selected={selected === index}
          onClick={() => handleSelect(index)}
        />
      ))}
    </div>
  );
};

export default AppSidebar;
