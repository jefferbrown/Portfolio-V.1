import { graphql, useStaticQuery } from "gatsby"

const useCodes = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCodigo(sort: { fields: idorden, order: ASC }) {
        nodes {
          titulo
          tipo
          idorden
          avatarcode {
            url
          }
          colors
        }
      }
    }
  `)
  return data.allDatoCmsCodigo.nodes.map(proyects => ({
    titulo: proyects.titulo,
    id: proyects.id,
    avatarcode: proyects.avatarcode,
    tipo: proyects.tipo,
    idorden: proyects.idorden,
    colors: proyects.colors,
  }))
}

export default useCodes
