import { Button } from "../../ui/button";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between fixed top-0 left-0 w-full bg-white shadow px-4 py-2 z-50">
        <div className="flex items-center space-x-10 text-black font-semibold font-sans-serif">
          <a href="./App.tsx" target="_blank">
            <img
              src="./img/logo.png "
              className="h-20 scale-150"
              alt="Defino Logo"
            />
          </a>

          <ul className="gap-7 flex items-center">
            <Link to="/home">
              <li className="text-black font-semibold hover:text-green-dark transition duration-300">
                Home
              </li>
            </Link>
            <Link to="/collection">
              <li className="text-black font-semibold hover:text-green-dark transition duration-300">
                Collections
              </li>
            </Link>
            <Link to="/home">
              <li className="text-black font-semibold hover:text-green-dark transition duration-300">
                About
              </li>
            </Link>
            <Link to="/home">
              <li className="text-black font-semibold hover:text-green-dark transition duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <Button className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#007a5e"
              className="bi-bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </Button>

          <Button className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#007a5e"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </Button>

          <Button className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#007a5e"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </Button>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
