import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"

import useCodes from "../hooks/use-codes"

const ContenidoIndex = ({ color }) => {
  const proyects = useCodes()
  const [openTab, setOpenTab] = React.useState(1)
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsUsuario {
        nodes {
          profesion
          nombre
          contenido
          avatar {
            url
          }
          banner {
            url
          }
          skills {
            titulo
            avatarcode {
              url
            }
          }
        }
      }
    }
  `)

  const {
    profesion,
    nombre,
    contenido,

    avatar,
    banner,
  } = informacion.allDatoCmsUsuario.nodes[0]

  return (
    <>
      <Header transparent />

      <main className="profile-page">
        <section className="relative block" style={{ height: "450px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover "
            style={{
              backgroundImage: `url(${banner.url})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-25 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-16 ">
          <div className="container mx-auto px-4 md:w-9/12  sm:w-11/12">
            <div className="relative flex flex-col min-w-0 pb-6  bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        src={avatar.url}
                        alt="mi foto"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center ">
                    <div className="py-10 px-3 sm:pt-10"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-2 lg:order-1">
                    <div className="flex justify-center   lg:pt-4 pt-10">
                      <div className="mr-4 p-3 text-center">
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 1
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={e => {
                            e.preventDefault()
                            setOpenTab(1)
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          <i class="fas fa-info-circle  text-lg leading-lg"></i>
                        </a>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 2
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={e => {
                            e.preventDefault()
                            setOpenTab(2)
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          <i class="fas fa-code text-lg leading-lg"></i>
                        </a>
                      </div>
                      {/*
                      <div className="mr-4 p-3 text-center">
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 3
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={e => {
                            e.preventDefault()
                            setOpenTab(3)
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          <i class="far fa-address-card text-lg leading-lg"></i>
                        </a>
                      </div>
                      */}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="relative flex flex-col min-w-0 break-words   w-full mb-6  ">
                      <div className="px-4 py-4 flex-auto">
                        <div className="tab-content tab-space">
                          <div
                            className={openTab === 1 ? "block" : "hidden"}
                            id="link1"
                          >
                            <div className="text-center mt-6">
                              <h3 className="text-3xl  font-bold text-gray-500 mb-2 uppercase">
                                {nombre}
                              </h3>
                              <div className="mb-2 text-gray-700  ">
                                <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                {profesion}
                              </div>
                              <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                                Madrid, España
                              </div>
                            </div>
                            <div className="mt-5 pt-5 border-t border-gray-300 text-center">
                              <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 ">
                                  <p className="italic text-bold text-md leading-relaxed text-gray-800">
                                    <span className="text-xl">"</span>
                                    {contenido}
                                    <span className="text-xl">"</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={openTab === 2 ? "block" : "hidden"}
                            id="link2"
                          >
                            <h1 className="text-center   lg:pt-6 text-3xl  font-bold text-gray-800 mb-2 uppercase ">
                              Conocimientos
                            </h1>
                            <div className=" py-4   pt-6 pb-8 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 xl:grid-cols-11 gap-2 p-2 ">
                              {proyects.map(skill => {
                                const { titulo, avatarcode, colors } = skill
                                return (
                                  <>
                                    <div
                                      className="p-1 mx-auto rounded-full"
                                      style={{ backgroundColor: `${colors}` }}
                                    >
                                      <img
                                        src={avatarcode.url}
                                        alt={titulo}
                                        className="w-12 p-1 h-10"
                                        title={titulo}
                                      />
                                    </div>
                                  </>
                                )
                              })}
                            </div>

                            <div className="  lg:pt-4   grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-2   pt-4  ">
                              <div className="  text-center">
                                <p className="text-xs   text-bold uppercase border-b-4 border-blue-200 rounded-full">
                                  Backend
                                </p>
                              </div>
                              <div className=" text-center">
                                <p className="text-xs  text-bold uppercase border-b-4 border-orange-200 rounded-full">
                                  Frontend
                                </p>
                              </div>
                              <div className=" text-center">
                                <p className="text-xs   text-bold uppercase border-b-4 border-green-200 rounded-full">
                                  SQL y NOSQL
                                </p>
                              </div>
                              <div className="  text-center">
                                <p className="text-xs  focus: text-bold uppercase border-b-4 border-purple-200 rounded-full">
                                  Estilos
                                </p>
                              </div>
                              <div className="  text-center">
                                <p className="text-xs   text-bold uppercase border-b-4 border-gray-200 rounded-full">
                                  Servidores
                                </p>
                              </div>
                              <div className="  text-center">
                                <p className="text-xs   text-bold uppercase border-b-4 border-yellow-200 rounded-full">
                                  Otros
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*
                          <div
                            className={openTab === 3 ? "block" : "hidden"}
                            id="link3"
                          >
                            <p>
                              EmAIL
                              <br />
                              <br /> JEFFERSONYAJAMIN@GMAIL.COM
                            </p>
                          </div>
                          */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="  text-bold text-sm leading-relaxed text-gray-500 text-center opacity-50">
                      <i className="far fa-envelope mr-2 text-md text-gray-500"></i>
                      jeffersonyajamin@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContenidoIndex
