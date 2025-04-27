import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left">
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 text-center md:text-right text-secondary-400">
            Made with <FaHeart className="inline text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer