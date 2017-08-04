import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery'

new MobileMenu();
new RevealOnScroll($('.feature-item'), '90%');
new RevealOnScroll($('.testimonial'), '100%');
new StickyHeader();
