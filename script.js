const windowsImage = document.querySelector('.content-image-windows');
const windowsText = document.querySelector('.content-text-windows');

const linuxImage = document.querySelector('.content-image-linux');
const linuxText = document.querySelector('.content-text-linux');

const macosImage = document.querySelector('.content-image-macos');
const macosText = document.querySelector('.content-text-macos');

var posY = 0;

window.addEventListener('load', (e) => {
    windowsOS.onScroll();
});

window.addEventListener('scroll', (e) => {
    posY = window.scrollY;

    windowsOS.onScroll();
    linuxOS.onScroll();
    macOS.onScroll();
});

// Testing section ---------------------------------------------------------------------------

var windowsOS = {
    title: "Windows",
    standardName: "windows",
    appearPos: 0,
    hidingPos: 700,

    onScroll: function(){
        if (posY >= this.appearPos && posY < this.hidingPos){
            windowsImage.style.transition = "opacity 1.5s ease-in-out";
            windowsImage.style.opacity = "1";

            windowsText.style.transition = "opacity 1.5s ease-in-out";
            windowsText.style.opacity = "1";
        }
        if (posY > this.hidingPos){
            windowsImage.style.opacity = "0";
            windowsText.style.opacity = "0";
        }
    }
};

var linuxOS = {
    title: "Linux",
    standardName: "linux",
    appearPos: 200,
    hidingPos: 0,

    onScroll: function(){
        if (posY >= this.appearPos){
            linuxImage.style.transition = "opacity 1.5s ease-in-out";
            linuxImage.style.opacity = "1";

            linuxText.style.transition = "opacity 1.5s ease-in-out";
            linuxText.style.opacity = "1";
        }
        else {
            linuxImage.style.opacity = "0";
            linuxText.style.opacity = "0";
        }
    }
};

var macOS = {
    title: "MacOS",
    standardName: "macos",
    appearPos: 830,
    hidingPos: 0,

    onScroll: function(){
        if (posY >= this.appearPos){
            macosImage.style.transition = "opacity 1.5s ease-in-out";
            macosImage.style.opacity = "1";

            macosText.style.transition = "opacity 1.5s ease-in-out";
            macosText.style.opacity = "1";
        }
        else {
            macosImage.style.opacity = "0";
            macosText.style.opacity = "0";
        }
    }
};

//task