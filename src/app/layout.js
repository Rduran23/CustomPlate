import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Inter(
  { subsets: ["latin"] },
  );

  const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });


export const metadata = {
  title: "CustomPlates - Matrículas personalizadas en 3D",
  description: "Matrículas personalizadas en 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
