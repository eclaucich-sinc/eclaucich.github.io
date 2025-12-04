// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    renderHeroSection();
    renderEducation();
    renderResearch();
    renderPublications();
    renderIndustry();
    renderTeaching();
    renderLanguages();
    renderTechnologies();
    renderFooter();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize animations
    initializeAnimations();
}

// ========== Hero Section ==========
function renderHeroSection() {
    document.getElementById('hero-name').textContent = PERSONAL_INFO.name;
    document.getElementById('hero-title').textContent = PERSONAL_INFO.title;
    
    const emailLink = document.getElementById('hero-email');
    emailLink.href = `mailto:${PERSONAL_INFO.email}`;
    emailLink.querySelector('span').textContent = PERSONAL_INFO.email;
    
    const locationLink = document.getElementById('hero-location');
    locationLink.href = PERSONAL_INFO.location_url;
    locationLink.querySelector('span').textContent = PERSONAL_INFO.location;
    
    renderSocials();
}

function renderSocials() {
    const socialsContainer = document.getElementById('hero-socials');
    socialsContainer.innerHTML = '';
    
    PERSONAL_INFO.socials.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link';
        link.setAttribute('aria-label', social.name);
        
        const icon = getSocialIcon(social.icon);
        link.innerHTML = icon;
        
        socialsContainer.appendChild(link);
    });
}

function getSocialIcon(iconName) {
    const icons = {
        github: '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
        linkedin: '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
    };
    return icons[iconName] || '';
}

// ========== Education Section ==========
function renderEducation() {
    const container = document.getElementById('education-content');
    container.innerHTML = '';
    
    EDUCATION.forEach(edu => {
        const card = createInfoCard(edu);
        container.appendChild(card);
    });
}

// ========== Research Section ==========
function renderResearch() {
    const container = document.getElementById('research-content');
    container.innerHTML = '';
    
    RESEARCH_EXPERIENCE.forEach(exp => {
        const card = createInfoCard(exp);
        container.appendChild(card);
    });
}

// ========== Industry Section ==========
function renderIndustry() {
    const container = document.getElementById('industry-content');
    container.innerHTML = '';
    
    INDUSTRY_EXPERIENCE.forEach(exp => {
        const card = createInfoCard(exp);
        container.appendChild(card);
    });
}

// ========== Teaching Section ==========
function renderTeaching() {
    const container = document.getElementById('teaching-content');
    container.innerHTML = '';
    
    TEACHING_EXPERIENCE.forEach(exp => {
        const card = createInfoCard(exp);
        container.appendChild(card);
    });
}

// ========== Create Info Card ==========
function createInfoCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    let html = '<div class="card-header"><div>';
    html += `<h3 class="card-title">${item.degree || item.role}</h3>`;
    html += `<div class="card-subtitle">`;
    html += '<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
    html += '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>';
    html += '<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>';
    html += '</svg>';
    html += `<span>${item.institution}</span>`;
    html += '</div></div>';
    
    html += '<div class="card-period">';
    html += '<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.375rem;">';
    html += '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>';
    html += '<line x1="16" y1="2" x2="16" y2="6"></line>';
    html += '<line x1="8" y1="2" x2="8" y2="6"></line>';
    html += '<line x1="3" y1="10" x2="21" y2="10"></line>';
    html += '</svg>';
    html += item.period;
    html += '</div></div>';
    
    html += '<div class="card-location">';
    html += '<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.375rem;">';
    html += '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>';
    html += '<circle cx="12" cy="10" r="3"></circle>';
    html += '</svg>';
    html += item.location;
    html += '</div>';
    
    if (item.description) {
        html += `<p class="card-description">${item.description}</p>`;
    }
    
    if (item.details && item.details.length > 0) {
        html += '<div class="card-details">';
        html += '<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem; margin-top: 0.125rem;">';
        html += '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>';
        html += '<path d="M6 12v5c3 3 9 3 12 0v-5"></path>';
        html += '</svg>';
        html += '<ul>';
        item.details.forEach(detail => {
            html += `<li>${detail}</li>`;
        });
        html += '</ul></div>';
    }
    
    if (item.advisors) {
        html += '<div class="card-advisors">';
        html += '<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.375rem; margin-top: 0.125rem;">';
        html += '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>';
        html += '<circle cx="12" cy="7" r="4"></circle>';
        html += '</svg>';
        html += `<span>${renderAdvisors(item.advisors)}</span>`;
        html += '</div>';
    }
    
    if (item.technologies && item.technologies.length > 0) {
        html += '<div class="card-technologies">';
        item.technologies.forEach(tech => {
            html += `<span class="tech-tag">${tech}</span>`;
        });
        html += '</div>';
    }
    
    card.innerHTML = html;
    return card;
}

function renderAdvisors(advisorsString) {
    const parts = advisorsString.split(/(\s+and\s+|,\s*)/);
    let result = 'Advisors: ';
    
    parts.forEach((part, index) => {
        const trimmedPart = part.trim();
        if (PERSON_LINKS[trimmedPart]) {
            result += `<a href="${PERSON_LINKS[trimmedPart]}" target="_blank" rel="noopener noreferrer" class="advisor-link">${trimmedPart}</a>`;
        } else {
            result += part;
        }
    });
    
    return result;
}

// ========== Publications Section ==========
function renderPublications() {
    const container = document.getElementById('publications-content');
    container.innerHTML = '';
    
    PUBLICATIONS.forEach(pub => {
        const card = createPublicationCard(pub);
        container.appendChild(card);
    });
}

function createPublicationCard(pub) {
    const card = document.createElement('div');
    card.className = 'publication-card';
    
    let html = '<div class="publication-content">';
    html += '<svg class="icon publication-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
    html += '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>';
    html += '<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>';
    html += '</svg>';
    html += '<div>';
    
    if (pub.url) {
        html += `<a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="publication-title">${pub.title}</a>`;
    } else {
        html += `<h4 class="publication-title">${pub.title}</h4>`;
    }
    
    html += `<p class="publication-authors">${renderAuthors(pub.authors)}</p>`;
    
    html += '<div class="publication-meta">';
    html += `<span class="publication-year">${pub.year}</span>`;
    html += `<span class="publication-venue">${pub.venue}</span>`;
    html += '</div>';
    
    html += '</div></div>';
    
    card.innerHTML = html;
    return card;
}

function renderAuthors(authorsString) {
    const parts = authorsString.split(/(, | & )/);
    let result = '';
    
    parts.forEach((part, index) => {
        if (part === ', ' || part === ' & ') {
            result += part;
            return;
        }
        
        const trimmedPart = part.trim();
        const isMe = trimmedPart === 'Estanislao Claucich';
        const link = PERSON_LINKS[trimmedPart];
        
        if (isMe) {
            result += `<span class="author-me">${trimmedPart}</span>`;
        } else if (link) {
            result += `<a href="${link}" target="_blank" rel="noopener noreferrer" class="author-link">${trimmedPart}</a>`;
        } else {
            result += `<span>${trimmedPart}</span>`;
        }
    });
    
    return result;
}

// ========== Languages Section ==========
function renderLanguages() {
    const container = document.getElementById('languages-content');
    container.innerHTML = '';
    
    LANGUAGES.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'language-item';
        item.innerHTML = `
            <span class="language-name">${lang.language}</span>
            <span class="language-level">${lang.level}</span>
        `;
        container.appendChild(item);
    });
}

// ========== Technologies Section ==========
function renderTechnologies() {
    const container = document.getElementById('technologies-content');
    container.innerHTML = '';
    
    CORE_TECHNOLOGIES.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'technology-tag';
        tag.textContent = tech;
        container.appendChild(tag);
    });
}

// ========== Footer ==========
function renderFooter() {
    const year = new Date().getFullYear();
    document.getElementById('footer-copyright').textContent = `© ${year} Estanislao Claucich. All rights reserved.`;
}

// ========== Navigation ==========
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenuBtn.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
    });
    
    // Close mobile menu when clicking links
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
    
    // Scroll spy for active navigation
    initializeScrollSpy();
}

function initializeScrollSpy() {
    const sections = ['education', 'research', 'publications', 'industry', 'teaching'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = null;
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (!element) continue;
            
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (offsetTop <= scrollPosition && (offsetTop + offsetHeight) > scrollPosition) {
                currentSection = sectionId;
                break;
            }
        }
        
        if (!currentSection && window.scrollY < 200) {
            currentSection = 'about';
        }
        
        navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (section === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// ========== Animations ==========
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
}
