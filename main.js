canvas = new fabric.Canvas('myCanvas');
Hx = 10;
Hy = 10;
Bw = 30;
Bh = 30;
HeOb = "";
BlOb = "";
function Heroload(){
    fabric.Image.fromURL("hero.png",function(Img){
        HeOb = Img;
        HeOb.scaleToWidth(150);
        HeOb.scaleToHeight(150);
        HeOb.set({
            top:Hy,
            left:Hx
        });
        canvas.add(HeOb);
    });
}
function Objectload(newImg){
    fabric.Image.fromURL(newImg,function(Img){
        BlOb = Img;
        BlOb.scaleToWidth(Bw);
        BlOb.scaleToHeight(Bh);
        BlOb.set({
            top:Hy,
            left:Hx
        });
        canvas.add(BlOb);
    });
}
window.addEventListener("keydown",kdn);
function kdn(k){
      keypressed = k.keyCode;
      console.log(keypressed);
      if(k.shiftKey == true && keypressed == '80'){
          console.log("Shift and P are pressed together");
          Bw = Bw + 10;
          Bh = Bh + 10;
          document.getElementById("spanwidth").innerHTML = Bw;
          document.getElementById("spanheight").innerHTML = Bh;
      }
      if(k.shiftKey == true && keypressed == '77'){
        console.log("Shift and M are pressed together");
        Bw = Bw - 10;
        Bh = Bh - 10;
        document.getElementById("spanwidth").innerHTML = Bw;
        document.getElementById("spanheight").innerHTML = Bh;
      }
      if(keypressed=='70'){
    Objectload('ironman_face.png');
     console.log("f");
      }
      if(keypressed=='66'){
        Objectload('spiderman_body.png');
        console.log("b");
         }
         if(keypressed=='76'){
            Objectload('hulk_legs.png');
            console.log("l");
             }
             if(keypressed=='82'){
                Objectload('thor_right_hand.png');
                console.log("r");
                 }
                 if(keypressed=='72'){
                    Objectload('captain_america_left_hand.png');
                    console.log("h");
                     }
                     if(keypressed == '38'){
                        up();
                        console.log("UP");
                    }
                    if(keypressed == '40'){
                        down();
                        console.log("DOWN");
                    }
                    if(keypressed == '37'){
                        left();
                        console.log("LEFT");
                    }
                    if(keypressed == '39'){
                        right();
                        console.log("RIGHT");
                    }
    }
    function up(){
        if(Hy>=0){
            Hy=Hy-Bh;
            console.log("Block Image height is: "+Bh);
            console.log("When up arrow is pressed X is: "+Hx+"Y is:" + Hy);
            canvas.remove(HeOb);
            Heroload()
        }
    }
    function left(){
        if(Hx>=0){
            Hx=Hx-Bw;
            console.log("Block Image Width is: "+Bw);
            console.log("When left arrow is pressed X is: "+Hx+"Y is:" + Hy);
            canvas.remove(Heob);
            Heroload();
        }
    }
    function right(){
        if(Hx<=850){
            Hx=Hx+Bw;
            console.log("Block Image width is: "+Bw);
            console.log("When right arrow is pressed X is: "+Hx+"Y is:" + Hy);
            canvas.remove(HeOb);
            Heroload();
        }
    }
    function down(){
        if(Hy<=450){
            Hy=Hy+Bh;
            console.log("Block Image height is: "+Bh);
            console.log("When down arrow is pressed X is: "+Hx+"Y is:" + Hy);
            canvas.remove(HeOb);
            Heroload();
        }
    }