const ROADMAPS = {
  dsa: {
    title: 'Data Structures & Algorithms',
    icon: '⚙️',
    desc: 'The most important skill for placements and technical interviews. Master this first.',
    duration: '4–6 months',
    phases: [
      {
        title: 'Programming Fundamentals',
        duration: '2–3 weeks',
        topics: ['Choose C++ or Python', 'Time & Space Complexity (Big O)', 'Recursion basics', 'STL / built-in data structures'],
      },
      {
        title: 'Linear Data Structures',
        duration: '3–4 weeks',
        topics: ['Arrays & Strings', 'Linked Lists (Singly, Doubly)', 'Stack & Queue', 'Hashing & HashMap'],
      },
      {
        title: 'Sorting & Searching',
        duration: '2 weeks',
        topics: ['Bubble, Selection, Insertion Sort', 'Merge Sort & Quick Sort', 'Binary Search & variants', 'Two-pointer technique'],
      },
      {
        title: 'Trees & Graphs',
        duration: '4–5 weeks',
        topics: ['Binary Trees & BST', 'Tree traversals (BFS, DFS)', 'Graph representation', 'Dijkstra, Bellman-Ford'],
      },
      {
        title: 'Advanced Topics',
        duration: '4–6 weeks',
        topics: ['Dynamic Programming (DP)', 'Greedy Algorithms', 'Backtracking', 'Tries & Segment Trees'],
      },
      {
        title: 'Interview Prep',
        duration: 'Ongoing',
        topics: ['LeetCode — 150 problems', 'Company-specific problems', 'Mock interviews', 'Revision & pattern recognition'],
      },
    ],
    tip: '📌 Resources: <strong>Striver\'s A-Z DSA sheet</strong>, NeetCode 150, Abdul Bari (YouTube), CLRS book for theory.',
  },

  webdev: {
    title: 'Web Development (Full Stack)',
    icon: '🌐',
    desc: 'Build real products. One of the most in-demand and portfolio-friendly skills.',
    duration: '5–7 months',
    phases: [
      { title: 'HTML & CSS Foundations', duration: '2 weeks', topics: ['HTML5 semantics', 'CSS Box Model, Flexbox', 'CSS Grid', 'Responsive Design'] },
      { title: 'JavaScript Core', duration: '3–4 weeks', topics: ['Variables, functions, loops', 'DOM manipulation', 'ES6+ (arrow fn, promises)', 'Fetch API & async/await'] },
      { title: 'Frontend Framework', duration: '4–5 weeks', topics: ['React.js basics', 'Components & Props', 'useState, useEffect hooks', 'React Router'] },
      { title: 'Backend (Node.js)', duration: '4–5 weeks', topics: ['Node.js & Express.js', 'REST API design', 'MongoDB & Mongoose', 'Authentication (JWT)'] },
      { title: 'DevTools & Deployment', duration: '2 weeks', topics: ['Git & GitHub', 'Vercel / Render deployment', 'Environment variables', 'Basic CI/CD'] },
      { title: 'Projects', duration: 'Ongoing', topics: ['To-Do App', 'Blog Platform', 'E-commerce (mini)', 'Contribute to open source'] },
    ],
    tip: '📌 Resources: <strong>The Odin Project</strong> (free & structured), Traversy Media, Fireship (YouTube), roadmap.sh/frontend',
  },

  ml: {
    title: 'Machine Learning & AI',
    icon: '🤖',
    desc: 'One of the hottest fields right now. Combine math, data, and code to build intelligent systems.',
    duration: '6–9 months',
    phases: [
      { title: 'Math Prerequisites', duration: '3–4 weeks', topics: ['Linear Algebra (matrices, vectors)', 'Probability & Statistics', 'Calculus basics (derivatives)', 'NumPy & Pandas'] },
      { title: 'Python for ML', duration: '2–3 weeks', topics: ['Python basics (if not known)', 'Matplotlib & Seaborn', 'Data cleaning & EDA', 'Scikit-learn intro'] },
      { title: 'Classical ML', duration: '4–6 weeks', topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forest', 'SVM, KNN, Naive Bayes', 'Model evaluation & overfitting'] },
      { title: 'Deep Learning', duration: '5–6 weeks', topics: ['Neural Networks (ANN)', 'TensorFlow / PyTorch basics', 'CNNs for image tasks', 'RNNs & LSTMs'] },
      { title: 'Specialization', duration: '4–6 weeks', topics: ['NLP (text classification)', 'Computer Vision', 'Recommendation systems', 'LLMs & prompt engineering'] },
      { title: 'Projects & Kaggle', duration: 'Ongoing', topics: ['Kaggle competitions', 'End-to-end ML pipeline', 'Deploy model with Flask/FastAPI', 'Research paper reading'] },
    ],
    tip: '📌 Resources: <strong>Andrew Ng\'s ML Specialization</strong> (Coursera), fast.ai, Kaggle Learn, StatQuest (YouTube)',
  },

  devops: {
    title: 'DevOps & Cloud',
    icon: '☁️',
    desc: 'The bridge between development and operations. Highly paid and in demand.',
    duration: '5–7 months',
    phases: [
      { title: 'Linux & Scripting', duration: '3 weeks', topics: ['Linux commands & file system', 'Shell scripting (Bash)', 'SSH & networking basics', 'Cron jobs & permissions'] },
      { title: 'Version Control & CI', duration: '2–3 weeks', topics: ['Git advanced (branching, rebase)', 'GitHub Actions basics', 'Automated testing pipelines', 'Pull request workflows'] },
      { title: 'Containerization', duration: '3–4 weeks', topics: ['Docker basics & Dockerfile', 'Docker Compose', 'Kubernetes intro (k8s)', 'Container registries'] },
      { title: 'Cloud Platforms', duration: '4–5 weeks', topics: ['AWS / GCP / Azure basics', 'EC2, S3, RDS services', 'IAM & security policies', 'Cloud networking (VPC)'] },
      { title: 'Infrastructure as Code', duration: '3 weeks', topics: ['Terraform fundamentals', 'Ansible playbooks', 'Helm charts (Kubernetes)', 'Environment management'] },
      { title: 'Monitoring & Practice', duration: 'Ongoing', topics: ['Grafana & Prometheus', 'Log management (ELK)', 'Incident response', 'Build portfolio projects'] },
    ],
    tip: '📌 Resources: <strong>KodeKloud</strong> (best hands-on platform), AWS free tier, TechWorld with Nana (YouTube), A Cloud Guru',
  },

  android: {
    title: 'Android Development',
    icon: '📱',
    desc: 'Build apps that run on 3+ billion devices. Kotlin is the modern standard.',
    duration: '4–6 months',
    phases: [
      { title: 'Kotlin Basics', duration: '2–3 weeks', topics: ['Kotlin syntax & types', 'OOP in Kotlin', 'Null safety', 'Coroutines basics'] },
      { title: 'Android Fundamentals', duration: '3–4 weeks', topics: ['Activities & Fragments', 'Layouts (XML / Jetpack Compose)', 'RecyclerView', 'Navigation Component'] },
      { title: 'Data & Networking', duration: '3 weeks', topics: ['Room Database (local)', 'Retrofit (API calls)', 'JSON parsing', 'Shared Preferences'] },
      { title: 'Architecture', duration: '3 weeks', topics: ['MVVM Pattern', 'LiveData & ViewModel', 'Repository Pattern', 'Dependency Injection (Hilt)'] },
      { title: 'Modern Android', duration: '3–4 weeks', topics: ['Jetpack Compose UI', 'Firebase integration', 'Google Maps SDK', 'Push notifications'] },
      { title: 'Play Store & Projects', duration: 'Ongoing', topics: ['App signing & release', 'Publish to Play Store', '3 complete apps for portfolio', 'Contribute to Android OSS'] },
    ],
    tip: '📌 Resources: <strong>Android Developers (developer.android.com)</strong>, Philipp Lackner (YouTube), Google Codelabs',
  },

  cybersec: {
    title: 'Cybersecurity',
    icon: '🛡️',
    desc: 'Protect systems and networks. One of the fastest-growing fields with high salaries.',
    duration: '6–8 months',
    phases: [
      { title: 'Networking Basics', duration: '3 weeks', topics: ['OSI Model & TCP/IP', 'DNS, HTTP, HTTPS', 'Firewalls & NAT', 'Wireshark basics'] },
      { title: 'Linux & Scripting', duration: '2–3 weeks', topics: ['Linux terminal fluency', 'Python scripting for security', 'Bash automation', 'File permissions & processes'] },
      { title: 'Security Fundamentals', duration: '3–4 weeks', topics: ['CIA Triad', 'Encryption & PKI', 'Authentication methods', 'Common attack types'] },
      { title: 'Ethical Hacking', duration: '5–6 weeks', topics: ['Kali Linux setup', 'Nmap & Metasploit basics', 'Web app hacking (OWASP Top 10)', 'SQL injection & XSS'] },
      { title: 'Defensive Security', duration: '3 weeks', topics: ['SIEM tools (Splunk)', 'Incident response', 'Log analysis', 'Vulnerability assessment'] },
      { title: 'Certifications & Labs', duration: 'Ongoing', topics: ['TryHackMe & HackTheBox', 'CEH or CompTIA Security+', 'CTF competitions', 'Bug bounty programs'] },
    ],
    tip: '📌 Resources: <strong>TryHackMe</strong> (best for beginners), TCM Security courses, NetworkChuck (YouTube), OWASP guides',
  },

  sql: {
    title: 'SQL & Databases',
    icon: '🗄️',
    desc: 'Every app uses data. SQL is essential for developers, analysts, and data scientists alike.',
    duration: '2–3 months',
    phases: [
      { title: 'SQL Basics', duration: '1–2 weeks', topics: ['SELECT, WHERE, ORDER BY', 'INSERT, UPDATE, DELETE', 'Filtering & sorting', 'DISTINCT & LIMIT'] },
      { title: 'Joins & Relationships', duration: '2 weeks', topics: ['INNER, LEFT, RIGHT JOINs', 'FULL OUTER JOIN', 'Self joins', 'Database relationships'] },
      { title: 'Advanced SQL', duration: '2–3 weeks', topics: ['GROUP BY & HAVING', 'Subqueries & CTEs', 'Window functions', 'Indexes & performance'] },
      { title: 'Database Design', duration: '2 weeks', topics: ['ER Diagrams', 'Normalization (1NF, 2NF, 3NF)', 'Primary & foreign keys', 'Schema design'] },
      { title: 'NoSQL Basics', duration: '1–2 weeks', topics: ['MongoDB intro', 'Document vs relational DBs', 'When to use NoSQL', 'Basic CRUD in MongoDB'] },
      { title: 'Real Projects', duration: 'Ongoing', topics: ['Design a library/e-commerce DB', 'Kaggle SQL challenges', 'HackerRank SQL problems', 'Integrate DB in a web app'] },
    ],
    tip: '📌 Resources: <strong>Mode SQL Tutorial</strong>, SQLZoo (interactive), W3Schools SQL, Stanford DB course (free)',
  },

  git: {
    title: 'Git & Open Source',
    icon: '🐙',
    desc: 'The #1 collaboration tool in tech. Every developer must know Git — and contributing to OSS boosts your resume.',
    duration: '3–5 weeks',
    phases: [
      { title: 'Git Basics', duration: '3–4 days', topics: ['init, add, commit', 'status, log, diff', 'Undoing changes (reset, revert)', 'gitignore'] },
      { title: 'Branching & Merging', duration: '4–5 days', topics: ['Creating branches', 'Merging strategies', 'Rebase vs Merge', 'Resolving conflicts'] },
      { title: 'GitHub Collaboration', duration: '1 week', topics: ['Fork & clone repos', 'Pull Requests', 'Code reviews', 'Issues & project boards'] },
      { title: 'Advanced Git', duration: '1 week', topics: ['Stash & cherry-pick', 'Git hooks', 'Tagging & releases', 'Squashing commits'] },
      { title: 'Open Source Contribution', duration: 'Ongoing', topics: ['Find beginner-friendly issues (good first issue)', 'Read CONTRIBUTING.md', 'Make your first PR', 'Hacktoberfest participation'] },
    ],
    tip: '📌 Resources: <strong>Pro Git Book</strong> (free online), Atlassian Git tutorials, GitHub Skills (github.com/skills)',
  },
};

function showRoadmap() {
  const skill = document.getElementById('skillSelect').value;
  const defaultEl = document.getElementById('skillDefault');
  const outputEl  = document.getElementById('roadmapOutput');

  if (!skill) {
    outputEl.classList.remove('visible');
    defaultEl.style.display = 'block';
    return;
  }

  const data = ROADMAPS[skill];
  defaultEl.style.display = 'none';

  // Meta
  document.getElementById('roadmapMeta').innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap">
      <div style="font-size:2.5rem">${data.icon}</div>
      <div>
        <div class="roadmap-title">${data.title}</div>
        <div class="roadmap-subtitle">${data.desc}</div>
      </div>
      <div style="margin-left:auto">
        <div style="background:rgba(96,165,250,0.1);border:1px solid rgba(96,165,250,0.2);color:#60a5fa;padding:0.4rem 1rem;border-radius:999px;font-size:0.8rem;font-weight:600">
          ⏱ ${data.duration}
        </div>
      </div>
    </div>
  `;

  // Phases
  const phasesEl = document.getElementById('roadmapPhases');
  phasesEl.innerHTML = data.phases.map((phase, i) => `
    <div class="phase-card" style="animation: fadeSlideUp 0.4s ${i * 0.07}s ease both; opacity:0; animation-fill-mode:forwards">
      <div class="phase-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="phase-info">
        <h4>${phase.title}</h4>
        <div class="phase-duration">${phase.duration}</div>
        <ul class="phase-topics">
          ${phase.topics.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  // Footer tip
  document.getElementById('roadmapFooter').innerHTML = `
    <strong style="color:var(--text)">Resources & Next Steps</strong>
    <p style="margin-top:0.4rem">${data.tip}</p>
  `;

  outputEl.classList.add('visible');
  outputEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
