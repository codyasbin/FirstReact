import React from "react";

export default function Footer(props) {
  return (
    <div className="mt-0 mb-0 ">
      {/* create a footer for the Website Asbins Playground  */}
      <footer className="text-center p-4 bg-dark text-white ">
        <p>
          Website Designed by: Asbin Magar, Chitwan Nepal
          <br />
          &copy; 2024 All Rights Reserved
        </p>
        <p>{props.message}</p>
      </footer>
    </div>
  );
}
