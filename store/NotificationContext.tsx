import { ReactNode, createContext } from "react";

const NotificationContext = createContext({
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
  return (
    <NotificationContext.Provider value={}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
