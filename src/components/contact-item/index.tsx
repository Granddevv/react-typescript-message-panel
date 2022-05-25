import { FC, useMemo } from "react";
import "./style.scss";
import { formatDistance } from "date-fns";
import { IContact } from "../../assets/types";

interface ContactItemProps {
  data: IContact;
  selected: boolean;
  onClick: (evt: any) => void;
}

const ContactItem: FC<ContactItemProps> = (props) => {
  const { data, selected, onClick } = props;
  const lastMessage: any = data.messages
    ? data.messages[data.messages.length - 1]
    : null;
  const date = useMemo(
    () =>
      lastMessage?.date
        ? formatDistance(new Date(lastMessage.date), new Date(), {
            addSuffix: true,
          })
        : "",
    [lastMessage]
  );
  return (
    <div
      className={selected ? "contact_item selected" : "contact_item"}
      onClick={onClick}
    >
      <div className="contact_item-header">
        <div className="contact_item-header-title">
          {data.name} <div className="contact_item-header-title-notify">!</div>
        </div>
        <p className="contact_item-header-date">{date}</p>
      </div>
      <div className="contact_item-content">{lastMessage.message}</div>
    </div>
  );
};

export default ContactItem;
