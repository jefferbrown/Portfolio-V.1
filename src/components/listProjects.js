import React from "react"
import Image from "gatsby-image"

const ListProjects = ({ proyect }) => {
  const { contenido, titulo, indexfoto, code, urlpage } = proyect
  return (
    <>
      <div className="mx-auto container  p-8 sm:p-16 lg:p-12 lg:w-5/6">
        <div
          className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
          style={{ minHeight: "19rem" }}
        >
          <div
            className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            style={{ height: "19rem" }}
          >
            <Image
              className="absolute inset-0 w-full h-full object-cover object-center"
              fluid={indexfoto.fluid}
            />
            <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-3xl font-bold uppercase">
              {titulo}
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:pt-6 pb-12">
              <p className="text-gray-600  text-sm">{contenido}</p>
              <div className="flex items-center pt-5 justify-center">
                {code.map(code => {
                  const { titulo, avatarcode } = code
                  return (
                    <>
                      <img
                        className="w-8 mx-1 h-8 "
                        src={avatarcode.url}
                        alt={titulo}
                        title={titulo}
                      />
                    </>
                  )
                })}
              </div>
              <a
                className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
                href={urlpage}
                target="_blank"
                rel="noreferrer"
              >
                <span>Ver página</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </a>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListProjects
