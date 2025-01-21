// dom.js 
// Document. Object Model 
// let myPicture = {name:"해와 달", width: 200, height:300} => property (속성)
// <img src="small.jpg"> -> attribute(속성)
document.addEventListener('DOMContentLoaded', attrChangeFucn); 

function box (){
  //대상선택 . 
  let click = document.getElementById('box'); 
  click.onclick = function (){ 
    alert("12000원 입니다."); 
  }
  /// ==== onclick == click.addEventListener('click', function(){
  ///}); 
}

function attrChangeFucn(e){
  console.log(e);
  
  //대상선택. 
  document.querySelectorAll('div#small-pic > img').forEach(function (item) {
    //img 이벤트 등록. 
    console.log(item);
    item.addEventListener('mouseover', function(e){
      console.log(e.target.src); 
      document.querySelector('#prod-pic>img').src = e.target.src; 
    })
  }); 
  let click = document.getElementById('box'); 
  click.onclick = function (){ 
    let itmeName = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText; 
    console.log(itmeName); 
    let price = parseInt(document.querySelector('#desc>ul>li:nth-of-type(2)>span').innerText) + 
    parseInt(document.querySelector('#desc>ul>li:nth-of-type(3)>span').innerText); 

    alert(`${price}원`); 
    itmeName = document.querySelector('#desc>ul>li')[0].firstElementChild.innerText; 
    price = document.querySelector('#desc>ul>li')[1].lastElementChild.value; 
    logis = document.querySelector('#desc>ul>li')[2].children[1].vlaue; 
    console.log(itmeName, price, logis); 
  }
}

//요소의 값을 변경. 
function domChangeFunction(){

  let heading = document.getElementById('heading'); 
  heading.onclick = function(){ // onclick 함수.. 이벤트 
    heading.innerText = "추천! 오늘의 커피"; 
    document.getElementById('cup').src = "images/coffee-gray.jpg"; 
  }
  console.log(heading); 



  const detail = document.querySelector('#detail>ul'); 
  detail.innerHTML = '<li>사과</li><li>바나나</li>'; 
  console.log(); 
 // console.log(detail.innerHTML); 
  //console.log(detail.textContent);  

}

// Dom 요소의 선택 . 
function domFunction(){
  let targetItem = document.getElementById('container'); // id값으로 ㅅ너택 
  targetItem = document.getElementsByClassName('#container'); // HTMLCollection([배열]); getElements로 가지고 오면 배열형식으로 근데 배열은 아님 
  for (let i=0; i<targetItem.length; i++){
    console.log(targetItem[i].src); 
  }  

  targetItem = document.querySelectorAll('.small');  // NodeList([배열])
  targetItem.forEach(function (item){
    item.style.borderColor = 'red';
    item.style.borderWidth = '3px';
    item.style.borderStyle = 'solid';  
  });

  targetItem = document.getElementsByTagName('img');  // HTMLCollection([배열])
  targetItem = document.querySelectorAll('img');  // NodeList

  console.log(targetItem);
} // end of domFunction(). 