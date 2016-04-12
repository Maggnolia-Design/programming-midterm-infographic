var compare=function(){
  for (entry1 in IQ_DATA_OG.data){
    for(entry2 in LIT_DATA_OG.data){
      if(entry1===entry2){
        IQ_DATA.push(IQ_DATA_OG.data[entry1])
        LIT_DATA.push(LIT_DATA_OG.data[entry2])
        COUNTRIES.push(entry1)
      }
    }
  }
}

compare()
//console.log(IQ_DATA)
// console.log(LIT_DATA)
// console.log(COUNTRIES)

//Loading typefaces

var fontHeader, fontBody

function preload() {
   fontHeader = loadFont("fonts/Quicksand-Regular.ttf");
   fontBody = loadFont("fonts/EBGaramond-Regular.ttf");
}


//Turning data into images
function setup() {
  createCanvas(2300,875)
  background(28,28,28)
  
  //LINES
  fill('rgba(70%,70%,100%,0.5)')
  rect(50,520,width,3)
  text("107.0 IQ",50,515)
  
  fill('rgba(100%,70%,70%,0.5)')
  rect(50,352,width,3)
  text("100.0 Literacy",50,347)
  
  //TITLE
  textSize(55)
  fill('#999')
  textFont(fontHeader)
  text("DISPARATE REPRESENTATION",110,85,600,200)

  //SUBTITLE
  fill('#444')
  textSize(100)
  text("[                ]",690,60,800,200)

  fill('#777')
  textSize(26)
  textFont(fontBody)
  text("Do countries with low literacy rates also show disproportionately low IQ averages?",750,100,600,200)
  
  //KEY
  textSize(17)
  fill('#66f')
  text("IQ Level",770,250,500,200)
  rect(750,260,10,8)
  fill('#f66')
  text("Literacy Rate",770,225,500,200)
  rect(750,235,10,8)

  //labels
  var spacing=90
  for (var i=0; i<LIT_DATA.length; i++) {
    spacing+=40
    fill('#999')
    rect(spacing,753, 28, 28)
  }

  //LABELS
  fill(28,28,28)
  textFont(fontHeader)
  textSize(17)
  text("BE / FR / BG / DK / BB / HR / ET /\tDE / JP / HU /", 135,753,1000,200)
  text("HK / BR \tGN \t FI /\tFJ / GR / NL \tNG /CO",532,753,1000,200)
  text("/ NZ / NP / EG / GT\tCN",877,753,1000,200)
  text("/ GQ / IQ / CA /\tIR /\tIT /\tEC/ CD / CZ / AR \tAU /\tIL /\tIN /\tLB /\tIE /\tID / CU /GH",1077,753,1000,200)
  text("/ MA\t KE / JM /MN \tMH/ KR / MY \tMX / AT",1760,753,1000,200)
}

function draw(){
  var SPACING=90
  
//collision with labels
  setup()
  for (var i=0; i<LIT_DATA.length; i++) {
    SPACING+=40
    hit=collidePointRect(mouseX,mouseY,SPACING,753, 28, 28)
    if (hit){
      fill('#aaa')
      text(COUNTRY_CODES[i] + ": " + " Literacy rate of " + LIT_DATA[i] + "; IQ level of " + IQ_DATA[i],spacing,810)
    }
  }
  
  for(each in IQ_DATA){
    SPACING+=40
    IQ_DATA.display(IQ_DATA.data[entry])
  }
  
  for(each in LIT_DATA){
    SPACING+=40
    LIT_DATA.display[each]()
  }
}

//Blue and Red Bars
function Bars(){
  noStroke()
  this.SPACING=90;
  this.xAxis=height-132
  this.barWidth=15.2

  this.display=function(){
    var LIT_barLength=(LIT_DATA[each]*1.5+240);
    fill('#f66')
    rect(SPACING, xAxis-LIT_barLength, barWidth, LIT_barLength)

    var IQ_barLength=IQ_DATA[each]*1.5+60;
    fill('#66f')
    rect(SPACING+13, xAxis-IQ_barLength, barWidth, IQ_barLength)
  }
}

  // //blue bars
  // noStroke()
  // var SPACING=103
  // for (each in IQ_DATA) {
  //   var IQ_barLength=IQ_DATA[each]*1.5+60;
  //   SPACING+=40
    
  //   fill('#66f')
  //   rect(SPACING, (height-132)-IQ_barLength, 15.2, IQ_barLength)
  // }
 
  // //red bars 
  // var SPACING=90
  // for (each in LIT_DATA) {
  //   var LIT_barLength=(LIT_DATA[each]*1.5+240);
  //   SPACING+=40
    
  //   fill('#f66')
  //   rect(SPACING, (height-132)-LIT_barLength, 15.2, LIT_barLength)
  // }