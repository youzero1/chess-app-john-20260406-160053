import ChessBoard from '@/components/ChessBoard'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="relative">
        <ChessBoard />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
            <i className="fas fa-redo text-gray-700"></i>
          </button>
          <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
            <i className="fas fa-search text-gray-700"></i>
          </button>
          <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
            <i className="fas fa-user text-gray-700"></i>
          </button>
          <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
            <i className="fas fa-map-marker-alt text-gray-700"></i>
          </button>
        </div>
      </div>
    </div>
  )
}