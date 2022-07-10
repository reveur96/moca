window.addEventListener('load', () => {
    const mainLi = document.querySelectorAll("#mainmn > li");

    for(let i=0; i<mainLi.length; i++) {
        mainLi[i].addEventListener("mouseenter", (e) => {
            const link = e.currentTarget.children[0];
                link.classList.add('over');
            const submn = e.currentTarget.children[1];
                submn.classList.add('act');
        });

        mainLi[i].addEventListener("mouseleave", (e) => {
            const link = e.currentTarget.children[0];
                link.classList.remove('over');
            const submn = e.currentTarget.children[1];
                submn.classList.remove('act');
        });
    }

    
});
