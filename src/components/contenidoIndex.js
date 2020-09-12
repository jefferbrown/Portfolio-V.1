import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const ContenidoIndex = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsUsuario {
        nodes {
          nombre
          contenido
          avatar {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
          skills {
            titulo
          }
        }
      }
    }
  `)

  const {
    nombre,
    contenido,
    skills,
    avatar,
  } = informacion.allDatoCmsUsuario.nodes[0]
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <Image fluid={avatar.fluid} />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">{nombre}</p>
            <div className="text-gray-900 font-bold text-5xl mb-2">
              {nombre}
            </div>
            <p className="text-gray-700 text-base">{contenido}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              {skills.map(skill => {
                const { titulo } = skill
                return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {titulo}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContenidoIndex
