"use client";

import { AuthProvider } from "@/components/providers/AuthProvider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
