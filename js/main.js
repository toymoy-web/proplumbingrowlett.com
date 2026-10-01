(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  if(!t||!d||!o)return;
  function openDrawer(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
  function closeDrawer(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
  t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?closeDrawer():openDrawer();});
  if(c)c.addEventListener('click',closeDrawer);
  o.addEventListener('click',closeDrawer);
  d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeDrawer);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDrawer();});
})();

(function(){
  var items=document.querySelectorAll('.faq-item');
  items.forEach(function(item){
    var q=item.querySelector('.faq-q');
    if(!q)return;
    q.addEventListener('click',function(){item.classList.toggle('open');});
  });
})();
