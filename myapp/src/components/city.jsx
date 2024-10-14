function city({ city }) {
  return (
    <>
      <div  style={cardStyle }> 
        <div style={{color:"ash",padding:"10px"}}>
          <h2 style={{color:"blue"}}>{city.name}</h2>
          <h4 style={{color:"white",backgroundColor:"blue"}}>{city.country}</h4>
          <h7>{city.about}</h7>
        </div>
        <div>
          <img 
            src={`/src/assets/${city.image}`}
            alt="wetin"
            style={{ width: "200px", height: "300px", objectFit: "cover",borderRadius:"40px" }}
          />
        </div>
      </div>
      
    </>
  );
}

const cardStyle = {
  display: "flex",
  backgroundColor:"skyblue",
  justifyContent: "space-between",
  border: "1px solid #ddd",
  borderRadius: "8px",
  width: "500px",
  margin: "20px",
  padding:"25px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};


export default city;
