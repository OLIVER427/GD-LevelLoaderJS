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



//potbor in the customization shop (yes I know this is innefficient stop looking at this code)
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