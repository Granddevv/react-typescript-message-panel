import React, { useState, useMemo, useCallback } from "react";
import { useAppState } from "../../contexts/app-state";
import { MessageItem } from "../../components";
import EmotionHappyLineIcon from "remixicon-react/EmotionHappyLineIcon";
import ImageLineIcon from "remixicon-react/ImageLineIcon";
import "./style.scss";
import { IMessage } from "../../assets/types";

const MessagePanel = () => {
  const { selectedContact, setSelectedContact, user } = useAppState();
  const [inputValue, setInputValue] = useState("");
  const messageList = useMemo(
    () => selectedContact?.messages || [],
    [selectedContact]
  );

  const handleSendMessage = useCallback(
    (text: string) => {
      messageList.push({
        message: text,
        contactId: user.id,
        date: new Date().toISOString(),
      });

      setSelectedContact({
        ...selectedContact,
        messages: messageList,
      });
      setInputValue("");
    },
    [messageList, selectedContact, setSelectedContact, user]
  );

  return (
    <div className="message_panel">
      <div className="message_panel-header">
        <div className="message_panel-header-contact">
          {selectedContact?.name}
        </div>
      </div>
      <div className="message_panel-main">
        {messageList.map((item: IMessage, index: number) => (
          <MessageItem
            key={`key-message-item-${index}`}
            data={item}
            name={item.contactId === user.id ? user.name : selectedContact.name}
            main={item.contactId === user.id}
            avatar={
              item.contactId === user.id ? user.avatar : selectedContact.avatar
            }
          />
        ))}
      </div>
      <div className="message_panel-footer">
        <input
          className="message_panel-footer-input"
          placeholder={`Message @${selectedContact?.name || ""}...`}
          onKeyPress={(ev: any) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              handleSendMessage(ev.target.value);
            }
          }}
          value={inputValue}
          onChange={(evt: any) => setInputValue(evt.target.value)}
        />
        <div className="message_panel-footer-action-btn">
          <EmotionHappyLineIcon />
        </div>
        <div className="message_panel-footer-action-btn">
          <ImageLineIcon />
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
