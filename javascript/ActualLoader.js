var page = document.getElementById('html'); // BE WARNED!!! REALLY WEIRD CODE UP AHEAD!!
var fileName = location.href
//page.requestFullscreen();                       LEVEL DATA REF
                                                //\\\\\\\///////////
                                                //let levelData = StereoMadness;// not anymore! making this work will break it!
                                                /////////\\\\\\\\\\\\
let bgImage = document.getElementById('bg');

function movebg() {
    bgpos += 2;
    bgImage.style.backgroundPositionX = "-" + bgpos + "px";
}
var bgpos = 0;


function loadData() {
    //var lvlsong = new Audio('audio/' + Object.keys({levelData})[0] +'.mp3');
    //console.log(lvlsong);
    
    //organizing data
    let dcAyVal = [['0', '0'],['-','-'],['-','-'],['-','-'],['transform: scale(-',',1)'],['scale:1 -',''],['rotate:','deg']];
    let blockData = levelData.split(';').map((elm) => elm.split(','));
    //console.log(blockData.slice(1).map((elm)=> elm[1]))
    let collData = blockData.slice(1).map((elm) => Object.keys(blockPresets).includes(elm[1]) ? [elm,'b'] : (Object.keys(spikePresets).includes(elm[1]) ? [elm,'s']: Object.keys(specialPresets).includes(elm[1]) ? [elm,'p']: '')).filter(String);
    let bDims = Object.assign(blockPresets, spikePresets, specialPresets);
    let sBVal = document.createElement("img"); //setBlockValue
    let mainLvls = ["StereoMadness","BackOnTrack","Polargeist","DryOut","BaseAfterBase","CantLetGo","Jumper","TimeMachine","DebugLevel"]
    //canvas setup
    //let c = document.getElementById('canvas')
    //let ctx = document.getElementById('canvas').getContext('2d')
    //let lstX = 0;
    //let lstY = 0;

    //load imgs
    let a = 1;
    while(a < blockData.length){ //This while loop repeats it for every block                    This over here is a fun random rotation value thing. try it sometime
        let props = 'left:' + blockData[a][3] *2.3333 + 'px;bottom:' + (blockData[a][5]-300) *2.3333 + 'px;' //+ ' transform:rotate(' + blockValue[5] +'deg)';
        let i = 7; //starts at 7 to skip sections of data (id, xPos, yPos)
        while(i < blockData[a].length){//tuning the props variable.
            let key = blockData[a][i-1];
            if (dcAyVal[key] != undefined){ //debug purpopses: basically set css values to nothing if it is undefined
                props = props + dcAyVal[key][0] + blockData[a][i] + dcAyVal[key][1] + ';';
            }
        i = i+2; //next property!
        };
        sBVal.src = "../Blocks/" + blockData[a][1] + ".png"; //set srcs img
        //user coin coin coin coin fire in the hole
        for (let i = 0; i < mainLvls.length; i++) {
            //console.log(i + mainLvls[i])
        if (blockData[a][1] == 1329 && String(fileName).includes(mainLvls[i])){
            sBVal.src = "../Blocks/SecretCoin.gif";
        }else if (blockData[a][1] == 1329) {
            sBVal.src = "../Blocks/UserCoin.gif"; //set srcs img
        } else {
            //heheheeheifworgbefjsdnkvjbgrueoiwfnkjdsbgeoruiewjfp
            //turn line of code below into/out of a comment to disable/enable the lobotomy
            //sBVal.src = "../Blocks/3854.png";
        }
        }
        sBVal.style.cssText = props; //gives block the property
        document.getElementById("levelContainer").appendChild(sBVal.cloneNode(true)); //*spawns elem*
        a++; //next block!
    };  
        //dfx
            //let CookieString = (document.cookie).split(";")
            //let DfxCookie = toString(CookieString[1]).replace("dfx=", "")
            let dfx;
            let mxFrame = [0,14,14,12,12,11,12,21,13,12,16,14,14,14,15,16,18,21,16,25,15];
            let frameNum = 1;
            let playDfx;
            let gameRunning = true
            //this is so annoying to do with cookies but heres my source I guess: https://www.w3schools.com/js/js_cookies.asp
            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                  let c = ca[i];
                  while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";
              }
            function death() {
                clearInterval(bgmoving)
                document.getElementById('player').style.opacity = 0
                gameRunning = false
                dfx = Math.round(Math.random()*18 + 1);
                frameNum = 1;
                playDfx = setInterval(rnThru, 60)
                var diesnd = new Audio('../audio/die.ogg')
                diesnd.play()
                document.body.innerHTML += "<img id='deatheffect' style='position:absolute;z-index:999999999999;height:auto;width:400px;transformOrigin: center center; transform: translate(-40%, 40%)'>"
                document.getElementById('deatheffect').style.bottom = player.style.bottom
                document.getElementById('deatheffect').style.left = player.style.left
                let deatheffectid = Number(getCookie('dfx'))
                if (Number(getCookie('dfx')) == 7) {
                    deatheffectid = dfx
                } else {
                    deatheffectid = Number(getCookie('dfx'))
                }
                function rnThru(){
                    if (frameNum >= mxFrame[deatheffectid]) {
                        clearInterval(playDfx);
                        setTimeout(() => {
                            location.reload()
                        }, 1000);
                    }else{
                        //document.getElementById('player').style.opacity = 1
                        document.getElementById('deatheffect').src = "../MiscSheets/PlayerExplosion_" + deatheffectid + "-hd/" + frameNum + ".png";
                        frameNum++;
                    }
                }
            }
    //collision
    let clckT = -1;
    let gDir = -1; //gravity direction
    function collCheck(a) { //set "coll" to all the elements colliding with it.
        coll = collData.map((elm) => elm[0][3]*2.33 + bDims[elm[0][1]][0]*35 >= x-35 && elm[0][3]*2.33 - bDims[elm[0][1]][0]*35 <= x+35 && elm[0][5]*2.33-660 + bDims[elm[0][1]][1]*35 >= a && elm[0][5]*2.33-660 - bDims[elm[0][1]][1]*35 <= a+70 ? elm : '').filter(String);// collision check
        coll = coll.length == 0 && a <= -660 ? [[['0'],'b']] : coll;//if you are colliding with the ground NOTE: MAJOR BUGS IF THERE ARE LESS THAN 100 OBJECTS
       //console.log(coll)
    };
//colldata.map((elm)=> object's X > plyrX
    let plyrMech = 'cube';
    let y = -660;
    let x = -20;
	//mac and chromebook xV is 15.9
	//windows xV is 14.5
    //turns out this is probably based on how much fps you get... good luck!
    let xV = 13.5;
    let yV = 1; //y - Velocity
    let g = 2.53;
    let r = 0;
    let btnD = 0;
    
    setTimeout(function(){

        //button detection
        window.addEventListener("keydown", (e)=>{if(e.which === 32 || e.which === 87 || e.which === 38 || e.which === 1){btnD = 1; clckT = 1}}); //detect when keys are pressed.
        window.addEventListener("keyup", (e)=>{if(e.which === 32 || e.which === 87 || e.which === 38 || e.which === 1){btnD = 0;}});

        window.addEventListener("mousedown", (e)=>{btnD = 1; clckT = 1});
        window.addEventListener("mouseup", (e)=>{btnD = 0;});
        let frameProgess = setInterval(() =>{
            //console.log(`y velocity: ${yV}, y position ${y}, gdir: ${gDir}`)
//CUBE MECH
if (gameRunning == true) {
            if(plyrMech == 'cube'){
                if(btnD == 1){
                    //g = 2.53;
                    g = 2.32;
                    collCheck(y+2*gDir);
                    yV = coll.map((elm)=> elm[1]).includes('b')? 28*-gDir: yV;//this is where it sets the y velocity
                }
                r+=xV/1.78 *-gDir;
            }
//SHIP MECH
            if(plyrMech == 'ship'){
                if(btnD == 1){
                    yV = yV < 25 ? yV + (-gDir*2): 25;
                }
                r = r>= 45 && btnD == 0 ? 45: -yV/0.5;
            }
//BALL MECH
            if(plyrMech == 'ball'){
                if(btnD == 1){
                    collCheck(y+2*gDir);
                    yV = coll.map((elm)=> elm[1]).includes('b')? 28*gDir: yV;
                    yV += 10 * gDir;
                    y += 2*-gDir;
                    gDir = -gDir;
                }
                r += 5;
            }
//UFO MECH
            if(plyrMech == 'ufo'){
                
            }
//WAVE MECH
            if(plyrMech == 'wave'){
                
            }
//ROBOT MECH
            if(plyrMech == 'robot'){
                
            }
//SPIDER MECH
            if(plyrMech == 'spider'){
                
            }
//SWING MECH
            if(plyrMech == 'swing'){
                
            }
            
            //gravity
            yV = yV+g*gDir;
            y = y+yV;
            
            collCheck(y);
            //spike collisions
            if(coll.map((elm)=> elm[1]).includes('s')){
                death()
                //setTimeout(() => {
                //location.reload()
                //}, 1000);
            }
            //block collisions    
            if(coll.map((elm)=> elm[1]).includes('b')) {
                yV = 0;
                r = Math.round(r/90)*90;
                while (coll.map((elm)=> elm[1]).includes('b')){
                    y += -gDir;
                    collCheck(y);
                }
            } 
            //special collisions:
            if(coll.map((elm)=> elm[1]).includes('p')){
                // I think these are the portal collision actions
                if(coll.map((elm)=> elm[0][1]).includes('12')){ // Cube Portal
                    plyrMech = 'cube';
                    document.getElementById('player').src = "../icons/robtop.png";
                    g = 2.53;
                    r = 0;
                }
                if(coll.map((elm)=> elm[0][1]).includes('13')){ // Ship Portal
                    plyrMech = 'ship';
                    r = 0;
                    g = 0.9;
                    document.getElementById('player').src = "../icons/ship1.5.png";

                }
                if(coll.map((elm)=> elm[0][1]).includes('47')){ // Ball Portal
                    plyrMech = 'ball';
                    document.getElementById('player').src = "../icons/ball1.png";
                }
                if(coll.map((elm)=> elm[0][1]).includes('11')){
                    gDir = 1;
                    document.getElementById('player').style.transform = 'scaleY(-1)';
                }
                if(coll.map((elm)=> elm[0][1]).includes('10')){
                    gDir = -1;
                    document.getElementById('player').style.transform = 'scaleY(1)';
                }
                //yellow orb
                if(coll.map((elm)=> elm[0][1]).includes('36') && clckT > 0 ){
                    yV = 28;
                }
                //yellow pad
                if(coll.map((elm)=> elm[0][1]).includes('35')){
                    yV = 35;
                }
                //blue pad
                if(coll.map((elm)=> elm[0][1]).includes('67')){
                    if (gDir == 1) {
                        gDir = -1
                        document.getElementById('player').style.transform = 'scaleY(1)';
                    }
                    if (gDir == -1) {
                        gDir = 1
                        document.getElementById('player').style.transform = 'scaleY(-1)';
                    }
                }
                //blue orb
                if(coll.map((elm)=> elm[0][1]).includes('84') && btnD == 1 ){
                    if (gDir == 1) {
                        gDir = -1
                    }
                    if (gDir == -1) {
                        gDir = 1
                    }
                }
                //red pad
                if(coll.map((elm)=> elm[0][1]).includes('1332') ){
                    yV = 50;
                }
                //red orb
                if(coll.map((elm)=> elm[0][1]).includes('1333') && btnD == 1 ){
                    yV = 50;
                }
                //purple pad
                if(coll.map((elm)=> elm[0][1]).includes('140') ){
                    yV = 17;
                }
                //purple orb
                if(coll.map((elm)=> elm[0][1]).includes('141')&& btnD == 1){
                    yV = 17;
                }

            }
            //console.log(yV)
            x = x + xV;

            if(clckT >= 0){
                clckT += 0.02;

            }
                
//update frame:
            
            document.getElementById('player').style.left = x + 'px'; 
            document.getElementById('player').style.bottom = y + 'px'; 
            document.getElementById('player').style.rotate = r + 'deg';
            if(x>= 350){
                window.scroll({ top: 750, left: x-350, behavior: 'auto' });
            }
        }
        },16);
    }, 16);
};


loadData()
let bgmoving = setInterval(movebg,40);
