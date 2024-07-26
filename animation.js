const click = document.querySelector('.click');
const GiftBox = document.querySelector('.gift-box');
const shadow_ = document.querySelector('.shadow');
const G_Container = document.querySelector('.gift-container');
const Text = document.querySelector('.text');



click.addEventListener('click', () => {
    if(click.className === 'click') {
        click.classList.add('active');
        GiftBox.classList.add('active');
        shadow_.classList.add('active');
        G_Container.classList.add('active');
        
        //set 1s sau khi click
        setTimeout(() => {
            Text.classList.add('active');
        }, 1000);

    }
    else{
        click.classList.remove('active');
        GiftBox.classList.remove('active');
        shadow_.classList.remove('active');
        G_Container.classList.remove('active');
        Text.classList.remove('active');
    }
});


const container = document.getElementById('balloon-container');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDelay = `${Math.random() * 10}s`;
        balloon.style.zIndex = '-1';
        container.appendChild(balloon);
        
        // Tự động xóa quả bóng bay khi animation kết thúc
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    // Tạo màu ngẫu nhiên
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        body.appendChild(bubble);
        
        // Tự động xóa bong bóng khi animation kết thúc
        bubble.addEventListener('animationiteration', () => {
            bubble.remove();
        });
    }
    createBalloon();    

    let initialInterval = setInterval(createBalloon, 1500);

    // Sau 10 giây, tạo quả bóng bay mỗi 5 giây
    setTimeout(() => {
        clearInterval(initialInterval);
        setInterval(createBalloon, 5000);
    }, 10000);

});



