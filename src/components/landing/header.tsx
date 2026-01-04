"use client";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import Transition from "./transition.module.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaDiscord } from "react-icons/fa6";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <>
      <header className="flex top-0 sticky h-20 items-center justify-around w-full bg-[#121212] text-white z-20">
        <Link href="/" className="flex flex-row items-center space-x-4">
          <Avatar className="border border-green-600 border-4 w-15 h-15">
            <AvatarImage src={"image.png"} />

            <AvatarFallback> M </AvatarFallback>
          </Avatar>

          <h1 className="text-3xl font-bold">Myra Bot</h1>
        </Link>

        <div className="flex flex-row items-center space-x-8">
          <nav>
            <ul className="hidden md:flex flex-row space-x-4">
              <li>
                <Link href="/" className={Transition.hoverlink}>
                  Features
                </Link>
              </li>
              <li>
                <Link className={Transition.hoverlink} href="/">
                  Docs
                </Link>
              </li>
              <li>
                <Link className={Transition.hoverlink} href="/">
                  Sobre a Myra
                </Link>
              </li>
              <li>
                <Link className={Transition.hoverlink} href="/">
                  Team
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            onClick={() =>
              redirect(
                "https://discord.com/oauth2/authorize?client_id=1455017163353096276&permissions=8&integration_type=0&scope=bot"
              )
            }
            className="font-bold hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
          >
            <FaDiscord />
            Me adicione
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            suppressHydrationWarning
          >
            {theme === "dark" ? <Moon /> : <Sun />}
          </Button>
          <Button onClick={() => setMenu(!menu)} variant={"ghost"}>
            {menu === true ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
    </>
  );
}
