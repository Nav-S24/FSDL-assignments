 // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, {threshold:0.15});
  reveals.forEach(r=>io.observe(r));

  // active nav dot on scroll
  const navLinks = document.querySelectorAll('.side-nav .nav-link');
  const secEls = ['hero','about','skills','projects','contact'].map(id=>document.getElementById(id));
  const navIo = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navLinks.forEach(l=>l.classList.remove('active'));
        const match = document.querySelector('.side-nav a[data-sec="'+entry.target.id+'"]');
        if(match) match.classList.add('active');
      }
    });
  }, {threshold:0.5});
  secEls.forEach(el=>{ if(el) navIo.observe(el); });