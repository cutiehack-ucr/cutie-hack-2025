/* eslint-disable new-cap */
import "./globals.css";
import {
  Poppins,
  Forum,
  Inknut_Antiqua as inknutAntiqua,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const forum = Forum({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-forum",
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
        className={`${poppins.variable} ${forum.variable} ${inknut.variable} flex min-h-screen flex-col bg-hackathon-teal-800`}
      >
        <div className="flex w-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
