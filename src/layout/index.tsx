import React from "react";
import AppSidebar from "../ui/app-sidebar";
import MessagePanel from "../ui/message-panel";
import "./style.scss";

export default function Layout() {
  return (
    <div className="main-layout">
      <AppSidebar />
      <MessagePanel />
    </div>
  );
}
