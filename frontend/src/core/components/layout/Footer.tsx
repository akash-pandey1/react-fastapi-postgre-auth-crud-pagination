export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
  
            <p className="text-sm">
              © {new Date().getFullYear()} MyApp. All rights reserved.
            </p>
  
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
  
          </div>
        </div>
      </footer>
    );
  }