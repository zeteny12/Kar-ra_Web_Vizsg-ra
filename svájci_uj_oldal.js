//Részletek az órákról
document.getElementById('Passion-A8202-gomb').addEventListener('click', function() {
    window.open('karóra_login.html', 'blank');
 });

document.getElementById('RoyalLady-10405-gomb').addEventListener('click', function() {
   window.open('karóra_login.html', 'blank');
  });

  document.getElementById('Sportive-gomb').addEventListener('click', function() {
    window.open('karóra_login.html', 'blank');
  });

  document.getElementById('LaPassion-10220-gomb').addEventListener('click', function() {
    window.open('karóra_login.html', 'blank');
  });

  document.getElementById('Classic-01002-gomb').addEventListener('click', function() {
    window.open('karóra_login.html', 'blank');
  });

  document.getElementById('Adventic-gomb').addEventListener('click', function() {
    window.open('karóra_login.html', 'blank');
  });


  
//Checkbox szűrés
const checkboxPassion = document.getElementById('Passion-A8202-checkbox');
const PassionA8202 = document.getElementById('Passion-A8202-kartya');
checkboxPassion.addEventListener('change', function() {
    if (checkboxPassion.checked) {
        PassionA8202.style.display = 'flex';
    } else {
        PassionA8202.style.display = 'inline-flex';
    }
  });

const checkboxRoyalLady = document.getElementById('RoyalLady-10405-checkbox');
const RoyalLady10405 = document.getElementById('RoyalLady-10405-kartya');
checkboxRoyalLady.addEventListener('change', function() {
    if (checkboxRoyalLady.checked) {
        RoyalLady10405.style.display = 'flex';
    } else {
        RoyalLady10405.style.display = 'inline-flex';
    }
  });

const checkboxSportive = document.getElementById('Sportive-checkbox');
const Sportive = document.getElementById('Sportive-kartya');
checkboxSportive.addEventListener('change', function() {
    if (checkboxSportive.checked) {
        Sportive.style.display = 'flex';
    } else {
        Sportive.style.display = 'inline-flex';
    }
  });

const checkboxLaPassion = document.getElementById('LaPassion-10220-checkbox');
const LaPassion10220 = document.getElementById('LaPassion-10220-kartya');
checkboxLaPassion.addEventListener('change', function() {
    if (checkboxLaPassion.checked) {
        LaPassion10220.style.display = 'flex';
    } else {
        LaPassion10220.style.display = 'inline-flex';
    }
  });

const checkboxClassic = document.getElementById('Classic-01002-checkbox');
const Classic01002 = document.getElementById('Classic-01002-kartya');
checkboxClassic.addEventListener('change', function() {
    if (checkboxClassic.checked) {
        Classic01002.style.display = 'flex';
    } else {
        Classic01002.style.display = 'inline-flex';
    }
  });

const checkboxAdventic = document.getElementById('Adventic-checkbox');
const Adventic = document.getElementById('Adventic-kartya');
checkboxAdventic.addEventListener('change', function() {
    if (checkboxAdventic.checked) {
        Adventic.style.display = 'flex';
    } else {
        Adventic.style.display = 'inline-flex';
    }
  });