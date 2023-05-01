import { useContext } from "react";

import MainHeader from "./MainHeader";
import Notification from "../ui/Notification";
import NotificationContext from "@/store/NotificationContext";

interface LayoutType {
  children: JSX.Element;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainHeader />
      {children}
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
