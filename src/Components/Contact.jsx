import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container my-36 text-center bg-slate-500 py-20"  >
        <h2 className="h2">Modal Scroll Example</h2>
        <p className="p">
          Use the .modal-dialog-scrollable className to enable scrolling inside
          the modal.
        </p>

        <div className="max-w-xs mx-auto mt-8">
        <button className="group relative flex flex-col items-center w-full h-12 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:shadow-outline-blue active:bg-blue-600">
  <span className="p-2">Hover me</span>
  <span className="text-sm outline-none outline-red-500 bg-white absolute top-full left-0 w-full opacity-0 mt-2 text-center py-1 font-thin group-hover:opacity-100 group-hover:text-black">
    Hover button
  </span>
</button>


    </div>
      </div>
    </>
  );
};

export default Contact;
