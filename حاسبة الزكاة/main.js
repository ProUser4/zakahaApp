let app    = document.getElementById('app');
let types  = document.getElementById('types');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');
let btn    = document.getElementById('btn');
let raido  = document.getElementById('raido');
let lang = "en"



if(types.value !=="plaint"){raido.style.display = "none"}


// 🔁 Reset input2 and raido display based on selected type
types.addEventListener('change', () => {
  input2.disabled = false;
  input2.style.backgroundColor = "";
  result.value = "";
  raido.style.display = "none";

  if (types.value === 'money') {
    input2.disabled = true;
    input2.style.backgroundColor = "lightgray";
  }

  if (types.value === 'plaint') {
  raido.style.display = 'flex';
   if (lang == 'en'){
  input1.placeholder = "minmum value is 672"
  }else{input1.placeholder = "اقل كمية المحصول الواجب فيها الزكاة 5 أوسق (حوالي 653 كجم)";}
  }
});

// ✅ Calculation handler
btn.addEventListener('click', () => {
  let val1 = Number(input1.value);
  let val2 = Number(input2.value);

  // Gold & Silver
  if (
    (types.value === 'gold' && val1 >= 85) ||
    (types.value === 'silver' && val1 >= 595)
  ) {
    let total = val1 * val2;
    result.value = (total * 0.025).toFixed(2);
    return;
  }

  // Income / Money
  if (types.value === 'money') {
    let minVal = 552500;
    if (val1 >= minVal) {
      result.value = (val1 * 0.025).toFixed(2);
    } else {
      result.value = "didn't reach Nesaab";
    }
    return;
  }

  // Eftar
  if (types.value === 'eftar') {
    result.value = (val1 * val2).toFixed(2);

  }else{result.value = "didn't reach Nesaab";}


  // All others

    if (types.value === 'plaint') {


    let base = Number(input1.value) * Number(input2.value);

    if (Number(input1.value) > 672){

    if (rain.checked) {
      result.value = base * 0.1;
      console.log(true)
    } else if(hand.checked){
      console.log(false)
      result.value = base * 0.05;
    } 
}else{result.value = "didn't reach Nesaab";}

}
});

