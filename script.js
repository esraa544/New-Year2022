'use strict';
function stars(){
    const count = 200;
    const section = document.querySelector('.stars');
    var i = 0;
    
    while(i < count){
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        
        const size = Math.random() * 4;
        star.style.left = x + 'vw';
        star.style.top = y + 'vh';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';
        
        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = duration + 's';
        
        section.appendChild(star);
        i++
    }
}
stars();

function tiptipdrop2(){
    var value = 200;
    var tarsection = document.querySelector('.face');
    var j = 0;
    
    while(j < value){
        var drop = document.createElement('i');
        var wdt = Math.floor(Math.random() * 100);
        var hgt = Math.floor(Math.random() * 100);
        var qnt = Math.random() * 10;
        
        drop.style.left = wdt + 'vw';
        drop.style.top = hgt + 'vh';
        drop.style.width = 1 + qnt + 'px';
        drop.style.height = 1 + qnt + 'px';
        drop.style.animationDuration = 3 + qnt + 's';
        drop.style.animationDelay = qnt - 3 + 's';
        
        tarsection.appendChild(drop);
        j++;
    }

}
tiptipdrop2();