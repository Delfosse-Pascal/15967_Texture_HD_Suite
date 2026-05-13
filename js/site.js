/* ============================================================
   Site Texture HD - Theme + Lightbox + Musique persistante
   ============================================================ */

/* ---- Theme clair / sombre ---- */
(function () {
   const cle = 'theme-textures';
   const sauv = localStorage.getItem(cle) || 'clair';
   document.documentElement.setAttribute('data-theme', sauv);

   window.basculerTheme = function () {
      const a = document.documentElement.getAttribute('data-theme');
      const n = a === 'clair' ? 'sombre' : 'clair';
      document.documentElement.setAttribute('data-theme', n);
      localStorage.setItem(cle, n);
      const btn = document.getElementById('btn-theme');
      if (btn) btn.textContent = n === 'clair' ? 'Mode sombre' : 'Mode clair';
   };

   document.addEventListener('DOMContentLoaded', function () {
      const btn = document.getElementById('btn-theme');
      if (btn) btn.textContent = sauv === 'clair' ? 'Mode sombre' : 'Mode clair';
   });
})();

/* ---- Lightbox (clic vignette = agrandir, Esc = fermer) ---- */
(function () {
   let lb;
   function creer() {
      if (lb) return;
      lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = '<span class="ferme" title="Fermer (Echap)">&times;</span><img alt=""><div class="info-bas"></div>';
      document.body.appendChild(lb);
      lb.querySelector('.ferme').addEventListener('click', fermer);
      lb.addEventListener('click', function (e) { if (e.target === lb) fermer(); });
   }
   function ouvrir(src, info) {
      creer();
      lb.querySelector('img').src = src;
      lb.querySelector('.info-bas').innerHTML = info || '';
      lb.classList.add('actif');
   }
   function fermer() { if (lb) lb.classList.remove('actif'); }

   document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fermer(); });

   document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.vignette').forEach(function (v) {
         v.addEventListener('click', function () {
            const img = v.querySelector('img');
            const infos = v.querySelector('.infos');
            const grand = img.dataset.grand || img.src;
            const html = infos ? infos.innerHTML : '';
            ouvrir(grand, html);
         });
      });

      // Dimensions + taille fichier
      document.querySelectorAll('.vignette img').forEach(function (img) {
         function majDims() {
            const v = img.closest('.vignette');
            const infos = v && v.querySelector('.infos');
            if (!infos || infos.querySelector('.dims')) return;

            // Charger l'image grand format pour vraies dimensions
            const grand = img.dataset.grand || img.src;
            const test = new Image();
            test.onload = function () {
               const d = document.createElement('div');
               d.className = 'dims';
               d.textContent = test.naturalWidth + ' x ' + test.naturalHeight + ' px';
               infos.appendChild(d);
            };
            test.src = grand;

            // Taille fichier via HEAD
            fetch(grand, { method: 'HEAD' })
               .then(function (r) {
                  const t = r.headers.get('Content-Length');
                  if (t) {
                     const ko = (parseInt(t, 10) / 1024).toFixed(1);
                     const aff = ko > 1024 ? (ko / 1024).toFixed(2) + ' Mo' : ko + ' Ko';
                     const s = document.createElement('div');
                     s.className = 'taille';
                     s.textContent = aff;
                     infos.appendChild(s);
                  }
               })
               .catch(function () { /* protocole file:// = HEAD souvent indispo, on ignore */ });
         }
         if (img.complete) majDims();
         else img.addEventListener('load', majDims);
      });
   });
})();

/* ---- Lecteur musique persistant (popup) ---- */
(function () {
   const cle = 'lecteur-musique-fenetre';

   function relatifVersAccueil() {
      // Calcule la profondeur pour atteindre la racine
      const p = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
      // En file:// le chemin contient le disque, on cherche le segment du dossier projet
      const idx = p.findIndex(s => s.indexOf('15967_Texture_HD_Suite') !== -1);
      if (idx === -1) return 'lecteur.html';
      const profondeur = p.length - idx - 2; // -1 pour le nom de fichier, -1 pour la racine projet
      if (profondeur <= 0) return 'lecteur.html';
      return '../'.repeat(profondeur) + 'lecteur.html';
   }

   window.ouvrirLecteur = function () {
      const url = relatifVersAccueil();
      const f = window.open(
         url,
         'lecteurMusique',
         'width=420,height=560,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no'
      );
      if (f) {
         try { f.focus(); } catch (e) {}
      } else {
         alert("Impossible d'ouvrir la fenetre du lecteur. Verifiez que les popups sont autorises.");
      }
   };

   document.addEventListener('DOMContentLoaded', function () {
      const btn = document.getElementById('btn-musique');
      if (btn) btn.addEventListener('click', window.ouvrirLecteur);
   });
})();

/* ---- Empeche erreurs ressources externes de casser la page ---- */
window.addEventListener('error', function (e) {
   if (e.target && (e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT' || e.target.tagName === 'IMG')) {
      e.preventDefault();
   }
}, true);

/* ---- Decor flottant (notes ♪) ---- */
document.addEventListener('DOMContentLoaded', function () {
   if (document.querySelector('.note-flottante')) return;
   if (document.body.classList.contains('lecteur-corps')) return;
   const notes = ['♪', '♫', '𝄞'];
   notes.forEach(function (n, i) {
      const sp = document.createElement('span');
      sp.className = 'note-flottante n' + (i + 1);
      sp.textContent = n;
      sp.setAttribute('aria-hidden', 'true');
      document.body.appendChild(sp);
   });
});
