import { projects } from "./projectsData";
import { Link } from "@remix-run/react";

const technologyColors: { [key: string]: string } = {
  "TypeScript": "bg-blue-500",
  "React": "bg-sky-400",
  "Next.js": "bg-gray-700",
  "Node.js": "bg-green-500",
  "Express.js": "bg-orange-500",
  "AWS": "bg-orange-500",
  "JavaScript": "bg-yellow-500",
  "Supabase": "bg-green-500",
  "Spotify API": "bg-green-500",
  "PostgreSQL": "bg-blue-600",
  "OpenAI": "bg-emerald-600",
  "Tailwind CSS": "bg-cyan-500",
  "shadcn ui": "bg-purple-500",
  "Vercel": "bg-black"
};

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side - Title */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Projects
          </h2>
        </div>
        
        {/* Right side - Project entries */}
        <div className="lg:w-2/3 space-y-8">
          {projects.slice(0, 4).map((project, index) => {
            // Create specific route for each project
            const getProjectRoute = (title: string) => {
              switch (title) {
                case "Harvest Hub":
                  return "/projects/harvest-hub";
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
                className="block text-left group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      View Details →
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                        technologyColors[tech] || "bg-gray-500"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Click to view project details, architecture, and learnings
                  </p>
                </div>
              </Link>
            );
          })}
          
          {/* View All Projects Button */}
          <div className="pt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
