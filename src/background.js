const img=["https://cdn.pixabay.com/photo/2022/04/14/20/59/strawberries-7133242_960_720.jpg",
"https://cdn.pixabay.com/photo/2021/06/04/19/46/red-poppies-6310772_960_720.jpg",
"https://cdn.pixabay.com/photo/2020/09/28/15/58/bee-5610256_960_720.jpg",
"https://cdn.pixabay.com/photo/2022/03/23/10/50/sea-7086932_960_720.jpg",
"https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_960_720.jpg",
"https://cdn.pixabay.com/photo/2020/04/07/17/01/birds-5014150_960_720.jpg",
"https://cdn.pixabay.com/photo/2020/01/09/03/43/mansion-4751778_960_720.jpg",
"https://cdn.pixabay.com/photo/2022/03/06/06/42/flowers-7050948_960_720.jpg",
"https://cdn.pixabay.com/photo/2021/11/20/13/47/sky-6811874_960_720.jpg"];
const background=document.querySelector("body");
    
const chosenImg=img[Math.floor(Math.random()*img.length)];
const backgroundImg="url('"+chosenImg+"')";
background.style.backgroundImage=backgroundImg;
background.style.backgroundRepeat = "no-repeat";
background.style.backgroundSize="cover";
background.style.backgroundPosition="center center";