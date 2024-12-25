const RestaurentCard = (props)=>{
    const {resobj} = props;
    return (
      <div className="res-card">
        <img className="card-img" src= {resobj.image}/>
        <h3>{resobj.name}</h3>
        <h5>{resobj.rating}star</h5>
        <h4>{resobj.cuisine}</h4>
        {
          resobj.menu.map((item)=>(<h4>{item.itemName} ${item.price}</h4>))
        }
      </div>
    );
}

export default RestaurentCard;