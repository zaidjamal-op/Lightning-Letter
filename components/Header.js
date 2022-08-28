import {
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ButtonGradient from "./ButtonGradient";
import { SiBuymeacoffee } from "react-icons/si";
import Logo from "../public/logo.svg";
import Image from "next/image";

function Header() {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script =
        document.createElement(
          "script"
        );
      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res =
      await initializeRazorpay();

    if (!res) {
      alert(
        "Razorpay SDK Failed to load"
      );
      return;
    }

    // Make API call to the serverless API
    const data = await fetch(
      "/api/razorpay",
      { method: "POST" }
    ).then((t) => t.json());

    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "ZAID JAMAL",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description:
        "Thankyou for your test donation",
      image: "",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(
          response.razorpay_payment_id
        );
        alert(
          response.razorpay_order_id
        );
        alert(
          response.razorpay_signature
        );
      },
      prefill: {
        name: "ZAID JAMAL",
        email:
          "iamzaidbinarshad@gmail.com",
        contact: "9549093030",
      },
    };

    const paymentObject =
      new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Box className="xl:p-4 p-0">
      <Box className="flex items-center justify-between p-3 rounded shadow-lg">
        <Box className="flex items-center group cursor-pointer">
          {" "}
          <Image
            src={Logo}
            alt="Lightning Letter"
          />
          <Text className="text-base xl:text-2xl md:text-xl font-extrabold text-fastletter_mix absolute left-16 xl:left-20 origin-left scale-0 transition-all duration-300 ease-linear group-hover:scale-100">
            Lightning Letter
          </Text>
        </Box>
        <Box>
          <ButtonGradient
            title="Buy me a coffee"
            icon={
              <SiBuymeacoffee className="group-hover:text-amber-700 text-xl" />
            }
            bg="#A7D129"
            size="sm"
            textcolor="text-black"
            download={makePayment}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
