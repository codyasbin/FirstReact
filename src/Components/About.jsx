import React, { useState } from "react";

export default function About() {
  const [more, setMore] = useState(false);

  const checkReadMore = () => {
    setMore(true);
  };

  return (
    <>
      <div>
        <div className="jumbotron-fluid text-center mt-28 mb-4">
          <h1 className="display-3">About Asbins Playground</h1>
          <p className="lead">Introduction</p>
          <hr className="my-2" />
        </div>
      </div>

      <div className="mb-4 px-4 flex flex-col justify-center items-center">
        <>
          <p>
            Asbins Playground is an innovative web platform that serves as a
            dynamic showcase of cutting-edge functions and applications
            developed using the React JavaScript library. This digital
            playground stands out as a testament to the versatility and power of
            React, offering users an immersive experience as they explore a
            myriad of functionalities and applications crafted with precision
            and creativity. The platform not only showcases existing projects
            but also serves as an ongoing development hub where new ideas are
            brought to life. At its core, Asbins Playground is a testament to
            the endless possibilities that React offers for building interactive
            and user-friendly web applications. React, developed and maintained
            by Facebook, has gained immense popularity for its declarative and
            component-based approach to building user interfaces. Asbins
            Playground leverages this technology to its fullest, providing a
            diverse array of applications that showcase the prowess of React in
            creating seamless, responsive, and engaging user experiences. One of
            the distinctive features of Asbins Playground is its commitment to
            ongoing development.
          </p>

          {more ? (
            <>
              <p>
                The platform serves as a living laboratory, constantly evolving
                and introducing new applications and functionalities. This
                commitment to continuous improvement reflects the dynamic nature
                of web development and the adaptability of React in facilitating
                iterative enhancements. Users visiting Asbins Playground can
                expect to encounter not only a diverse range of applications but
                also witness the evolution of existing projects and the
                introduction of novel ideas. Navigating through Asbins
                Playground, users are greeted with a visually appealing and
                intuitive interface that mirrors the modern design principles
                championed by React. The platform's responsive design ensures a
                seamless experience across various devices, from desktops to
                smartphones. The user interface is thoughtfully crafted to
                facilitate easy exploration, with clear navigation menus guiding
                users through the diverse range of applications available. The
                applications featured on Asbins Playground span a wide spectrum
                of functionalities, catering to different needs and interests.
                From interactive data visualization tools to immersive
                multimedia experiences, each application is a testament to the
                flexibility and scalability of React. The platform serves as an
                educational resource, allowing developers, students, and
                technology enthusiasts to gain insights into best practices,
                coding techniques, and the implementation of advanced features
                with React. Asbins Playground is not merely a collection of
                disparate applications but rather a cohesive ecosystem where
                each project contributes to the overall narrative of what React
                can achieve. Each application is a showcase of the developer's
                skill, creativity, and problem-solving abilities. The platform
                encourages collaboration and knowledge sharing, fostering a
                community of developers who can learn from each other's work,
                provide feedback, and contribute to the collective growth of the
                React ecosystem. In addition to its educational and
                developmental aspects, Asbins Playground also serves as a source
                of inspiration for businesses and individuals looking to harness
                the power of React for their own projects. By demonstrating
                real-world applications and solutions, the platform empowers
                users to envision the possibilities and capabilities of React in
                addressing diverse requirements across industries. In
                conclusion, Asbins Playground stands as a vibrant testament to
                the capabilities of React in the realm of web development. Its
                ever-expanding collection of functions and applications,
                combined with a commitment to ongoing development, makes it a
                valuable resource for developers and enthusiasts alike. As a
                playground that embraces creativity, innovation, and
                collaboration, Asbins Playground continues to be a driving force
                in shaping the future of web development through the lens of
                React.
              </p>
            </>
          ) : (
           
              <button
                className="lead btn-dark btn-sm   "
                onClick={checkReadMore}
              >
                Read More
              </button>
            
          )}
        </>
      </div>
    </>
  );
}
