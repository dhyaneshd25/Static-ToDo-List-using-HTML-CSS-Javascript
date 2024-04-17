

localStorage.clear();
function deleteitem(index){
  stt = localStorage.getItem('itemJSON');
    iAA = JSON.parse(stt);
    iAA.splice(index,1);
    localStorage.setItem('itemJSON', JSON.stringify(iAA));
    stt = localStorage.getItem('itemJSON');
    iAA = JSON.parse(stt);
    let t = document.getElementById('tb')
  let sr = "";
  
  iAA.forEach((ele, ind) => {
    if(ind>=0){
        t.style="display:flex";
        }else{
            t.style="display:none";
        }
        sr += `<tr>  <td class="td0">${ind+1}.</td><td class="td1">${ele[0]}</td>  <td class="td2">${ele[1]}</td>  <td  class="td3" onclick="deleteitem(${ind})">Delete</td>  </tr > ` 

  });

  t.innerHTML = sr;
}
ad = document.getElementById('add');
ad.addEventListener('click', () => {
  f = document.getElementById('i1').value;
  s = document.getElementById('i2').value;
  if (localStorage.getItem('itemJSON') == null) {
    iA = [];
    iA.push([f, s]);
  
    localStorage.setItem('itemJSON', JSON.stringify(iA));
  

  } else {
    st = localStorage.getItem('itemJSON');
    console.log(st)
    console.log(st[0])
    iA = JSON.parse(st);
    console.log(iA)
    console.log(iA[0])
    iA.push([f, s]);
    localStorage.setItem('itemJSON', JSON.stringify(iA));
  }
  let t = document.getElementById('tb')
  let sr = "";
  
  iA.forEach((element, index) => {
    
    if(index>=0){
        t.style="display:flex";
        }else{
            t.style="display:none";
        }
    sr += `<tr>  <td class="td0">${index+1}.</td><td class="td1">${element[0]}</td>  <td class="td2">${element[1]}</td>  <td  class="td3" onclick="deleteitem(${index})">Delete</td>  </tr > ` 

  });

  t.innerHTML = sr;


})
