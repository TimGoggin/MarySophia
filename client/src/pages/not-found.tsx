
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="wavy-gradient"></div>
      </div>
      <div className="relative z-20 text-center px-4">
        <h1 className="font-playfair text-5xl text-white mb-6">404</h1>
        <p className="text-white font-open-sans text-xl mb-8">
          The page you're looking for doesn't exist
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-full transition duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Return Home
        </button>
      </div>
    </div>
  );
}
