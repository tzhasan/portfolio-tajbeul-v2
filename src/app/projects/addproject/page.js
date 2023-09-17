"use client";
import Navbar from "@/Components/Navbar";
import Buttoncus from "@/Components/Utils/Buttoncus";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const addProject = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Get the selected image file from the input field
    const imageFile = data.imageurl[0];

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const base64Image = event.target.result;
        data.imageurl = base64Image;
        try {
          const res = await fetch(
            "http://https://tajbeul.vercel.app/api/projects",
            {
              method: "POST",
              headers: {
                contentType: "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          if (res.ok) {
            toast.success("Successfully added!");
            reset();
          }
        } catch (error) {
          console.log(error.message);
          toast.error("Adding failed.");

        }
      };

      reader.readAsDataURL(imageFile);
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <div className="flex flex-col w-full md:w-[95%] mx-auto pt-28">
        <div className="text-center my-4 sm:my-10 md:my-10">
          <h4 className="text-2xl sm:text-4xl md:text-6xl font-semibold">
            Add Project
          </h4>
        </div>
        <div className="mb-10 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm sm:text-md md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Project Name
              </label>
              <input
                {...register("projectName", { required: true })}
                type="text"
                id="base-input"
                className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm sm:text-md md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Decription
              </label>
              <input
                {...register("description", { required: true })}
                type="text"
                id="base-input"
                className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm sm:text-md md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Features
              </label>
              <input
                {...register("features", { required: true })}
                type="text"
                id="base-input"
                className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm sm:text-md md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Image URL
              </label>
              <input
                {...register("imageurl", { required: true })}
                type="file"
                id="base-input"
                className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm sm:text-md md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Live link
              </label>
              <input
                {...register("livelink", { required: true })}
                type="text"
                id="base-input"
                className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm sm:text-md md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Git link
              </label>
              <input
                {...register("gitlink", { required: true })}
                type="text"
                id="base-input"
                className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button type="submit">
              <Buttoncus>Submit</Buttoncus>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default addProject;
