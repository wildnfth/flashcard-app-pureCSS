const front = document.getElementById('front')
const back = document.getElementById('back')
const btn = document.getElementById('flip-btn')
const btnNext = document.getElementById('btn-next')
const btnPrev = document.getElementById('btn-prev')

let kanji = document.querySelectorAll('.kanji')
let kana = document.querySelector('.kana')
let meaning = document.querySelector('.meaning')
let exJP = document.querySelectorAll('.ex-jp')
let exID = document.querySelector('.ex-id')


fetch('kotoba.json').then(response => response.json())
.then(data => {
    kotoba = data
    let currentPos = 0
    let kotobaLength = kotoba.length
    
    function handleKotoba() {
        currentKotoba = kotoba[currentPos]
        kana.textContent =`(${currentKotoba['kana']})` ;
        meaning.textContent = currentKotoba['meaning'];
    
        exJP.forEach(bagian => {
            bagian.textContent = currentKotoba['ex-jp'];
        });
    
        kanji.forEach(bagian => {
            bagian.textContent = currentKotoba['kanji'];
        })
    
        exID.textContent = currentKotoba['ex-id']
    }
    
    handleKotoba()

    function handleNext() {
        if (currentPos == kotobaLength - 1) {
            currentPos = 0
        } else {
            currentPos += 1
        }
        handleKotoba()
    
    }
    
    function handlePrev() {
        if (currentPos == 0) {
            currentPos = kotobaLength - 1
        } else {
            currentPos -= 1
        }
        handleKotoba()
        
    }
    
    btnNext.addEventListener('click', handleNext)
    btnPrev.addEventListener('click', handlePrev)
})
.catch(error => {
    console.error('Error:', error);
});




function handleFlip() {
  front.classList.toggle('flipped')  
  back.classList.toggle('flipped')
}  


btn.addEventListener('click', handleFlip)

