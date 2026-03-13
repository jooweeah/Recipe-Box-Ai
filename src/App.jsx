function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">🍳</div>
        <h1 className="text-5xl font-bold text-amber-800 mb-3 tracking-tight">
          Recipe Box
        </h1>
        <p className="text-lg text-amber-700 mb-8">
          Your personal recipe manager. Save, organize, and rate all your favorite recipes in one place.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 text-lg cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
