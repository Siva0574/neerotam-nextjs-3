"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { allProjects, Project } from "@/data/projects";

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "image", label: "Images" },
    { id: "video", label: "Videos" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === selectedCategory);

  const handleProjectClick = (project: Project) => {
    if (project.type === "video" || project.type === "image") {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section className="py-5  lg:py-5 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-center">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onProjectClick={() => handleProjectClick(project)}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <span className="material-symbols-outlined text-5xl sm:text-6xl text-slate-300 dark:text-slate-600 mb-4">
                inbox
              </span>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Media Modal - handles both video and image */}
      {selectedProject && (
        <MediaModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function ProjectCard({
  project,
  onProjectClick,
}: {
  project: Project;
  onProjectClick: () => void;
}) {
  return (
    <div
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 hover:shadow-2xl transition-all cursor-pointer"
      onClick={onProjectClick}
    >
      {/* Media Container */}
      <div className="aspect-[4/3] relative bg-slate-200 dark:bg-slate-700">
        {project.type === "video" ? (
          // Video Thumbnail with Play Button
          <div className="relative w-full h-full">
            <Image
              src={project.thumbnail || project.media}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Play video"
              >
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  play_arrow
                </span>
              </button>
            </div>
           
          </div>
        ) : (
          // Image
          <Image
            src={project.media}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}

        {/* Gradient Overlay - fixed so it doesn't hide text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-1 left-1 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-lg">
        <span className="text-white text-[10px] sm:text-xs font-bold capitalize">
          {project.category}
        </span>
      </div>
    </div>
  );
}

function MediaModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Fix mobile scroll issue - prevent body scroll when modal is open
  useEffect(() => {
    // Save current scroll position
    const scrollY = window.scrollY;
    
    // Prevent body scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      // Restore body scroll when modal closes
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isVideo = project.type === "video";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleOutsideClick}
    >
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Video Player */}
        {isVideo ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              src={project.media}
              controls
              autoPlay
              className="absolute inset-0 w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          // Image Display
          <div className="relative w-full bg-black">
            <Image
              src={project.media}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[80vh]"
              priority
            />
          </div>
        )}

        {/* Media Info */}
        <div className="p-4 sm:p-6 bg-slate-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">
                location_on
              </span>
              {project.location}
            </span>
            
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">
                category
              </span>
              <span className="capitalize">{project.category}</span>
            </span>

            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">
                {isVideo ? "videocam" : "image"}
              </span>
              <span className="capitalize">{project.type}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
