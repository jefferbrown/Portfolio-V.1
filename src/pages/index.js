import React from "react"
import Layout from "../components/layout"
import useSeo from "../hooks/use-seo"
import Helmet from "react-helmet"
import ContenidoIndex from "../components/contenidoIndex"
import ListProjects from "../components/listProjects"
import useProyects from "../hooks/use-proyects"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Footer from "../components/footer"
const IndexPage = () => {
  const proyects = useProyects()
  const seo = useSeo()

  const {
    fallbackSeo: { description, title },
  } = seo
  return (
    <>
      <Layout>
        <Helmet>
          <title>{title} - Portfolio</title>
          <meta name="description" content={description} />
        </Helmet>
        <ContenidoIndex />
        <div className="container mx-auto text-center w-full">
          <i className="fas fa-arrow-down animate-bounce  text-gray-500 text-2xl"></i>
        </div>
        <div className="pb-16">
          <h1 className="font-bold  text-3xl uppercase text-gray-500 py-12 text-center">
            Portfolio
          </h1>
          {proyects.map(proyect => (
            <ListProjects key={proyect.id} proyect={proyect} />
          ))}
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage
