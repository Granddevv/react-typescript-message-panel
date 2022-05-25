import React, { FC, useMemo } from "react";
import { format } from "date-fns";
import "./style.scss";
import { IMessage } from "../../assets/types";
interface MessageItemProps {
  data: IMessage;
  main: boolean;
  avatar: string;
  name: string;
}

const MessageItem: FC<MessageItemProps> = (props) => {
  const { data, main, name, avatar } = props;
  const date = useMemo(
    () => format(new Date(data.date), "MM/dd/yyyy hh:mm a"),
    [data]
  );
  return (
    <div className={main ? "message_item" : "message_item user-message"}>
      <div
        className="message_item-user"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
      <div className="message_item-content">
        <div className="message_item-content-header">
          {name} | {date}
        </div>
        <div className="message_item-content-body">{data.message}</div>
      </div>
    </div>
  );
};

export default MessageItem;
