for(let i=0;i<1;i++){
    let span=document.createElement('span');
    span.style.left=Math.random() *innerWidth 
    + 'px';
    span.style.animationDelay=Math.random() *5+'s';
    document.body.appendChild(span);
}
