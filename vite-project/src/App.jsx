fucntion App(){
  const fruits = ["Apple", "Banana", "Mango"];
  return(
    <di>
      <ul>
        {
          fruits.map((fruits,index)=>(
            <li key={index}>{fruits}</li>
          ))
        }
      </ul>
    </di>
  );
}