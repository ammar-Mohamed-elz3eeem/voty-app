import {
  DM_Serif_Display,
  Inter,
  Lusitana,
  Outfit,
  Pacifico,
  Padauk,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });
export const DMSerifDisplay = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
export const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "400"],
});
export const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
export const paduck = Padauk({ subsets: ["latin"], weight: ["400", "700"] });
