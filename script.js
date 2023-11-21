


const openNav = () => {
    document.getElementById("side-nav").style.width = "250px"; // Example width
    document.getElementById("overlay").style.display = "block";
}

const closeNav = () => {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}