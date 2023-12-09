"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
// import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
// import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ModeToggle } from "./themeToggler";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  //   const session = useSession();
  //   const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLoginButtonClick = () => {
    router.push("/login");
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerItemClick = (path) => {
    setDrawerOpen(false);
    router.push(path);
  };

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50  dark:border-zinc-600 border-zinc-300  duration-200 border-b  ${
        isIntersecting
          ? "bg-tranparent"
          : "bg-zinc-900/500 backdrop-blur-[10px]  border-zinc-800 "
      }`}
    >
      <nav
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur   duration-200 border-b dark:border-zinc-600 border-zinc-300 ${
          isIntersecting
            ? "bg-transparent"
            : "bg-zinc-900/500  backdrop-blur-[10px] border-zinc-800 "
        }`}
      >
        <Toolbar>
          <h1 className="bubbles text-2xl hidden md:block text-black dark:text-white">
            Antony Jude Shaman
          </h1>

          <div
            style={{ marginLeft: "auto" }}
            className="flex flex-row gap-x-6 text-black dark:text-white items-center"
          >
            <ModeToggle />
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className="md:hidden h-30 invert-0 dark:invert w-30"
            >
              <label className="toggle2" htmlFor="checkbox2">
                <div id="bar4" className="bars"></div>
                <div id="bar5" className="bars"></div>
                <div id="bar6" className="bars"></div>
              </label>
            </IconButton>
          </div>
        </Toolbar>
      </nav>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={drawerOpen}
        
        onClose={handleDrawerToggle}
        className="bg-slate-900 text-black min-w-5xl border-gray-300 dark:border-blue-900 dark:text-white"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="flex font-display md:p-8 p-0 justify-between items-center  bg-slate-900 text-black min-w-3xl dark:text-white">
          <DialogTitle className="bg-slate-900 font-pops text-black text-2xl min-w-3xl dark:text-white">
            Menu
          </DialogTitle>
          <DialogTitle
            onClick={handleDrawerToggle}
            className="dark:bg-slate-900 text-2xl min-w-3xl font-pops bg-white  text-red-600 cursor-pointer hover:text-red-500"
          >
            Close X
          </DialogTitle>
        </div>
        <DialogContent className="bg-slate-900 text-black  min-w-3xl dark:text-white">
          <ul className="flex flex-col justify-between  text-5xl p-8">
            <li className="mb-8">
              <Link
                href="/"
                className="text-blue-700 hover:text-blue-900 font-display"
                onClick={() => handleDrawerItemClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="/help"
                className="text-blue-700 hover:text-blue-900 font-display"
                onClick={() => handleDrawerItemClick("/help")}
              >
                Help
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="/projects"
                className="text-blue-700 hover:text-blue-900 font-display"
                onClick={() => handleDrawerItemClick("/projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-blue-700 hover:text-blue-900 font-display"
                onClick={handleLoginButtonClick}
              >
                Login
              </Link>
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
