import { useNavigate } from 'react-router';

export default function CreateDefaultNotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>

        <h2 className="text-3xl font-medium text-gray-700">
          Page Not Found
        </h2>

        <p className="text-lg text-gray-500 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <button
          type="button"
          onClick={handleBack}
          className="mt-4 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
