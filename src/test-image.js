import apple from './apple.jpg';

function testImage(){
const img = document.createElement('img');
img.width = 500
img.src = apple;

document.body.appendChild(img);
}

export default testImage;