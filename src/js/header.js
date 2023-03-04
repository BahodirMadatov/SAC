export default function() {
    const headerBtn = document.querySelector('.header__btn'),
         headerItems = document.querySelector('.header__list'),
         headerAbs = document.querySelector('.header__abs');
    function openClose(){
        const bool = !headerBtn.classList.contains('active');
        headerBtn.classList[bool ? 'add' : 'remove']('active');
        headerAbs.classList[bool ? 'add' : 'remove']('active');
        headerItems.classList[bool ? 'add' : 'remove']('active');
        document.body.classList[bool ? 'add' : 'remove']('hidden');
    };
    headerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openClose();
    })
    headerAbs.addEventListener('click', openClose);
}
