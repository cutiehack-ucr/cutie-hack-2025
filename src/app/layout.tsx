/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import { Inknut_Antiqua as inknutAntiqua } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inknut = inknutAntiqua({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inknut",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${inknut.variable} flex h-full flex-col lg:flex-row`}
      >
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
