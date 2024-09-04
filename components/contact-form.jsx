"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Button2 } from "@/components/ui/button2";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import LoadingDots from "./loading-dots";
import Link from "next/link";
import { Gradient2 } from "./gradient";
import styles from "@/app/page.module.css";
import { toast } from "react-hot-toast";

export function Contactform({ className }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showNameAlert, setNameAlert] = useState(false);
  const [showEmailAlert, setEmailAlert] = useState(false);

  function validate() {
    if (name === "") {
      setNameAlert(true);
      setEmailAlert(false);
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      setNameAlert(true);
      setEmailAlert(false);
      return false;
    }
    setNameAlert(false);
    if (email === "") {
      setEmailAlert(true);
      setNameAlert(false);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailAlert(true);
      setNameAlert(false);
      return false;
    }
    setEmailAlert(false);

    return true;
  }

  const openDialog = () => {
    setTimeout(() => {
      setShowDialog(true);
    }, 3000);
    setTimeout(() => {
      setShowDialog(false);
    }, 8000);
  };

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    return emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setName("");
      setEmail("");
      setMessage("");

      try {
        const res = await sendEmail(e);

        if (res.status === "200") {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          openDialog();
          toast.success(
            "Your details have been submitted. I will contact you shortly.",
            {
              className: "bg-white dark:text-white text-black dark:bg-black",
            }
          );
        } else {
          setLoading(false);
          toast.error("Error in sending the email. Please try again later.", {
            className: "bg-white dark:text-white text-black dark:bg-black",
          });
          throw new Error("Email sending failed");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error in sending the email. Please try again later.", {
          className: "bg-white dark:text-white text-black dark:bg-black",
        });
      }
    }
  };

  return (
    <div
      className=" bg-white dark:invert-0 lg:mr-8  invert text-black flex  md:rounded-xl rounded-none p-2 mt-10 md:p-0"
      aria-label="contact form"
      id="contact-using-this-form"
    >
      <div className="md:m-12 -ml-2 lg:ml-24">
        {" "}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className={cn("space-x-4 md:pt-0 sm:pt-10", className)}
          aria-label="contact-form"
          style={{
            maxWidth: "100%",
          }}
        >
          <div className="max-w-screen">
            <Gradient2 className={styles.contactGradient2} conic />
          </div>
          <div className="grid gap-4 " style={{ zIndex: 9999999 }}>
            <p
              className="md:text-6xl lg:text-7xl text-5xl font-display mb-4 text-left "
              aria-label="Contact us"
              style={{ zIndex: 9999999 }}
            >
              Hello! Let&apos;s talk
            </p>
            <p
              className="md:text-lg poppins text-lg mb-4 text-left "
              aria-label="Contact us"
              style={{ color: "#565656", zIndex: 9999999 }}
            >
              Fill in the form to contact me or send an email to{" "}
              <Link
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=antonyjudeshaman@gmail.com&su=Message%20from%20portfolio&body=Hi%20Antony%2C%0D%0A%0D%0AI%20wanted%20to%20reach%20out%20to%20you%20regarding%20`}
                aria-label="Mail: antonyjudeshaman@gmail.com"
              >
                <span className="md:text-2xl text-xl hover:text-purple-700 hover:underline hover:transition-transformation hover:duration-1000 text-purple-600 font-display">
                  antonyjudeshaman@gmail.com
                </span>
              </Link>
            </p>
            <div
              className="grid grid-cols-1  md:grid-cols-1 mr-4 font-pops items-center gap-4"
              aria-label="enter your name"
              style={{ zIndex: 9999999 }}
            >
              <Input
                id="name"
                name="name"
                className="md:col-span-3 font-pops  input text-lg"
                placeholder="Enter your name"
                aria-label="name field"
                value={name}
                style={{
                  filter: "brightness(180%)",
                }}
                onChange={(e) => setName(e.target.value)}
              />
              {showNameAlert && (
                <div className="text-red-600 font-pops pl-3 w-full">
                  <p>Name is Empty or Invalid.</p>
                </div>
              )}
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-1 mr-4 font-pops items-center gap-4"
              aria-label="enter your email"
              style={{ zIndex: 9999999 }}
            >
              <Input
                id="email"
                name="email"
                className="md:col-span-3 font-pops text-lg"
                aria-label="email field"
                placeholder="Enter your email"
                value={email}
                style={{
                  filter: "brightness(180%)",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              {showEmailAlert && (
                <div className="text-red-600 font-pops pl-3 w-full">
                  <p>Email is Empty or Invalid.</p>
                </div>
              )}
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-1 mr-4 font-pops items-center gap-4"
              aria-label="enter your message optional"
              style={{ zIndex: 9999999 }}
            >
              {/* <Label
              htmlFor="message"
              className="sub-gradient text-lg font-semibold"
            >
              Message
            </Label> */}
              <Textarea
                id="message"
                style={{
                  filter: "brightness(180%)",
                }}
                name="message"
                aria-label="message field"
                className="md:col-span-3 font-pops text-lg"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {showDialog && (
              <div className="pl-3 text-green-700 font-pops pb-2">
                <p>
                  Your details has been submitted. I will contact you shortly.
                </p>
              </div>
            )}

            <div className="mb-20 mr-4" style={{ zIndex: 9999999 }}>
              <Button2
                aria-label={loading ? "Submitting..." : "Submit the form"}
                type="submit"
                variant="black"
                size="contact"
                className="mt-4 md:w-[20rem] w-full text-white border font-pops border-green-300 "
                disabled={loading}
              >
                {loading ? <LoadingDots color="red" /> : "Send Message"}
              </Button2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
