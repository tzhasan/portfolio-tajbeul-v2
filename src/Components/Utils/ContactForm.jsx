"use client";

import toast, { Toaster } from "react-hot-toast";
import Buttoncus from "./Buttoncus";
import { useForm } from "@formspree/react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/otherResources/animation_lmb25p9m.json";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("meqbkljq");
  
  const manageSubmit = (e) => {
    // other logic or error checking logic here
    handleSubmit(e)
    reset() 
  };

  if (state.succeeded) {
    toast.success('Successfully sent')
    return <Lottie className="w-1/2  mx-auto" animationData={groovyWalkAnimation} loop={false} />;
  }
  return (
    <form onSubmit={manageSubmit}>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="mb-6">
        <label className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white">
          Your Name*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Elon Musk"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white">
          Your email*
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@email.com"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white">
          Your message*
        </label>
        <input
          id="message"
          name="message"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Message"
          required
        />
      </div>
      <div type="submit" disabled={state.submitting}>
        <Buttoncus>Submit</Buttoncus>
      </div>
    </form>
  );
};

export default ContactForm;
