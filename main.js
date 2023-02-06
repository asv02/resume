const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
console.log(links);
console.log(sections);
let activeLink = 0;

links.forEach((link, i) => {
console.log("link->",link);
console.log("i->",i);
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 100);
        }
    })
})  
