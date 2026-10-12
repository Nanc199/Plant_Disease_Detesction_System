import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20" id="about">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 max-w-3xl">
          <h3 className="font-bold text-lg mb-4">About This Project</h3>
          <p className="text-gray-600 text-sm">
            This Plant Disease Detection System uses deep learning and the PlantVillage dataset
            to identify plant diseases with high accuracy.
          </p>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Plant Disease Detection System. .
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-primary transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
