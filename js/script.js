// Legacy overlay menu (about/work/contact until migrated)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu .nav-item');

let showMenu = false;

if (menuBtn) {
	menuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		navItems.forEach(item => item.classList.add('show'));
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'));
		showMenu = false;
	}
}

// Enhanced site navigation
const navToggle = document.querySelector('.site-nav__toggle');
const navMenu = document.querySelector('.site-nav__menu');
const siteHeader = document.querySelector('.site-header');

function setHeaderHeight() {
	if (siteHeader) {
		document.documentElement.style.setProperty('--site-header-height', `${siteHeader.offsetHeight}px`);
	}
}

setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);

if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		const isOpen = navMenu.classList.toggle('is-open');
		navToggle.setAttribute('aria-expanded', isOpen);
		requestAnimationFrame(setHeaderHeight);
	});

	navMenu.querySelectorAll('.site-nav__link').forEach(link => {
		link.addEventListener('click', () => {
			navMenu.classList.remove('is-open');
			navToggle.setAttribute('aria-expanded', 'false');
		});
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
			navMenu.classList.remove('is-open');
			navToggle.setAttribute('aria-expanded', 'false');
			navToggle.focus();
		}
	});
}
