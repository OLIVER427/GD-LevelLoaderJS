![Main Logo for GD Level Loader](readme-imgs/LogoBanner.png)
![GitHub License](https://img.shields.io/github/license/OLIVER427/GD-LevelLoaderJS)
![GitHub repo size](https://img.shields.io/github/repo-size/OLIVER427/GD-LevelLoaderJS)
![GitHub Repo stars](https://img.shields.io/github/stars/OLIVER427/GD-LevelLoaderJS)
![GitHub forks](https://img.shields.io/github/forks/OLIVER427/GD-LevelLoaderJS)
###### this is an old project that I am just now modifying to put on github, we will probably not be able to fix any issues you have with the site. Most of this code is from a long time ago and it is very unorganized and inefficient, and I cannot guarantee that it will work on all devices. You have been warned.

# Geometry Dash Level Loader

A very laggy mess, but a recreation of Geometry Dash, made in pure Javascript, HTML, and CSS. So far, we have a (mostly) functioning cube gamemode, and a partially working ship gamemode, along with a really broken ball gamemode.

## IMPORTANT TIP!!!!
use Ctrl + and Ctrl - (Command on mac) to zoom in and out of the levels, it really helps see stuff, trust me.

# New Stuff!

Since this was a pretty laggy recreation, I added some new stuff in the last month to distract you from how bad this is!

- New Death Effects
- Customization Menu (death effects only)
- Secrets
- Secret Codes (not much though, ill add more rewards to them later)
- Dialog Boxes
- New Level Select Menu
- Zoomed out the background on the title screen
- More Lag (idk why, but like a year ago this was amazingly smooth gameplay)
- New Level Viewer


About the secrets... well its a github repo, so you can just go into the files and access them, or grab the codes or something, but if you want to do that I dont really see a point. You can if you want to though.
## How to make a level
You can use GDColon's [Spreadsheet Editor](https://gdcolon.com/gdsheet), and paste your level data into the text input in the Level Viewer (through the editor button on the title screen). The level data should look something like this:

```
kS38,1_255_2_0_3_0_4_-1_6_1000_7_1|1_255_2_153_3_0_4_-1_6_1001_7_1|1_255_2_255_3_0_4_-1_6_1009_7_1|1_255_2_255_3_255_4_-1_6_1004_7_1|1_255_2_255_3_255_4_-1_6_1002_7_1|,kA13,0,kA15,0,kA16,0,kA14,,kA6,5,kA7,7,kA17,1,kA18,0,kS39,0,kA2,0,kA3,0,kA8,0,kA4,0,kA9,0,kA10,0,kA11,0;1,1,2,19845,3,1305;1,1,2,19875,3,1305;1,1,2,19905,3,1305;1,1,2,19935,3,1305;1,1,2,19965,3,1305;1,1,2,19995,3,1305;1,1,2,20025,3,1305;1,1,2,20055,3,1305;1,1,2,20085,3,1305;1,1,2,20115,3,1305;1,1,2,20145,3,1305;1,1,2,20175,3,1305;1,1,2,19845,3,1275;1,1,2,19875,3,1275;1,1,2,19905,3,1275;1,1,2,19935,3,1275;1,1,2,19965,3,1275;1,1,2,19995,3,1275;1,1,2,20025,3,1275;1,1,2,20055,3,1275;1,1,2,20085,3,1275;1,1,2,20115,3,1275;1,1,2,20145,3,1275;1,1,2,20175,3,1275;1,1,2,19845,3,1245;1,1,2,19875,3,1245;1,1,2,19905,3,1245;1,1,2,19935,3,1245;1,1,2,19965,3,1245;1,1,2,19995,3,1245;1,1,2,20025,3,1245;1,1,2,20055,3,1245;1,1,2,20085,3,1245;1,1,2,20115,3,1245;1,1,2,20145,3,1245;1,1,2,20175,3,1245;1,1,2,19845,3,1215;1,1,2,19875,3,1215;1,1,2,19905,3,1215;1,1,2,19935,3,1215;1,1,2,19965,3,1215;1,1,2,19995,3,1215;1,1,2,20025,3,1215;1,1,2,20055,3,1215;1,1,2,20085,3,1215;1,1,2,20115,3,1215;1,1,2,20145,3,1215;1,1,2,20175,3,1215;1,1,2,19845,3,1185;1,1,2,19875,3,1185;1,1,2,19905,3,1185;1,1,2,19935,3,1185;1,1,2,19965,3,1185;1,1,2,19995,3,1185;1,1,2,20025,3,1185;1,1,2,20055,3,1185;1,1,2,20085,3,1185;1,1,2,20115,3,1185;1,1,2,20145,3,1185;1,1,2,20175,3,1185;1,1,2,19845,3,1155;1,1,2,19875,3,1155;1,1,2,19905,3,1155;1,1,2,19935,3,1155;1,1,2,19965,3,1155;1,1,2,19995,3,1155;1,1,2,20025,3,1155;1,1,2,20055,3,1155;1,1,2,20085,3,1155;1,1,2,20115,3,1155;1,1,2,20145,3,1155;1,1,2,20175,3,1155;1,1,2,19845,3,1125;1,1,2,19875,3,1125;1,1,2,19905,3,1125;1,1,2,19935,3,1125;1,1,2,19965,3,1125;1,1,2,19995,3,1125;1,1,2,20025,3,1125;1,1,2,20055,3,1125;1,1,2,20085,3,1125;1,1,2,20115,3,1125;1,1,2,20145,3,1125;1,1,2,20175,3,1125;1,1,2,19845,3,1095;1,1,2,19875,3,1095;1,1,2,19905,3,1095;1,1,2,19935,3,1095;1,1,2,19965,3,1095;1,1,2,19995,3,1095;1,1,2,20025,3,1095;1,1,2,20055,3,1095;1,1,2,20085,3,1095;1,1,2,20115,3,1095;1,1,2,20145,3,1095;1,1,2,20175,3,1095;1,1,2,19845,3,1065;1,1,2,19875,3,1065;1,1,2,19905,3,1065;1,1,2,19935,3,1065;1,1,2,19965,3,1065;1,1,2,19995,3,1065;1,1,2,20025,3,1065;1,1,2,20055,3,1065;1,1,2,20085,3,1065;1,1,2,20115,3,1065;1,1,2,20145,3,1065;1,1,2,20175,3,1065;1,1,2,19845,3,1035;1,1,2,19875,3,1035;1,1,2,19905,3,1035;1,1,2,19935,3,1035;1,1,2,19965,3,1035;1,1,2,19995,3,1035;1,1,2,20025,3,1035;1,1,2,20055,3,1035;1,1,2,20085,3,1035;1,1,2,20115,3,1035;1,1,2,20145,3,1035;1,1,2,20175,3,1035;1,1,2,19845,3,1005;1,1,2,19875,3,1005;1,1,2,19905,3,1005;1,1,2,19935,3,1005;1,1,2,19965,3,1005;1,1,2,19995,3,1005;1,1,2,20025,3,1005;1,1,2,20055,3,1005;1,1,2,20085,3,1005;1,1,2,20115,3,1005;1,1,2,20145,3,1005;1,1,2,20175,3,1005;1,1,2,19845,3,975;1,1,2,19875,3,975;1,1,2,19905,3,975;1,1,2,19935,3,975;1,1,2,19965,3,975;1,1,2,19995,3,975;1,1,2,20025,3,975;1,1,2,20055,3,975;1,1,2,20085,3,975;1,1,2,20115,3,975;1,1,2,20145,3,975;1,1,2,20175,3,975;1,1,2,495,3,465;1,1,2,525,3,465;1,1,2,555,3,465;1,1,2,585,3,465;1,1,2,615,3,465;1,1,2,645,3,465;1,1,2,675,3,465;1,1,2,705,3,465;1,1,2,735,3,465;1,1,2,765,3,465;1,1,2,795,3,465;1,1,2,825,3,465;1,1,2,855,3,465;1,1,2,885,3,465;1,1,2,915,3,465;1,1,2,945,3,465;1,1,2,975,3,465;1,1,2,1005,3,465;1,1,2,1035,3,465;1,1,2,1065,3,465;1,1,2,1095,3,465;1,1,2,1125,3,465;1,1,2,1155,3,465;1,1,2,1185,3,465;1,1,2,1215,3,465;1,1,2,1245,3,465;1,1,2,1275,3,465;1,1,2,1305,3,465;1,1,2,1335,3,465;1,1,2,1365,3,465;1,1,2,1395,3,465;1,1,2,1425,3,465;1,1,2,1455,3,465;1,1,2,1485,3,465;1,1,2,1515,3,465;1,1,2,1545,3,465;1,1,2,1575,3,465;1,1,2,1605,3,465;1,1,2,1635,3,465;1,1,2,1665,3,465;1,1,2,1695,3,465;1,1,2,1725,3,465;1,1,2,1755,3,465;1,1,2,1785,3,465;1,1,2,1815,3,465;1,1,2,1845,3,465;1,1,2,1875,3,465;1,1,2,1905,3,465;1,1,2,1935,3,465;1,1,2,1965,3,465;1,1,2,1995,3,465;1,1,2,2025,3,465;1,1,2,2055,3,465;1,1,2,2085,3,465;1,1,2,2115,3,465;1,1,2,2145,3,465;1,1,2,2175,3,465;1,1,2,2205,3,465;1,1,2,2235,3,465;1,1,2,2265,3,465;1,1,2,2295,3,465;1,1,2,2325,3,465;1,1,2,2355,3,465;1,1,2,2385,3,465;1,1,2,2415,3,465;1,1,2,2445,3,465;1,1,2,2475,3,465;1,1,2,2505,3,465;1,1,2,2535,3,465;1,1,2,2565,3,465;1,1,2,2595,3,465;1,1,2,2625,3,465;1,1,2,2655,3,465;1,1,2,2685,3,465;1,1,2,2715,3,465;1,1,2,2745,3,465;1,1,2,2775,3,465;1,1,2,2805,3,465;1,1,2,2835,3,465;1,1,2,2865,3,465;1,1,2,2895,3,465;1,1,2,2925,3,465;1,1,2,2955,3,465;1,1,2,2985,3,465;1,1,2,3015,3,465;1,1,2,3045,3,465;1,1,2,3075,3,465;1,1,2,3105,3,465;1,1,2,3135,3,465;1,1,2,3165,3,465;1,1,2,3195,3,465;1,1,2,3225,3,465;1,1,2,3255,3,465;1,1,2,3285,3,465;1,1,2,3315,3,465;1,1,2,3345,3,465;1,1,2,3375,3,465;1,1,2,3405,3,465;1,1,2,3435,3,465;1,1,2,3465,3,465;1,1,2,3495,3,465;1,1,2,3525,3,465;1,1,2,3555,3,465;1,1,2,3585,3,465;1,1,2,3615,3,465;1,1,2,495,3,435;1,1,2,525,3,435;1,1,2,555,3,435;1,1,2,585,3,435;1,1,2,615,3,435;1,1,2,645,3,435;1,1,2,675,3,435;1,1,2,705,3,435;1,1,2,735,3,435;1,1,2,765,3,435;1,1,2,795,3,435;1,1,2,825,3,435;1,1,2,855,3,435;1,1,2,885,3,435;1,1,2,915,3,435;1,1,2,945,3,435;1,1,2,975,3,435;1,1,2,1005,3,435;1,1,2,1035,3,435;1,1,2,1065,3,435;1,1,2,1095,3,435;1,1,2,1125,3,435;1,1,2,1155,3,435;1,1,2,1185,3,435;1,1,2,1215,3,435;1,1,2,1245,3,435;1,1,2,1275,3,435;1,1,2,1305,3,435;1,1,2,1335,3,435;1,1,2,1365,3,435;1,1,2,1395,3,435;1,1,2,1425,3,435;1,1,2,1455,3,435;1,1,2,1485,3,435;1,1,2,1515,3,435;1,1,2,1545,3,435;1,1,2,1575,3,435;1,1,2,1605,3,435;1,1,2,1635,3,435;1,1,2,1665,3,435;1,1,2,1695,3,435;1,1,2,1725,3,435;1,1,2,1755,3,435;1,1,2,1785,3,435;1,1,2,1815,3,435;1,1,2,1845,3,435;1,1,2,1875,3,435;1,1,2,1905,3,435;1,1,2,1935,3,435;1,1,2,1965,3,435;1,1,2,1995,3,435;1,1,2,2025,3,435;1,1,2,2055,3,435;1,1,2,2085,3,435;1,1,2,2115,3,435;1,1,2,2145,3,435;1,1,2,2175,3,435;1,1,2,2205,3,435;1,1,2,2235,3,435;1,1,2,2265,3,435;1,1,2,2295,3,435;1,1,2,2325,3,435;1,1,2,2355,3,435;1,1,2,2385,3,435;1,1,2,2415,3,435;1,1,2,2445,3,435;1,1,2,2475,3,435;1,1,2,2505,3,435;1,1,2,2535,3,435;1,1,2,2565,3,435;1,1,2,2595,3,435;1,1,2,2625,3,435;1,1,2,2655,3,435;1,1,2,2685,3,435;1,1,2,2715,3,435;1,1,2,2745,3,435;1,1,2,2775,3,435;1,1,2,2805,3,435;1,1,2,2835,3,435;1,1,2,2865,3,435;1,1,2,2895,3,435;1,1,2,2925,3,435;1,1,2,2955,3,435;1,1,2,2985,3,435;1,1,2,3015,3,435;1,1,2,3045,3,435;1,1,2,3075,3,435;1,1,2,3105,3,435;1,1,2,3135,3,435;1,1,2,3165,3,435;1,1,2,3195,3,435;1,1,2,3225,3,435;1,1,2,3255,3,435;1,1,2,3285,3,435;1,1,2,3315,3,435;1,1,2,3345,3,435;1,1,2,3375,3,435;1,1,2,3405,3,435;1,1,2,3435,3,435;1,1,2,3465,3,435;1,1,2,3495,3,435;1,1,2,3525,3,435;1,1,2,3555,3,435;1,1,2,3585,3,435;1,1,2,3615,3,435;1,10,2,825,3,375;1,8,2,1275,3,405,6,180;1,8,2,1575,3,405,6,180;1,67,2,2265,3,418,6,180;1,1,2,19875,3,345;1,1,2,20025,3,345;1,1,2,20145,3,345;1,36,2,855,3,315;1,1,2,19875,3,315;1,1,2,20025,3,315;1,10,2,3675,3,255;1,1,2,19875,3,285;1,1,2,20025,3,285;1,1,2,20145,3,285;1,1,2,19875,3,255;1,1,2,20025,3,255;1,1,2,20145,3,255;1,1,2,19875,3,225;1,1,2,20025,3,225;1,1,2,20145,3,225;1,1,2,19875,3,195;1,1,2,20025,3,195;1,1,2,20145,3,195;1,11,2,495,3,135;1,1329,2,765,3,165;1,1329,2,1005,3,165;1,1329,2,1335,3,165;1,1,2,19875,3,165;1,1,2,19905,3,165;1,1,2,19935,3,165;1,1,2,19965,3,165;1,1,2,19995,3,165;1,1,2,20025,3,165;1,1,2,20145,3,165;1,1,2,19875,3,135;1,1,2,20025,3,135;1,1,2,20145,3,135;1,1,2,19875,3,105;1,1,2,20025,3,105;1,1,2,20145,3,105;1,1,2,285,3,75;1,1,2,315,3,75;1,1,2,345,3,75;1,1,2,375,3,75;1,1,2,405,3,75;1,1,2,435,3,75;1,1,2,465,3,75;1,13,2,495,3,45;1,47,2,2325,3,45;1,1,2,19875,3,75;1,1,2,20025,3,75;1,1,2,20145,3,75;1,36,2,225,3,45;1,1333,2,1935,3,45;1,141,2,2085,3,45;1,84,2,2235,3,45;1,1,2,19875,3,45;1,1,2,20025,3,45;1,1,2,20145,3,45;1,35,2,855,3,2;1,1332,2,1185,3,2;1,140,2,1515,3,2;1,67,2,1725,3,2;1,1,2,19875,3,15;1,1,2,20025,3,15;1,1,2,20145,3,15;
```
(This example loads in my testing level for messing with the orbs, portals, gravity, pads, etc.)

Also make sure that your level has over 100 objects in it, because otherwise if you try to play it, the site will just lag out a lot, and then crash.

After loading the level in and looking around for a bit, you can click the "Save File" button, (underneath the load data button) to download the level. You can enter in a custom name, and background color in the viewer, but if you dont, the name will default to ```Untitled Level.html``` and the color will default to Blue. After downloading, make sure to clone this repo.
```
git clone https://github.com/OLIVER427/GD-LevelLoaderJS.git
```
after cloning this repo to a directory of your choice, place your custom level file you downloaded earlier into the Levels folder. Then open your custom level file to play!

I will probably make a built in custom level player eventually, but its not a top priority so thats why you have to clone this repo (or just download it I guess) to actually play your custom levels. 

## There may be a lot of issues
I helped make this with [BlockHead66](https://github.com/Blockhead66), when we had a lot less knowledge of Javascript and CSS, so I made some dumb mistakes and just ignored things that could have been WAY more efficient. I also have to individually grab each image file from a spritesheet (using GDColon's [Spritesheet Splitter](https://gdcolon.com/gdsplitter/)) so not every block and their functions are in the site.

## Why are Back On Track and some other levels impossible?
sorry about that, I pulled the level data from GD (using GDColon's [Save Explorer](https://gdcolon.com/gdsave/)), and I cant change the data easily. Paired with the fact that you will teleport up any blocks you would think you'd crash into, in Back On Tracks's case, you teleport straight into a spike. These spikes do indeed make you have to restart the level.

## What to do if you want to avoid lag or crashing the site
Well maybe dont play this if you're looking for a smooth experience, but I have a little list of things to avoid.

- Hitting the ground in upside down ship gamemode will crash the site (It tries to teleport to the bottom of it, but since it is the floor it would have to go infinitly, which it tries to do, and then crashes the site). this crash is also known as "dissapointment.jpg" which I recreated in real GD for my github pfp.

- When making a level, make sure it has over 100 objects or else the site will begin to lag out and eventually stop running.

- Try not to load a level with too many objects (over maybe 10k), each one is an ``` <img> ``` HTML element, and too many will lag out the site (if you check funlevels.js in the javascript folder you will see that I tried).

- Using the ball gamemode at all is very risky and a similar thing that happens with upside down ship will happen if you try to use the weird glitchy swingcopter ball gamemode that we somehow made.

## No music?

yeah, sorry about that. but there is some menu music! to allow it, you have to enable automatic audio playing on the site, which looks something like this:

### Firefox

![Enable Audio on Firefox](readme-imgs/audiofirefox.png)

### Chrome
#### (it doesnt usually show the slider in the first image, I already had enabled it though)

![Enable Audio on Chrome](readme-imgs/audiochrome1.png)
#### then scroll down until you see this
![Enable Audio on Chrome](readme-imgs/audiochrome2.png)

### Edge

#### I am not opening Edge for this, sorry Edge users

# Hmm...


If you made it this far, THANKS! I appreciate that you took the time to read how to use this site, and in reward, I give you this:
```
openthesecretprettyplease
```
Now you gotta figure out what to do with it! (hmm... where are the input boxes in this site again?)
### GOOD LUCK, and NO CHEATING!
