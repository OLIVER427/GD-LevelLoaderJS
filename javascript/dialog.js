var dialogstatus = false
function newDialog(name, text, imgpath, endfunction) {
        if (endfunction == "") {
            endfunction = "removeDialog"
        }
        document.body.innerHTML += "<div id='dimmer'></div>"
        document.body.innerHTML += `
        <div id='dialogBoxBG'>
        <img id='endDialog' src='style/GJ_chatBtn_01_001.png' onclick="`+ endfunction +`">
        <div id='dialogBox'>
        <img id='dialogImg' src='`+ imgpath +`'>
        <div id='dialogTextBox'>
    <p id='nameText'>`+ name +`</p>
    <p id='dialogText'>`+ text +`</p>
        </div>
        </div>
        </div>
        `
        setTimeout(() => {
        document.getElementById('dialogBoxBG').style.top = "50%"
        }, 200);
}
function newSecretDialog(name, text, imgpath, endfunction) {
    if (endfunction == "") {
        endfunction = "removeDialog()"
    }
    document.body.innerHTML += "<div id='dimmer'></div>"
    document.body.innerHTML += `
    <div id='dialogBoxBG'>
    <img id='endDialog' src='../../style/GJ_chatBtn_01_001.png' onclick="`+ endfunction +`">
    <div id='dialogBox'>
    <img id='dialogImg' src='`+ imgpath +`'>
    <div id='dialogTextBox'>
<p id='nameText'>`+ name +`</p>
<p id='dialogText'>`+ text +`</p>
    </div>
    </div>
    </div>
    `
    setTimeout(() => {
    document.getElementById('dialogBoxBG').style.top = "50%"
    }, 200);
}
function removeDialog() {
    document.getElementById('dialogBoxBG').style.top = "-20%"
    if (dialogstatus == false) {
    document.getElementById('dimmer').remove();
    } else {
        setTimeout(() => {
            document.getElementById('dimmer').remove();
        }, 400);
    }
    setTimeout(() => {
        document.getElementById('dialogBoxBG').remove();
    }, 200);
}


function testSecondaryDialog() {
    removeDialog()
    setTimeout(() => {
        newDialog("Scratch","test 1", "dialog/dialogIcon_009-uhd.png", "removeDialog()")
        }, 400);
}
function firstDialogEnd() {
    removeDialog()
    location.reload()
}



//potbor in the customization shop for the first time (yes I know this is innefficient stop looking at this code)
function lockedItem() {
newDialog(" ","A Secret is required to unlock this Death Effect", "style/GJ_lockGray_001.png", "removeDialog()")
}
function customizeSecondaryDialog3() {
    dialogstatus = true
    removeDialog()
    dialogstatus = false
    setTimeout(() => {
        newDialog("Potbor","...", "dialog/dialogIcon_020-uhd.png", "removeDialog()")
        }, 400);
}
function customizeSecondaryDialog2() {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newDialog("Potbor","I've only got death effects right now", "dialog/dialogIcon_023-uhd.png", "customizeSecondaryDialog3()")
        }, 400);
}
function customizeSecondaryDialog1() {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newDialog("Potbor","You want customization options?", "dialog/dialogIcon_024-uhd.png", "customizeSecondaryDialog2()")
        }, 400);
}
function customizeSecondaryDialog0() {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newDialog("Potbor","oh...", "dialog/dialogIcon_019-uhd.png", "customizeSecondaryDialog1()")
        }, 400);
}

//the keymaster when you enter the secret room for the first time
function secretSecondaryDialog2() {
    dialogstatus = true
    removeDialog()
    dialogstatus = false
    setTimeout(() => {
        newSecretDialog("The Keymaster","I HAVE SAID NOTHING", "../../dialog/dialogIcon_017-uhd.png", "removeDialog()")
        }, 400);
}
function secretSecondaryDialog1() {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newSecretDialog("The Keymaster","Wait... you didn't come for <span style='color:lime'>it</span>?", "../../dialog/dialogIcon_004-uhd.png", "secretSecondaryDialog2()")
        }, 400);
}
function secretSecondaryDialog0() {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newSecretDialog("The Keymaster","Before you ask, I will not give <span style='color:lime'>it</span> to you.", "../../dialog/dialogIcon_002-uhd.png", "secretSecondaryDialog1()")
        }, 400);
}

//title secondary dialog
function titleSecondaryDialog0() {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newDialog("OLIVER427","Oh, and make sure to read the <a href='https://github.com/OLIVER427/GD-LevelLoaderJS/blob/main/README.md'>README file</a>, it has a lot of useful information, and maybe even a secret :)", "dialog/dialogIcon_100-uhd.png", "firstDialogEnd()")
    }, 400);
}


/* nah this wont work cause its so annoying to put a function with parameters inside a function with parameters
function mainSecondaryDialog(name, text, imgpath, endfunction) {
    dialogstatus = true
    removeDialog()
    setTimeout(() => {
        newDialog(name,text,imgpath, endfunction)
        }, 400);
}
*/