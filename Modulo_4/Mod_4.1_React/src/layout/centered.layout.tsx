import { PropsWithChildren } from "react";

export const CenteredLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        padding: "3em",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "4em",
      }}
    >
      {children}
    </div>
  );
};
