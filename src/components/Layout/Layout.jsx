import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};