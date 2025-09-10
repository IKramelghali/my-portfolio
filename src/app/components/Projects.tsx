const projects = [
  {
    title: "Application de gestion",
    description: "Un projet React + Laravel pour gérer le stock.",
    link: "https://github.com/mon-projet",
  },
  {
    title: "Site cinéma",
    description: "Un site listant les films avec API TMDB.",
    link: "https://github.com/mon-projet2",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Mes projets</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 hover:underline mt-3 inline-block"
              target="_blank"
            >
              Voir le projet →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
