

const Greeter = (props) => {
  
   function clickHandler(){
    console.log("object")
   }
  // eslint-disable-next-line react/prop-types
  return <div><h1>Hello {props.name}! I love React {props.code}</h1>
   
   
   
   <button onClick={clickHandler}>click</button>
   </div>
};


export default Greeter