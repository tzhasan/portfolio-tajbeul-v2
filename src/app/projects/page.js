'use client'
import Navbar from '@/Components/Navbar';
import Buttoncus from '@/Components/Utils/Buttoncus';
import Loading from '@/Components/Utils/Loading';
import useProject from '@/Components/hooks/useProject';
import { AuthContext } from '@/Providers/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';



const projects = () => {
  const projects = useProject()
  console.log(projects)
  const [isAdmin,setIsAdmin] = useState(false)
  const { user,loading } = useContext(AuthContext)
  useEffect(() => {
    if (user && user.email === "sohantajbiul210@gmail.com") {
      setIsAdmin(true);
    }
  }, [user]);
  
  if (loading) {
    return (
      <div className='md:pt-[20%] pt-[30%]'>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="pt-[25%] sm:pt-[15%] md:pt-[10%]">
        <p className="text-white text-center font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10">
          Recent Projects
        </p>

        <div className={`my-5  flex justify-end `}>
          <Link
            className={` ${isAdmin ? "block" : "hidden"}`}
            href="/projects/addproject"
          >
            <Buttoncus>Add Project</Buttoncus>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:gap-20 gap-6 w-full md:w-[80%] mx-auto mb-[10%] ">
          {projects ? (
            // If projects data is available, map and render
            projects.map((p) => (
              <div
                className="blackShadowOnProject border rounded-md"
                key={p._id}
              >
                <div>
                  <Image
                    alt="image"
                    className="cover w-full"
                    src={p.imageurl}
                    width={500}
                    height={500}
                  />
                  <div className="Projecttext-overlay">
                    <div className="mb-6 hidden sm:block">
                      <p className="text-md sm:text-lg md:text-2xl font-semibold mb-1">
                        Project: {p.projectName}
                      </p>
                      <p className="mb-3">{p.description}</p>
                      <p className="mb-3">Features: {p.features}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <a href={p.livelink} target="_blank">
                        <Buttoncus>Live Link</Buttoncus>
                      </a>
                      <a href={p.gitlink} target="_blank">
                        <Buttoncus>Github Link</Buttoncus>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // If projects data is not available, render a loading placeholder
            <div className="border py-[10%]">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default projects;