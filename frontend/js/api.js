const API_BASE = '/api';

function getToken() {
  return localStorage.getItem('token');
}

function setToken(token) {
  localStorage.setItem('token', token);
}

function clearToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

function getUser() {
  const raw = localStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
}

function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

async function apiRequest(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const token = getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;

  const res = await fetch(API_BASE + path, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
}

// Cart is stored client-side in localStorage: [{ productId, name, price, qty }]
function getCart() {
  const raw = localStorage.getItem('cart');
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(product, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.productId === product._id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
    productId: product._id,
    name: product.name,
    image: product.image,
    price: product.price,
    qty
});
  }
  saveCart(cart);
}

function updateCartCount() {
  const el = document.querySelector('.cart-count');
  if (!el) return;
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  el.textContent = count;
}

function renderNavAuthState() {
  const user = getUser();
  const loginLink = document.querySelector('[data-nav="login"]');
  const accountLink = document.querySelector('[data-nav="account"]');
  if (!loginLink || !accountLink) return;
  if (user) {
    loginLink.style.display = 'none';
    accountLink.style.display = 'inline';
    accountLink.textContent = user.name.split(' ')[0];
  } else {
    loginLink.style.display = 'inline';
    accountLink.style.display = 'none';
  }
}

function initNavScrollShadow() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 4);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderNavAuthState();
  initNavScrollShadow();
});
