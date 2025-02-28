import ProjectCard from "../components/project-card";

export const metadata = {
  title: "Projects",
  description: "A collection of personal projects and experiments I've built.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Banjo Rolls Deluxe",
      description: "Practice banjo rolls. Deluxe.",
      icon: "/attachments/banjo-rolls-deluxe-icon.png",
      href: "https://banjo-rolls-deluxe.twait.dev",
    },
    {
      title: "Desolation Rows",
      description:
        "Can AI write like Bob Dylan? What if 'A Hard Rain’s A-Gonna Fall' kept going?",
      icon: "/attachments/desolation-rows-icon.png",
      href: "https://desolation-rows.twait.dev",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            icon={project.icon}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
