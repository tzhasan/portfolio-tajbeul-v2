import { useEffect, useState } from "react";

const useProject = () => {
  const [projects,setProjects] = useState([])
  useEffect(() => {
    const allProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/projects", {
          next: { revalidate: 3600 },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        console.log(data);
         setProjects(data.projects);
      } catch (error) {
        console.log("error fetching projects", error);
      }
    };
    allProjects()
  },[])

  return projects;
};

export default useProject;