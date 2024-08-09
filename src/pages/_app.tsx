import Image from "next/image";
import { Inter } from "next/font/google";
import { Badge, Flex } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p>TEST ONLY</p>
      <Flex gap="2">
        <Badge color="orange">Alerta!</Badge>
        <Badge color="blue">Azul sla</Badge>
        <Badge color="green">Deu certo</Badge>
      </Flex>
    </main>
  );
}