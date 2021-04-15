window.onload = imgshow;
function imgshow(){
  var loc = window.location.search;
  var num = loc.replace("?","");
  document.getElementById('header').textContent = num;
  const url1 = "all-ships/" + num + "-1.png";
  document.getElementById('shipinfo1').src = url1;
  const url2 = "all-ships/" + num + "-2.png";
  document.getElementById('shipinfo2').src = url2;
  async function Name(){
    const url = 'https://spreadsheets.google.com/feeds/cells/1MWYXoYEnV0BMyhHlmR4IAiJeurondtIzkLSFYXwt9_8/1/public/full/R' +  num + 'C1?alt=json';
    const get = await fetch(url);
    const data = await get.json();
    document.getElementById('shipname').textContent = data.entry.content.$t;
  }async function Country(){
    const url = 'https://spreadsheets.google.com/feeds/cells/1MWYXoYEnV0BMyhHlmR4IAiJeurondtIzkLSFYXwt9_8/1/public/full/R' +  num + 'C2?alt=json';
    const get = await fetch(url);
    const data = await get.json();
    document.getElementById('shipcountry').textContent = data.entry.content.$t;
  }async function Type(){
    const url = 'https://spreadsheets.google.com/feeds/cells/1MWYXoYEnV0BMyhHlmR4IAiJeurondtIzkLSFYXwt9_8/1/public/full/R' +  num + 'C3?alt=json';
    const get = await fetch(url);
    const data = await get.json();
    document.getElementById('shiptype').textContent = data.entry.content.$t;
  }async function Bond(){
    const url = 'https://spreadsheets.google.com/feeds/cells/1MWYXoYEnV0BMyhHlmR4IAiJeurondtIzkLSFYXwt9_8/1/public/full/R' +  num + 'C4?alt=json';
    const get = await fetch(url);
    const data = await get.json();
    document.getElementById('shipbond').textContent = data.entry.content.$t;
  }
  Name();
  Country();
  Type();
  Bond();
}