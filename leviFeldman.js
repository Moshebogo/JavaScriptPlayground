var levi = function(){
    
    // noStroke();
    
    //Variables
    var whidthAndHeight = 300;
    var XandY = 2/3*whidthAndHeight;
    var eye = 1/10 * whidthAndHeight;
    
    //background
    background(0, 208, 230);
    
    //face
    fill(255, 255, 0);//color face (yellow)
    ellipse (200, 200, whidthAndHeight, whidthAndHeight); //face
    
    //mouth
    fill(255, 0, 0);//color mouth (red)
    ellipse (XandY, XandY+50, whidthAndHeight-200, whidthAndHeight-250); //mouthe
    
    //eyes
    fill(0, 0, 0);//color eyes (black)
    ellipse (XandY-50,whidthAndHeight-175, eye, eye); //righte eye
    ellipse (XandY+50,whidthAndHeight-175,eye,eye); //left eye
    
    //yarmulka
    fill(90, 93, 115);//color yarmulka (gray)
    arc(200,72,155,100,180,360);//yarmulka
};

levi();