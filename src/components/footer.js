import React from "react"

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700   ">
        <div
          className="flex pt-6 pb-10 mx-auto md:w-8/12  lg:w-9/12 xl:w-8/12 container text-gray-400 text-sm flex-col
      md:flex-row  text-center"
        >
          <div className="mt-2 opacity-75 text-xs">
            © Copyright 2020. Todos los derechos reservados.
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex justify-center md:justify-start">
            <a
              href="https://github.com/jefferbrown"
              rel="noreferrer"
              className="w-6 mx-1"
              target="_blank"
            >
              <i className="fab fa-github  text-lg hover:text-pink-400 leading-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-125  "></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jefferson-yajamin/"
              rel="noreferrer"
              target="_blank"
              className="w-6 mx-1 "
            >
              <i className="fab fa-linkedin-in hover:text-blue-400 text-lg leading-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-125 "></i>
            </a>
            <a
              href="https://www.instagram.com/jefferbwn/"
              rel="noreferrer"
              className="w-6 mx-1"
              target="_blank"
            >
              <i className="fab fa-instagram  text-lg hover:text-purple-400 leading-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-125"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
