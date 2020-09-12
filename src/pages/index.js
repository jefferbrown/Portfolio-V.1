import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContenidoIndex from "../components/contenidoIndex"
import ListProjects from "../components/listProjects"
import useProyects from "../hooks/use-proyects"

const IndexPage = () => {
  const proyects = useProyects()
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <ContenidoIndex />

        <h1 className="font-bold text-center p-2 text-3xl">Portfolio</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 p-5">
          {proyects.map(proyect => (
            <ListProjects key={proyect.id} proyect={proyect} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
