$(document).ready(function() {
  $(".ch").css("display", "block");
  $(".ho").css("display", "none");
  var user, computer;
  var obj = {
    cross: '<i class="fa fa-times btn" aria-hidden="true"></i>',
    zero: '<i class="fa fa-circle-o btn" aria-hidden="true"></i>'
  };
  var wincombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],player;
   var pos = {
    1: ".one",
    2: ".two",
    3: ".three",
    4: ".four",
    5: ".five",
    6: ".six",
    7: ".seven",
    8: ".eight",
    9: ".nine"
  };
  var currentboard = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  };
  function reset(){
   arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   pos = {
    1: ".one",
    2: ".two",
    3: ".three",
    4: ".four",
    5: ".five",
    6: ".six",
    7: ".seven",
    8: ".eight",
    9: ".nine"
  };
  currentboard = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  };
   $(".ch").css("display", "block"); 
   $(".win").css("display", "none");
   $(".ho").css("display", "none");
   $(".side").css("visibility", "hidden");
   
   for(var i = 0;i<arr.length;i++){
     $(pos[arr[i]]).html(""); 
   }
  }
  $(".reset").click(function() {
    reset();
  });
  function win(x){
    wincombo.forEach(function(item){
      if(x[item[0]]==x[item[1]]&&x[item[1]]==x[item[2]]&&x[item[0]]!=""){
        $(".win").html(x[item[0]] + "Wins");
        $(".win").css("display", "block");
        $(".cha").css("display", "none");
        $(".side").css("visibility", "hidden");
      }
      else if(arr.length==0){
        $(".win").html("Draw!");
        $(".win").css("display", "block");
        $(".cha").css("display", "none");
        $(".side").css("visibility", "hidden");
      }
    });
  }
  function tri(x){
    var y;
    wincombo.forEach(function(item){
      if(x[item[0]]==x[item[1]]&&x[item[2]]==""&&x[item[1]]!=""){
        y = item[2];
        
      } if(x[item[1]]==x[item[2]]&&x[item[0]]==""&&x[item[1]]!=""){
        
        y = item[0];
       
      }
   
      if(x[item[2]]==x[item[0]]&&x[item[1]]==""&&x[item[0]]!=""){
        
        y = item[1];
       
      } 
    });
    return y;
  }
  $(".ro").click(function() {
    $(pos[$(this).attr("value")]).html(user);
    delete pos[$(this).attr("value")];
    currentboard[$(this).attr("value")] = user;
    arr.splice(arr.indexOf(parseInt($(this).attr("value"))),1);
    win(currentboard);
    var rand = Math.floor((Math.random() * arr.length));
    if(typeof tri(currentboard)!="undefined"){
      $(pos[tri(currentboard)]).html(computer); 
      delete pos[tri(currentboard)];
      currentboard[tri(currentboard)] = computer;
      arr.splice(arr.indexOf(parseInt(tri(currentboard))),1);
      console.log(parseInt(tri(currentboard)));
      win(currentboard);   
    }else{
    $(pos[arr[rand]]).html(computer); 
      delete pos[arr[rand]];
      currentboard[[arr[rand]]] = computer;
      win(currentboard);
      arr.splice(rand,1);
    }   
  });
  $(".p1").click(function() {
    player = 1;
  });
  $(".fa-times").click(function() {
    user = obj.cross;
    computer = obj.zero;
    $(".ch").css("display", "none");
    $(".cha").css("display", "block");
    $(".reset").css("display", "inline");
    $(".one").html(computer);
    $(".side").css("visibility", "visible");
    $(".side").css("top", "2cm");
    delete pos['1'];
    currentboard['1'] = computer;
    arr.splice(arr.indexOf(1),1);
  });
  $(".fa-circle-o").click(function() {
    user = obj.zero;
    computer = obj.cross;
    $(".cha").css("display", "block");
    $(".ch").css("display", "none");
    $(".reset").css("display", "inline");
    $(".seven").html(computer);
    $(".side").css("visibility", "visible");
    $(".side").css("top", "2cm");
    delete pos['7'];
    currentboard['7'] = computer;
    arr.splice(arr.indexOf(7),1);
  });
  $(".p2").click(function() {
    $(".ch").css("display", "block");
    $(".ch").append("Player1");
    $(".ho").css("display", "none");
    player = 2;
  });
});