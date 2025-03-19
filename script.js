// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const toggleMenuBtn = document.querySelector('.mobile-menu-btn');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    toggleMenuBtn.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
    
    // Features data
    const features = [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>`,
        title: "Community Hub",
        description: "Connect with developers from GDG chapters worldwide, build your profile and join the global tech community.",
        iconClass: "feature-icon-blue"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>`,
        title: "Event Management",
        description: "Discover, register, and participate in local and global GDG events, workshops, and conferences.",
        iconClass: "feature-icon-green"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>`,
        title: "Learning Resources",
        description: "Access curated learning paths, tutorials, and coding exercises across Web, Android, Cloud, and AI/ML.",
        iconClass: "feature-icon-red"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>`,
        title: "Tech Blog",
        description: "Read and contribute to our community blog featuring tech trends, tutorials, and success stories.",
        iconClass: "feature-icon-yellow"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>`,
        title: "Discussion Forum",
        description: "Ask questions, share knowledge, and collaborate with fellow developers on technical challenges.",
        iconClass: "feature-icon-blue"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>`,
        title: "Hackathon Platform",
        description: "Participate in or organize hackathons, form teams, submit projects, and compete for recognition.",
        iconClass: "feature-icon-green"
      }
    ];
    
    // Populate Features
    const featuresGrid = document.getElementById('features-grid');
    features.forEach((feature, index) => {
      const featureCard = document.createElement('div');
      featureCard.className = 'feature-card';
      featureCard.style.animationDelay = `${index * 100 + 300}ms`;
      featureCard.innerHTML = `
        <div class="feature-icon ${feature.iconClass}">
          ${feature.icon}
        </div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-description">${feature.description}</p>
      `;
      featuresGrid.appendChild(featureCard);
    });
    
    // Events data
    const events = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "DevFest 2023: Building for the Future",
        date: "Nov 15, 2023",
        location: "San Francisco, CA",
        attendees: 240,
        category: "Conference"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Android Dev Summit: Next Generation Apps",
        date: "Oct 22, 2023",
        location: "Online",
        attendees: 185,
        category: "Workshop"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Web Performance Optimization Masterclass",
        date: "Dec 5, 2023",
        location: "Berlin, Germany",
        attendees: 120,
        category: "Workshop"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "GDG Cloud: Serverless Architecture Summit",
        date: "Jan 14, 2024",
        location: "Tokyo, Japan",
        attendees: 175,
        category: "Conference"
      }
    ];
    
    // Populate Events
    const eventsGrid = document.getElementById('events-grid');
    
    function renderEvents(eventsList) {
      eventsGrid.innerHTML = '';
      eventsList.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.style.animationDelay = `${index * 150 + 100}ms`;
        eventCard.innerHTML = `
          <div class="event-image-container">
            <div class="event-overlay"></div>
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-category">
              <span class="chip chip-blue">${event.category}</span>
            </div>
          </div>
          <div class="event-content">
            <div class="event-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              ${event.date}
            </div>
            <h3 class="event-title">${event.title}</h3>
            <div class="event-location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ${event.location}
            </div>
            <div class="event-footer">
              <div class="event-attendees">
                <div class="attendee-avatars">
                  <div class="attendee-avatar"></div>
                  <div class="attendee-avatar"></div>
                  <div class="attendee-avatar"></div>
                </div>
                <span>${event.attendees}+ attending</span>
              </div>
              <button class="btn btn-outline">Register</button>
            </div>
          </div>
        `;
        eventsGrid.appendChild(eventCard);
      });
    }
    
    // Initialize Events
    renderEvents(events);
    
    // Event Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        const filteredEvents = filter === 'all' 
          ? events 
          : events.filter(event => event.category === filter);
        
        renderEvents(filteredEvents);
      });
    });
    
    // Resources data
    const resources = [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>`,
        title: "Modern Web Development with Angular",
        description: "Learn the fundamentals of building modern web applications using Angular framework.",
        category: "Web",
        level: "Intermediate",
        iconClass: "resource-icon-blue"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>`,
        title: "Android App Development Fundamentals",
        description: "Get started with Android development using Kotlin and the latest architecture patterns.",
        category: "Android",
        level: "Beginner",
        iconClass: "resource-icon-green"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>`,
        title: "Google Cloud Platform Essentials",
        description: "Explore the fundamentals of Google Cloud Platform and build scalable applications.",
        category: "Cloud",
        level: "Intermediate",
        iconClass: "resource-icon-yellow"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>`,
        title: "Machine Learning Fundamentals with TensorFlow",
        description: "Build and deploy machine learning models using TensorFlow and Google's ML tools.",
        category: "AI/ML",
        level: "Advanced",
        iconClass: "resource-icon-red"
      }
    ];
    
    // Populate Resources
    const resourcesGrid = document.getElementById('resources-grid');
    resources.forEach((resource, index) => {
      const resourceCard = document.createElement('div');
      resourceCard.className = 'resource-card';
      resourceCard.style.animationDelay = `${index * 150 + 100}ms`;
      resourceCard.innerHTML = `
        <div class="resource-icon ${resource.iconClass}">
          ${resource.icon}
        </div>
        <div class="resource-content">
          <div class="resource-tags">
            <span class="chip chip-blue">${resource.category}</span>
            <span class="chip chip-green">${resource.level}</span>
          </div>
          <h3 class="resource-title">${resource.title}</h3>
          <p class="resource-description">${resource.description}</p>
          <button class="btn btn-outline">Start Learning</button>
        </div>
      `;
      resourcesGrid.appendChild(resourceCard);
    });
    
    // Blog data
    const blogs = [
      {
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Build a Serverless Application with Firebase and Angular",
        excerpt: "Learn how to create a serverless web application using Firebase and Angular that scales automatically with your user base.",
        author: {
          name: "Alex Johnson",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        date: "Oct 12, 2023",
        readTime: "8 min"
      },
      {
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Machine Learning on the Edge: TensorFlow Lite for Android",
        excerpt: "Explore how to implement machine learning models directly on Android devices using TensorFlow Lite for improved performance and privacy.",
        author: {
          name: "Sarah Chen",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        date: "Sep 28, 2023",
        readTime: "12 min"
      },
      {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Web Performance Optimization Techniques for 2023",
        excerpt: "Discover the latest techniques and best practices for optimizing web performance to create lightning-fast user experiences.",
        author: {
          name: "Miguel Torres",
          avatar: "https://randomuser.me/api/portraits/men/67.jpg"
        },
        date: "Nov 05, 2023",
        readTime: "10 min"
      }
    ];
    
    // Populate Blogs
    const blogGrid = document.getElementById('blog-grid');
    blogs.forEach((blog, index) => {
      const blogCard = document.createElement('div');
      blogCard.className = 'blog-card';
      blogCard.style.animationDelay = `${index * 150 + 100}ms`;
      blogCard.innerHTML = `
        <div class="blog-image-container">
          <img src="${blog.image}" alt="${blog.title}" class="blog-image">
        </div>
        <div class="blog-content">
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-excerpt">${blog.excerpt}</p>
          <div class="blog-footer">
            <div class="blog-author">
              <img src="${blog.author.avatar}" alt="${blog.author.name}" class="author-avatar">
              <div class="author-info">
                <span class="author-name">${blog.author.name}</span>
                <span class="blog-date">${blog.date}</span>
              </div>
            </div>
            <span class="blog-read-time">${blog.readTime}</span>
          </div>
        </div>
      `;
      blogGrid.appendChild(blogCard);
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = document.getElementById('submitButton');
        const submitSpinner = document.getElementById('submitSpinner');
        const toastElement = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        // Get form data
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
        };
        
        // Show loading state
        submitButton.style.display = 'none';
        submitSpinner.classList.remove('hidden');
        
        // Simulate form submission (in a real app, you would send to server)
        setTimeout(() => {
          // In a real implementation, this would send to the email: geethikaadasari@gmail.com
          console.log('Form submitted:', formData);
          console.log('This would be sent to: geethikaadasari@gmail.com');
          
          // Hide loading state
          submitButton.style.display = 'block';
          submitSpinner.classList.add('hidden');
          
          // Show success toast
          toastMessage.textContent = 'Message sent successfully! We\'ll get back to you soon.';
          toastElement.classList.add('show');
          
          // Clear form
          contactForm.reset();
          
          // Hide toast after 5 seconds
          setTimeout(() => {
            toastElement.classList.remove('show');
          }, 5000);
        }, 1500);
      });
    }
    
    // Intersection Observer for animation
    const animatedElements = document.querySelectorAll('.feature-card, .event-card, .resource-card, .blog-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.animation = 'fadeUp 0.7s ease-out forwards';
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
    
    // Lazy Load Images
    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach(img => {
      // Add a small delay to simulate loading
      setTimeout(() => {
        img.style.opacity = '1';
        img.style.filter = 'blur(0)';
      }, 300);
    });
  });
  