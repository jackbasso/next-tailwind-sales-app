import React from "react";
import { AiOutlineCloudDownload, AiOutlinePrinter } from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

function page() {
  return (
    <div className="bg-slate-50">
      {/* HEADER */}
      <div className="flex justify-between items-center py-8 md:py-16 px-4 md:px-16">
        <div className="flex gap-4">
          <button
            className="flex items-center space-x-2 px-3 py-2  rounded-sm
          border-2 border-slate-300"
          >
            <BsLayoutTextWindowReverse />
            <span>Preview</span>
          </button>
          <button
            className="flex items-center space-x-2 px-3 py-2  rounded-sm
          border border-blue-200"
          >
            <AiOutlinePrinter />
            <span>Print</span>
          </button>
          <button
            className="flex items-center space-x-2 px-3 py-2  rounded-sm
          border border-blue-200"
          >
            <AiOutlineCloudDownload />
            <span>Download</span>
          </button>
        </div>

        <div className="flex gap-4">
          <button>Save Online</button>
          <button
            className="flex items-center space-x-2 px-3 py-2  rounded-sm
          border border-blue-200"
          >
            <CiMail />
            <span>Send</span>
          </button>
        </div>
      </div>
      {/* INVOICE FORM */}

      <div classname="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form classname="space-y-6" action="#">
          <button
            type="submit"
            classname="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div classname="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a href="#" classname="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </a>
          </div>
        </form>
      </div>

      {/* INVOICE PREVIEW */}
      <h2>Create New Invoice</h2>
    </div>
  );
}

export default page;
