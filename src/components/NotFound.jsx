
export const NotFound = () => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 class="text-6xl font-bold text-white mb-4" style={{ textAlign: 'center', flexGrow: 1, color: '#CFA746' }}>404</h1>
        <p class="text-2xl text-white mb-6">Oops! Page Not Found</p>
        <p class="text-white mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a href="/"
          className="bg-[#CFA746] hover:bg-[#B08E3B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}