class MobileNavbar{
    constructor(MobileMenu, NavList, NavLinks) {
        this.MobileMenu = document.querySelector(MobileMenu);
        this.NavList = document.querySelector(NavList);
        this.NavLinks = document.querySelector(NavLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.NavLinks.foreach((link, index ) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        })
    }

    handleClick() {
        this.NavList.classList.toggle(this.activeClass);
        this.MobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }
    addClickEvent() {
        this.MobileMenu.addEventListerner("click",this.handleClick)
    }
    init() {
        if( this.MobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar ( 
    ".mobile-menu",
    ".nav-list",
    ".nav-list a"
);
MobileNavbar.init();