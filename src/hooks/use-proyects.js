import { graphql, useStaticQuery } from "gatsby"

const useProyects = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProyecto {
        nodes {
          titulo
          contenido
          indexfoto {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
          code {
            titulo
            avatarcode {
              url
            }
          }
          urlpage
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
    urlpage: proyects.urlpage,
  }))
}

export default useProyects
