import { Link } from "@remix-run/react";
import { projects } from "../components/projectsData";

const technologyColors: { [key: string]: string } = {
  "TypeScript": "bg-blue-500",
  "React": "bg-sky-400",
  "Next.js": "bg-gray-700",
  "Node.js": "bg-green-500",
  "Express.js": "bg-orange-500",
  "AWS": "bg-orange-500",
  "JavaScript": "bg-yellow-500",
  "Supabase": "bg-green-500",
  "Spotify API": "bg-green-500"
};

export default function ProjectsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A collection of projects that showcase my skills in full-stack development, 
          problem-solving, and creating user-centric applications.
        </p>
      </div>

      {/* Back to Home */}
      <div className="mb-12 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          // Create specific route for each project
          const getProjectRoute = (title: string) => {
            switch (title) {
              case "Midas Core: Balances API":
                return "/projects/midas-core";
              case "Anime Directory":
                return "/projects/anime-directory";
              case "HTTP Backends (Java & Node)":
                return "/projects/http-backend";
              case "Drop That":
                return "/projects/dropthat";
              default:
                return "/";
            }
          };
          
          return (
            <Link 
              key={index} 
              to={getProjectRoute(project.title)}
              className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Header */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
                        technologyColors[tech] || "bg-gray-500"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-full bg-gray-500 text-white text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                    View Project Details
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Want to see more of my work or discuss a potential collaboration?
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
