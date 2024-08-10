import Image from "next/image";
import { Inter } from "next/font/google";
import { Badge, Flex } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main>
      <LanguageSwitch />
    </main>
  );
}