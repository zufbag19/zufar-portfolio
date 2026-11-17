const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.material').forEach(card => {
      const cats = (card.dataset.cat || '').split(' ');
      card.classList.toggle('hidden', f !== 'all' && !cats.includes(f));
    });
  });
});
