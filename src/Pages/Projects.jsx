import { useParams } from "react-router-dom"
import projects from "../data/projects"

export default function Project(){
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if(!project) return <h1>Projeto não encontrado</h1>
  return(
    <div className=" p-2 bg-linear-to-br from-orange-500 to-[#2a1a15] md:p-3  m-4 md:m-8 rounded-4xl">
      <div className="bg-[#1F1B1A] rounded-[30px] p-4 lg:p-8" >
        <h1>{project.name}</h1>
        <img src={project.banner} alt="" className="w-[50%]" />
      </div>
    </div>
  )
}