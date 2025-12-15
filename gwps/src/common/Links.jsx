import HomePage from "../pages/HomePage";
import PrincipalPage from "../pages/PrincipalPage";
import AboutPage from "../pages/AboutPage";
import GalleryPage from "../pages/GalleryPage";
import LoginPage from "../pages/Loginpage";
import UploadPage from "../pages/UploadPage";

export const Links = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
    showInNavigation: true,
  },
  {
    name: "Principal",
    path: "/principal",
    element: <PrincipalPage />,
    showInNavigation: false,
  },
  {
    name: "About",
    path: "/about",
    element: <AboutPage />,
    showInNavigation: true,
  },
  {
    name: "Gallery",
    path: "/gallery",
    element: <GalleryPage />,
    showInNavigation: true,
  },
  {
    name: "Login",
    path: "/login",
    element: <LoginPage />,
    showInNavigation: true,
  },
  {
    name: "Upload",
    path: "/upload",
    element: <UploadPage />,
    showInNavigation: false,
  },
];
