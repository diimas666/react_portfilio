import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../helpers/projectsList.js';
import { Project } from '../components/project/Project';

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const loadMoreProjects = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => prev + 6);
      setLoading(false);
      AOS.refresh(); // 🔥 Перезапускаем анимацию после загрузки новых проектов
    }, 1500);
  };

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1" data-aos="fade-up">
          Projects
        </h2>
        <ul className="projects">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Project
              key={project.id}
              title={project.title}
              img={project.img}
              index={index}
              data-aos="fade-up"
            />
          ))}
        </ul>
        {loading && <div className="skeleton"></div>}
        <div className="w100">
          {!loading && visibleProjects < projects.length && (
            <button onClick={loadMoreProjects} className="btn btn-center">
              Load more...
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export { Projects };
