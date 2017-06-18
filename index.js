function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
 var answer = document.querySelector('#nested div.target');
 return answer;
}

function increaseRankBy(n){
  var ranker = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  var number = parseInt(n,10);
  for (var i = 0; i<ranker.length; i++){
    var inside = parseInt(ranker[i].innerHTML,10);
    ranker[i].innerHTML = (inside + number);
  }
}

function deepestChild (){
  var theWholeThing = document.getElementById('grand-node');
  while (theWholeThing.children.length > 0){
    theWholeThing = theWholeThing.children[0];
  }
  return theWholeThing
}
