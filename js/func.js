function getMultiplyNumber(p_numb) {
  const l_one_num = p_numb % 10;
  return p_numb == l_one_num ? p_numb : l_one_num * getMultiplyNumber(Math.trunc(p_numb / 10));
}

console.log(getMultiplyNumber(266219));