import { graphql, useStaticQuery } from "gatsby"

const useProyects = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProyecto {
        nodes {
          titulo
          contenido
          indexfoto {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
          code {
            titulo
          }
        }
      }
    }
  `)
  return data.allDatoCmsProyecto.nodes.map(proyects => ({
    titulo: proyects.titulo,
    id: proyects.id,
    contenido: proyects.contenido,
    indexfoto: proyects.indexfoto,
    code: proyects.code,
  }))
}

export default useProyects
