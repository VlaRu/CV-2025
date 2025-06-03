import projectsData from './dataProject';

export function generateProjectCards() {
  const projectsContainer = document.querySelector('.project_card-wrapper');
  
  if (!projectsContainer) {
    console.error('Projects container not found');
    return;
  }

  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project_card-container';
    
    projectCard.innerHTML = `
      <a href="${project.liveLink}" target="_blank">
        <img src="${project.projectImage}" alt="${project.title}" class="project-images">
      </a>
      <div class="technology">
        ${project.technologies.map(tech => `
          <img src="${tech}" alt="technology" width="40" height="40">
        `).join('')}
      </div>
      <div class="link-source">
        <a href="${project.sourceLink}">link to source</a>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
} 