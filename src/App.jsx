import React from "react";
import { useAsync } from "@react-hook/async";

export const App = () => {
  const [{ status, cancel, error, value }, call] = useAsync(() => {
    return new Promise((resolve) => setTimeout(() => resolve("Loaded"), 3000));
  });

  switch (status) {
    case "loading":
      return (
        <div>
          <button onClick={cancel}>Cancel</button>
          Loading...
        </div>
      );
    case "cancelled":
      return (
        <div>
          Cancelled.
          <button onClick={call}>Try again</button>
        </div>
      );
    case "error":
      return `Error: ${error}`;
    case "success":
      return value || "Success!";
    default:
      return <button onClick={call}>Load me</button>;
  }
};
