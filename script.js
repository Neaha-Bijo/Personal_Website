function toggleButton() {
    const elementsToToggle = [
        '.toggle-btn',
        '.navigation-bar',
        '.up',
        '.down',
        '.send-message'
    ];
    
    elementsToToggle.forEach(selector => {
        document.querySelector(selector).classList.toggle('active');
    });

    document.body.classList.toggle('toggle-active');
}

document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('target') === '_blank') {
            return;
        }

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 100;

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

document.getElementById('resume').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1WGpotLzM-yPH9CUmoPyRj9q_pSc15_mvrsrRld_DOAo/export?format=pdf';
    link.download = 'Neaha_Bijo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const sliderEle = document.getElementById('slider');
const innerEle = sliderEle.querySelector('.slider__inner');
const dots = [...document.querySelectorAll('.slider__dot')];
const activeDot = document.querySelector('.slider__dot__active');
const prevEle = document.querySelector('.up');
const nextEle = document.querySelector('.down');
let currentIndex = 0;
const numItems = dots.length;

const jump = (index) => {
    if (index < 0 || index >= numItems) return;

    currentIndex = index;
    innerEle.style.transform = `translateY(${-100 * currentIndex}%)`;

    const dot = dots[currentIndex];
    const translateY = dot.offsetTop + dot.offsetHeight / 2 - activeDot.offsetHeight / 2; 
    activeDot.style.transform = `translateY(${translateY}px)`;
};

prevEle.addEventListener("click", () => {
    if (currentIndex > 0) {
        jump(currentIndex - 1);
    }
});

nextEle.addEventListener("click", () => {
    if (currentIndex < numItems - 1) {
        jump(currentIndex + 1);
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        jump(index);
    });
});

jump(currentIndex);

const textarea = document.querySelector('.contact_info textarea.message');
    
function messageResize() {
        this.style.height = 'auto';
        this.style.height = Math.max(this.scrollHeight, 100) + 'px';
    }
    
textarea.addEventListener('input', autoResize);
    
messageResize.call(textarea);

function sendMessage() {
    alert('Your message has been sent to Neaha Bijo.');
  }
