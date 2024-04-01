import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter(
  { subsets: ["latin"] },
  );


export const metadata = {
  title: "CustomPlates - Matrículas personalizadas en 3D",
  description: "Matrículas personalizadas en 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
