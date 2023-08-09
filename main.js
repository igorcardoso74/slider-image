let i = 0;
let f = 3;

const btns = document.querySelectorAll('.btn-container button');
console.log(btns);

const images = document.querySelectorAll('.image-container img');
console.log(images);

function next(){
    document.getElementById('content' + (i+1)).classList.remove('active');
    i = (f + 1 + 1) % f;
    console.log(i);
    document.getElementById('content' + (i+1)).classList.add('active');
    indicator = (i + 1);
}

function prev(){
    document.getElementById('content' + (i+1)).classList.remove('active');
    i = (f + 1 - 1) % f;
    console.log(i);
    document.getElementById('content' + (i+1)).classList.add('active');
    indicator = (i + 1);
}

function indicator(num){
    btns.forEach(function (btn){
        btn.style.backgroundColor = "transparent"
    });
    document.querySelector('.btn-container button:nth-child(' + num + ')').style.backgroundColor = 'black';
};

function btn(index) {
    images.forEach(function (image) {
      image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
  }