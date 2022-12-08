var image = document.querySelectorAll("img");

image.forEach((e)=>{
    e.addEventListener("mouseover", (e)=>{
        e.target.src = `images/${e.target.id}_2.jpg`;
    });
} )
image.forEach((e)=>{
    e.addEventListener("mouseout", (e)=>{
        e.target.src = `images/${e.target.id}.jpg`;
    });
} )
