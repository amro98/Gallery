var imgList = Array.from( document.getElementsByClassName('img-item') );
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');
//2
var currentIndex ;
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
var closeButton = document.getElementById('close');

//1
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click', function(e){
        currentIndex = imgList.indexOf(e.target);//2
        var imgSrc = e.target.getAttribute('src');
        lightboxContainer.classList.replace('d-none','d-flex');
        lightboxItem.style.backgroundImage = `url(${imgSrc})`;

        
    })
}

//2
//--------------- ( both next and prev functions )--------------------------------------------------
function slide (i){
    currentIndex = currentIndex + i;

    if(currentIndex == -1)
    {
        currentIndex = imgList.length -1;
    }

    if(currentIndex == imgList.length)
    {
        currentIndex = 0;
    }

    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;

}

nextButton.addEventListener('click',function (){
    slide(1)
});

prevButton.addEventListener('click',function (){
    slide(-1)
});


//3
function closeSlide (){
    lightboxContainer.classList.replace('d-flex','d-none');
}

closeButton.addEventListener('click', closeSlide);


// slide and close by keyboard
document.addEventListener('keydown', function (e) {
    if(e.key == 'ArrowRight')
    {
        slide(1)
    }
    if(e.key == 'ArrowLeft')
    {
        slide(-1)
    }
    if(e.key == 'Escape')
    {
        closeSlide()
    }
})





// //2
// function nextSlide(){
//     currentIndex++;

//     if(currentIndex == imgList.length)
//     {
//         currentIndex = 0;
//     }

//     var imgSrc = imgList[currentIndex].getAttribute('src');
//     lightboxItem.style.backgroundImage = `url(${imgSrc})`;

// }

// function pervSlide(){
//     currentIndex--;

//     if(currentIndex ==  -1)
//     {
//         currentIndex = imgList.length -1;
//     }

//     var imgSrc = imgList[currentIndex].getAttribute('src');
//     lightboxItem.style.backgroundImage = `url(${imgSrc})`;

// }

// nextButton.addEventListener('click',nextSlide);

// prevButton.addEventListener('click',pervSlide);