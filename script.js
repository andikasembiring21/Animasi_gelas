const gelaskecil=document.querySelectorAll('.kecil');
const liters=document.getElementById('ukuran');
const persen=document.getElementById('persen');
const remain=document.getElementById('remain');

isiulang();

gelaskecil.forEach((cup,idx) => {
  cup.addEventListener('click',() => isi(idx))
})

function isi(idx) {
    if(gelaskecil[idx].classList.contains('penuh')&& !gelaskecil[idx].nextElementSibling.classList.contains('penuh')){
        idx--
    }

    gelaskecil.forEach((cup,idx2) =>{
        if(idx2<=idx){
            cup.classList.add('penuh');
        }
        else{
            cup.classList.remove('penuh');
        }
    })
    isiulang();
}

function isiulang() {
    const isi=document.querySelectorAll('.kecil.penuh').length
    const tp=gelaskecil.length

    if(isi === 0){
        persen.style.visibility="hidden"
        persen.style.height=0
    }
    else{
        persen.style.visibility="visible"
        persen.style.height=`${isi/tp*330}px`
        persen.innerText=`${isi/tp*100}%`
    }
    if(isi === tp){
        remain.style.visibility="hidden"
        remain.style.height=0
    }
    else{
        remain.style.visibility="visible"
        ukuran.innerText=`${2-(250 * isi/1000)}L`
    }
}