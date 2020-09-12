import React from "react"
import Image from "gatsby-image"

const ListProjects = ({ proyect }) => {
  const { contenido, titulo, indexfoto, code } = proyect
  return (
    <>
      <div className="bg-white rounded overflow-hidden shadow-lg ">
        <Image className="w-full" fluid={indexfoto.fluid} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{titulo} </div>
          <p className="text-gray-700 text-base">{contenido}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {code.map(code => {
            const { titulo } = code
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {titulo}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ListProjects
