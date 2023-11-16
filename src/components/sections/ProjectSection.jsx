import React from 'react';
// import icon from '../../assets/svgs/icon.svg';
import { ProjectDetails } from '../../utils/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectSection = () => {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50" id="work">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium">work</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        {ProjectDetails.map((project) => (
          <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
            {/* image container */}
            <div
              key={project.id}
              className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r"
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                />
              </a>
            </div>
            <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
              <p className="text-lg md:text-xl font-semibold text-gray-900 capitalize">
                {project.name}
              </p>
              <p className="text-normal text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p className="text-normal text-sm font-medium">{stack}</p>
                  </div>
                ))}
              </div>
              <div className="flex">
                <a
                  href={project.link}
                  className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-external-link"
                  >
                    <g id="Icon">
                      <path
                        id="Vector"
                        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M15 3H21V9"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M10 14L21 3"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href={project.git}
                  className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="lucide lucide-external-link"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
