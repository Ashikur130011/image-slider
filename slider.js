const images = [
    'images/img (1).jpg',
    'images/img (2).jpg',
    'images/img (3).jpg',
    'images/img (4).jpg',
    'images/img (5).jpg',
    'images/img (6).jpg',
    'images/img (7).jpg',
    'images/img (8).jpg',
    'images/img (9).jpg',
    'images/img (10).jpg',
    'images/img (11).jpg',
    'images/img (12).jpg',
];
const imgElement = document.getElementById('image-slider');
let imgIndex = 0;
setInterval( () => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src' , imgUrl);
    imgIndex++;
}, 1000)