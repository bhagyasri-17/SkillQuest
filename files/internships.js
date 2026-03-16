const INTERNSHIPS = [
  {
    id: 1, title: 'Frontend / Web Development Intern', company: 'Various Companies', domain: 'webdev', type: 'remote',
    location: 'Remote / Hybrid', stipend: '₹5,000–15,000/month', paid: true,
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://internshala.com/internships/web-development-internship/',
    logo: '💻', logoColor: '#0ea5e9',
  },
  {
    id: 2, title: 'Machine Learning Intern', company: 'Various Companies', domain: 'ml', type: 'remote',
    location: 'Remote', stipend: '₹5,000–15,000/month', paid: true,
    tags: ['Python', 'ML', 'Scikit-learn'],
    url: 'https://internshala.com/internships/machine-learning-internship/',
    logo: '🤖', logoColor: '#22c55e',
  },
  {
    id: 3, title: 'Android Development Intern', company: 'Various Companies', domain: 'mobile', type: 'remote',
    location: 'Remote', stipend: '₹5,000–12,000/month', paid: true,
    tags: ['Kotlin', 'Android', 'Firebase'],
    url: 'https://internshala.com/internships/android-development-internship/',
    logo: '📱', logoColor: '#ef4444',
  },
  {
    id: 4, title: 'Data Analytics Intern', company: 'Various Companies', domain: 'data', type: 'hybrid',
    location: 'Hybrid / Remote', stipend: '₹5,000–18,000/month', paid: true,
    tags: ['SQL', 'Excel', 'Tableau'],
    url: 'https://internshala.com/internships/data-analytics-internship/',
    logo: '📊', logoColor: '#f97316',
  },
  {
    id: 5, title: 'UI/UX Design Intern', company: 'Various Companies', domain: 'design', type: 'remote',
    location: 'Remote', stipend: '₹5,000–10,000/month', paid: true,
    tags: ['Figma', 'User Research', 'Prototyping'],
    url: 'https://internshala.com/internships/graphic-design-internship/',
    logo: '🎨', logoColor: '#a78bfa',
  },
  // {
  //   id: 6, title: 'Full Stack Web Intern', company: 'LetsGrowMore', domain: 'webdev', type: 'remote',
  //   location: 'Remote', stipend: 'Free + Certificate', paid: false,
  //   tags: ['HTML/CSS', 'JavaScript', 'Node.js'],
  //   url: 'https://letsgrowmore.in/programs/',
  //   logo: '🌱', logoColor: '#4ade80',
  // },
  {
    id: 7, title: 'Cloud Computing Intern', company: 'Various Companies', domain: 'webdev', type: 'remote',
    location: 'Remote / On-site', stipend: '₹5,000–10,000/month', paid: true,
    tags: ['AWS', 'Linux', 'DevOps'],
    url: 'https://internshala.com/internships/cloud-computing-internship/',
    logo: '☁️', logoColor: '#60a5fa',
  },
  {
    id: 8, title: 'Data Science Intern', company: 'Various Companies', domain: 'ml', type: 'remote',
    location: 'Remote', stipend: '₹5,000–12,000/month', paid: true,
    tags: ['Python', 'Pandas', 'NumPy'],
    url: 'https://internshala.com/internships/data-science-internship/',
    logo: '🔬', logoColor: '#e8d5b0',
  },
  {
    id: 9, title: 'UI/UX & Product Design Intern', company: 'Various Startups', domain: 'design', type: 'hybrid',
    location: 'Hybrid', stipend: '₹8,000–20,000/month', paid: true,
    tags: ['Figma', 'Wireframing', 'Prototyping'],
    url: 'https://www.linkedin.com/jobs/search/?keywords=ui+ux+design+intern&f_E=1&f_JT=I',
    logo: '✏️', logoColor: '#f472b6',
  },
  {
    id: 10, title: 'SQL & Business Intelligence Intern', company: 'Various Companies', domain: 'data', type: 'remote',
    location: 'Remote', stipend: '₹5,000–10,000/month', paid: true,
    tags: ['SQL', 'Power BI', 'Python'],
    url: 'https://internshala.com/internships/sql-internship/',
    logo: '📈', logoColor: '#f59e0b',
  },
];

function renderCards(list) {
  const grid = document.getElementById('internshipGrid');
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted);font-size:0.9rem;grid-column:1/-1">No internships match this filter. Try a different combination.</p>`;
    return;
  }

  list.forEach((item, i) => {
    const card = document.createElement('a');
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'intern-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.style.animation = 'fadeSlideUp 0.4s ease both';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <div class="intern-card-top">
        <div class="intern-logo" style="background:${item.logoColor}22;color:${item.logoColor}">${item.logo}</div>
        <span class="intern-tag ${item.paid ? 'paid' : 'free'}">${item.paid ? 'Stipend' : 'Certificate'}</span>
      </div>
      <h3>${item.title}</h3>
      <div class="company">${item.company}</div>
      <div class="location"><i class="fas fa-map-marker-alt" style="margin-right:4px;font-size:0.7rem"></i>${item.location}</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.5rem">
        ${item.tags.map(t => `<span style="background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:0.15rem 0.5rem;font-size:0.72rem;color:var(--muted)">${t}</span>`).join('')}
      </div>
      <div class="intern-card-footer">
        <span class="stipend">💰 ${item.stipend}</span>
        <span class="apply-link">View Listings <i class="fas fa-external-link-alt" style="font-size:0.65rem"></i></span>
      </div>
    `;
    grid.appendChild(card);
  });

  document.getElementById('resultCount').textContent = `${list.length} listing${list.length !== 1 ? 's' : ''} found`;
}

function filterInternships() {
  const domain = document.getElementById('domainFilter').value;
  const type   = document.getElementById('typeFilter').value;

  let filtered = INTERNSHIPS;
  if (domain !== 'all') filtered = filtered.filter(i => i.domain === domain);
  if (type   !== 'all') filtered = filtered.filter(i => i.type   === type);

  renderCards(filtered);
}

// Init
renderCards(INTERNSHIPS);
document.getElementById('resultCount').textContent = `${INTERNSHIPS.length} listings found`;
