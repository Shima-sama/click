let _button = document.getElementById("_button")
let box = document.getElementById("box")
let runaway = document.getElementById("runaway-btn")

_button.addEventListener("click",function(){
    _h3 = document.createElement("h3")
    _h3.textContent = "ฮวย"
    box.append(_h3)
})

runaway.addEventListener('mouseover', () => {
            // 1. คำนวณขอบเขตสูงสุดที่ปุ่มสามารถขยับไปได้ (ไม่ให้หลุดขอบจอ)
            const maxX = window.innerWidth - button.offsetWidth;
            const maxY = window.innerHeight - button.offsetHeight;

            // 2. สุ่มตำแหน่ง X และ Y ใหม่ภายในขอบเขตหน้าจอ
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            // 3. ย้ายตำแหน่งปุ่มไปยังพิกัดใหม่
            button.style.left = `${randomX}px`;
            button.style.top = `${randomY}px`;
        });
