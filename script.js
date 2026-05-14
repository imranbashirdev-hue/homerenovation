
  // Mobile menu toggle
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  if(toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // project data
  const projectsData = [
    { title: "Modern Kitchen Overhaul", category: "kitchen", img: "https://placehold.co/600x400/cfc3b2/c16529?text=Kitchen+remodel" },
    { title: "Spa-like Bathroom", category: "bath", img: "https://placehold.co/600x400/cfc3b2/c16529?text=Luxury+Bathroom" },
    { title: "Open concept living", category: "living", img: "https://placehold.co/600x400/cfc3b2/c16529?text=Living+space" },
    { title: "Kitchen & island extension", category: "kitchen", img: "https://placehold.co/600x400/cfc3b2/c16529?text=Kitchen+Island" },
    { title: "Master Bath suite", category: "bath", img: "https://placehold.co/600x400/cfc3b2/c16529?text=Master+Bath" },
    { title: "Cozy family room", category: "living", img: "https://placehold.co/600x400/cfc3b2/c16529?text=Family+Room" }
  ];

  function renderProjects(filter = "all") {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const filtered = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(proj => `
      <div class="project-card">
        <img src="${proj.img}" alt="${proj.title}">
        <div class="project-info"><h4>${proj.title}</h4><span style="color:#c16529;">${proj.category}</span></div>
      </div>
    `).join('');
  }

  // filter buttons active
  const filterBtns = document.querySelectorAll('.filter-btn');
  if(filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');
        renderProjects(filterVal);
      });
    });
  }
  renderProjects('all');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId === "#" || targetId === "") return;
      const targetElem = document.querySelector(targetId);
      if(targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
        if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
      }
    });
  });

  // contact form simple simulation
  const contactForm = document.getElementById('contactForm');
  const feedbackSpan = document.getElementById('formFeedback');
  if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim();
      if(!name) {
        feedbackSpan.innerHTML = 'Please enter your name.';
        feedbackSpan.style.color = '#b33';
        return;
      }
      feedbackSpan.innerHTML = `Thanks ${name}! Our team will reach out shortly.`;
      feedbackSpan.style.color = '#2a7f3e';
      contactForm.reset();
      setTimeout(() => { feedbackSpan.innerHTML = ''; }, 4000);
    });
  }
  // adjust testimonial scroll smooth
  const slider = document.querySelector('.testimonials-slider');
  if(slider) {
    slider.style.scrollBehavior = 'smooth';
  }
