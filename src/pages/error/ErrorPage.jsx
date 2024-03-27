import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center mt-[100px] h-screen">
      <h2 className="font-bold text-4xl ">404 Page Not Found</h2>
      <div>
        <h1 className="font-bold text-2xl ">Oops!</h1>
        <p className=" text-red-500">
          Sorry, an unexpected error has occurred.
        </p>
        <Link to={"/"}>
          <Button variant="outlined" className="flex mt-6 items-center gap-3">
            Got Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
