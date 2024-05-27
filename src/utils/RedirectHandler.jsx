import { useLocation } from "react-router-dom";
import redirects from "../redirects.json";
import ErrorPage from "../components/ErrorPage";

const RedirectHandler = () => {
  const location = useLocation();

  let returnVal = null;
  const path = location.pathname.substring(1); // Remove the leading '/'

  const redirectTo = redirects[path];

  if (redirectTo) {
    window.location.href = redirectTo; // Redirect to the external link
  } else {
    returnVal = <ErrorPage />;
  }
  // If no match is found, do nothing and let the router render the original path

  return returnVal;
};

export default RedirectHandler;
