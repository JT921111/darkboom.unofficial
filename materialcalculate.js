window.onload = initlv;
var startlv;
var endlv;
var angle = 0;
function initlv(){
  startlv = 1;
  endlv = 80;
}
async function matcal(){
  document.getElementById('loadingword1').style.top = "62%";
  document.getElementById('loadingword2').style.top = "62%";
  document.getElementById('loadingword3').style.top = "62%";
  document.getElementById('loadingfilm').style.display = "";
  document.getElementById('loadingcircle').style.display = "";
  document.getElementById('loadingword').style.display = "";
  document.getElementById('loadingword1').style.display = "";
  document.getElementById('loadingword2').style.display = "";
  document.getElementById('loadingword3').style.display = "";
  angle = 0;
  var loc = window.location.search;
  var num = loc.replace("?","");
  const raurl = 'https://spreadsheets.google.com/feeds/cells/1MWYXoYEnV0BMyhHlmR4IAiJeurondtIzkLSFYXwt9_8/1/public/full/R' +  num + 'C5?alt=json';
  const get = await fetch(raurl);
  const data = await get.json();
  const rarity = data.entry.content.$t;
  stlv = parseInt(document.getElementById('startlv').value);
  edlv = parseInt(document.getElementById('endlv').value);
  if(edlv > 80){
    document.getElementById('endlv').value = 80;
    edlv = 80;
  }else if(edlv <= stlv){
    var l =  Math.max(Math.min(stlv, 79), 1) + 1;
    document.getElementById('endlv').value = l;
    edlv = l;
  }
  if(stlv >= edlv){
    var s =  Math.min(Math.max(edlv, 2), 80) - 1
    document.getElementById('startlv').value =  s;
    stlv =  s;
  }else if(stlv < 1){
    document.getElementById('startlv').value = 1;
    stlv = 1;
  }
  var stbtc = 0;
  var edbtc = 0;
  if(stlv == 20 || stlv == 40 || stlv == 50 || stlv == 60 || stlv == 70){
    document.getElementById('stbtw').style.display = "";
    const element = document.getElementById('stbt');
    element.style.display = "";
    if(element.checked == true)
      stbtc = 1;
  }else{
    document.getElementById('stbtw').style.display = "none";
    document.getElementById('stbt').style.display = "none";
  }
  if(edlv == 20 || edlv == 40 || edlv == 50 || edlv == 60 || edlv == 70){
    document.getElementById('edbtw').style.display = "";
    const element = document.getElementById('edbt');
    element.style.display = "";
    if(element.checked == true)
      edbtc = 1;
  }else{
    document.getElementById('edbtw').style.display = "none";
    document.getElementById('edbt').style.display = "none";
  }
  const stt = stlv;
  const edt = edlv;
  stlv += 2;
  if(stt >= 21)
    stlv += 1;
  if(stt >= 41)
    stlv += 1;
  if(stt >= 51)
    stlv += 1;
  if(stt >= 61)
    stlv += 1;
  if(stt >= 71)
    stlv += 1;
  if(stbtc != 1 && stt <= 20)
    stlv -= 1;
  edlv += 1;
  if(edt >= 21)
    edlv += 1;
  if(edt >= 41)
    edlv += 1;
  if(edt >= 51)
    edlv += 1;
  if(edt >= 61)
    edlv += 1;
  if(edt >= 71)
    edlv += 1;
  if(edbtc == 1)
    edlv += 1;
  var raritynum;
  switch (rarity){
    case "n":
      raritynum = 1;
    case "r":
      raritynum = 2;
    case "sr":
      raritynum = 3;
    case "ssr":
      raritynum = 4;
    case ur:
      raritynum = 5;
  }
  var bpr = parseInt(raritynum) * 3 - 1;
  var solr = parseInt(raritynum) * 3;
  var trir = parseInt(raritynum) * 3 + 1;
  var bpt = 0;
  var solt = 0;
  var trit = 0;
  for(var i = stlv + 1; i <= edlv; i++){
    document.getElementById('loadingword1').style.top = "62%";
    document.getElementById('loadingword2').style.top = "61%";
    document.getElementById('loadingword3').style.top = "62%";
    const bpurl = 'https://spreadsheets.google.com/feeds/cells/1IzT519Ugp01339LtCKGsN_8JbCetEz2YddA7yzGYvRo/1/public/full/R' +  i + 'C' + bpr + '?alt=json';
    const bpg = await fetch(bpurl);
    const bpd = await bpg.json();
    document.getElementById('loadingword1').style.top = "62%";
    document.getElementById('loadingword2').style.top = "62%";
    document.getElementById('loadingword3').style.top = "61%";
    const solurl = 'https://spreadsheets.google.com/feeds/cells/1IzT519Ugp01339LtCKGsN_8JbCetEz2YddA7yzGYvRo/1/public/full/R' +  i + 'C' + solr + '?alt=json';
    const solg = await fetch(solurl);
    const sold = await solg.json();
    document.getElementById('loadingword1').style.top = "61%";
    document.getElementById('loadingword2').style.top = "62%";
    document.getElementById('loadingword3').style.top = "62%";
    const triurl = 'https://spreadsheets.google.com/feeds/cells/1IzT519Ugp01339LtCKGsN_8JbCetEz2YddA7yzGYvRo/1/public/full/R' +  i + 'C' + trir + '?alt=json';
    const trig = await fetch(triurl);
    const trid = await trig.json();
    document.getElementById('loadingword1').style.top = "62%";
    document.getElementById('loadingword2').style.top = "62%";
    document.getElementById('loadingword3').style.top = "62%";
    const bpadd = bpd.entry.content.$t;
    bpt += parseInt(bpadd);
    console.log("bp", bpadd);
    const soladd = sold.entry.content.$t;
    solt += parseInt(soladd);
    console.log("sol", soladd);
    const triadd = trid.entry.content.$t;
    trit += parseInt(triadd);
    console.log("tri", triadd);
  }
  document.getElementById('bp').textContent = bpt;
  document.getElementById('sol').textContent = solt;
  document.getElementById('tri').textContent = trit;
  document.getElementById('loadingfilm').style.display = "none";
  document.getElementById('loadingcircle').style.display = "none";
  document.getElementById('loadingword').style.display = "none";
  document.getElementById('loadingword1').style.display = "none";
  document.getElementById('loadingword2').style.display = "none";
  document.getElementById('loadingword3').style.display = "none";
}
document.addEventListener('keypress', function(enterpress){
  if(enterpress.code == "Enter" || enterpress.code == "NumpadEnter")
    matcal();
}); 