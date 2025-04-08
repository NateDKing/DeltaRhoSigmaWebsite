
export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-gold mb-4 text-center flex-1">404</h1>
        <p className="text-2xl text-white mb-6">Oops! Page Not Found</p>
        <p className="text-white mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a href="/"
          className="bg-primary-gold hover:bg-primary-gold-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
}