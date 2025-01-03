const Spinner = () => {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  
  export default Spinner