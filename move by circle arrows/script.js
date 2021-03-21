/* 
    1 : automatic run the main function
    2 : set global variabel , 2-1 : set data-number attribute for each circleArrows(for click feature), 2-2 : imgSrcs
    3 : insert first imgSrc to slider
    4 : build setInterval to go next Imgs and make the function (it will loop between images)
    5 : get circleArrows and remove "avtive" class of them, 5-1 : then add "avtive" class to which number = imgIndex
    6 : when every circleArrows clicked, 6-1: the (data-number - 1) of each circleArrow will be the @var imgIndex , 6-2: reset the @var sliderTime and then call the $changeImageSrc  
*/

function imageslider() {
    // 2
    const imgArea = document.querySelector('.slider-container img');
    const circleArrows = document.querySelectorAll('.circle-arrows-area span');
    let imgIndex = 0;

    // 2-1
    for (let i = 0; i < circleArrows.length; i++) {
        circleArrows[i].setAttribute('data-number', i);
    }
    // 2-2
    const imgSrcs = ['https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg', 'https://free4kwallpapers.com/uploads/originals/2020/09/04/neon-background--wallpaper.jpg', 'https://i.pinimg.com/originals/0d/ba/57/0dba57a96d995f5b92d6294245ead3eb.jpg', 'https://static.vecteezy.com/system/resources/previews/001/482/997/original/glowing-futuristic-neon-background-free-vector.jpg']
        // 3
    imgArea.src = imgSrcs[imgIndex];
    // 4
    let sliderTime = setInterval(changeImageSrc, 3000);

    function changeImageSrc() {
        if (imgIndex + 1 < imgSrcs.length) {
            imgIndex++;
            imgArea.src = imgSrcs[imgIndex];
            avtivecircleArrows()
            return
        } else {
            imgIndex = 0;
            imgArea.src = imgSrcs[imgIndex];
            avtivecircleArrows()
        }
        // 5
        function avtivecircleArrows() {
            for (let i = 0; i < circleArrows.length; i++) {
                circleArrows[i].classList.remove('active');
            }
            // 5-1
            circleArrows[imgIndex].classList.add('active');
        }
    }

    // 6
    circleArrows.forEach(circlearrow => {
        circlearrow.addEventListener('click', () => {
            // 6-1
            const circleArrowNumber = circlearrow.getAttribute('data-number');
            imgIndex = circleArrowNumber - 1;
            // 6-2
            clearInterval(sliderTime);
            sliderTime = setInterval(changeImageSrc, 3000);
            changeImageSrc()
        })
    })
}
// 1
imageslider()