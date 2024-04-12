function SelectPercentage({tip,act, children}) {
  return (
    <div>   
        <label>{children}</label>   
      <select onChange={(e) => act(Number(e.target.value))} value={tip}>
        <option value='0'>Dissatisfied0%</option>
        <option value='5'>meh 5%</option>
        <option value='10'>İts was ok 10%</option>
        <option value='15'>mhm good 15%</option>
        <option value='20'>taste is good 20%</option>
        <option value='25'>thanks for all 25%</option>
        <option value='30'>take my all wallet 30%</option>   
      </select>
    </div>
  );
}

export default SelectPercentage;