import React from "react"
const Header = props => {
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relativebg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <a
            className="text-white
                 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            href="/"
          >
            Jeffer Brown
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
