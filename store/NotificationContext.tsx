import { ReactNode, createContext, useState } from "react";

import { NotificationType } from "@/components/ui/Notification";

interface NotificationContextType {
  notification: NotificationType | null | undefined;
  showNotification: (notificationData: NotificationType) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const NotificationContextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [activeNotification, setActiveNotification] =
    useState<NotificationType | null>();

  const showNotificationHandler = (notificationData: NotificationType) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
