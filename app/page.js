import Image from "next/image"
import LandingHeader from "./components/Landing Header/LandingHeader"
import ProjectPage from "./components/Project Page/ProjectPage"



export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* <LandingHeader /> */}
      <ProjectPage />
    </main>
  )
}
