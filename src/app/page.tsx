import Link from "next/link"

function App() {
  return (
    <div className="px-14 py-28">
      <Link
        className="m-6 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-100 active:border-gray-400 text-gray-400 hover:text-gray-100 active:text-gray-400 transition-all duration-50"
        href="/cube"
      >
        Standart Cube
      </Link>
      <Link
        className="m-6 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-100 active:border-gray-400 text-gray-400 hover:text-gray-100 active:text-gray-400 transition-all duration-50"
        href="/orbitrian-move"
      >
        Orbitrian move
      </Link>
      <Link
        className="m-6 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-100 active:border-gray-400 text-gray-400 hover:text-gray-100 active:text-gray-400 transition-all duration-50"
        href="/spot-light"
      >
        Spot light
      </Link>
      <Link
        className="m-6 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-100 active:border-gray-400 text-gray-400 hover:text-gray-100 active:text-gray-400 transition-all duration-50"
        href="/sphere"
      >
        Sphere
      </Link>
      <Link
        className="m-6 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-100 active:border-gray-400 text-gray-400 hover:text-gray-100 active:text-gray-400 transition-all duration-50"
        href="/earth"
      >
        Earth Planet
      </Link>
    </div>
  )
}

export default App
