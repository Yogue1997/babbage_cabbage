


function Item (props) {
    
    return (
        <div id="item">
            <p><img src={props.charcoalImage}/> Charcoal Grill :  Discounted Price $197.00 </p>
            <p><img src={props.fruitPlatterImage}/> Fruit Platter : Discounted Price $12.88 </p>
            <p><img src={props.gourmetCupCakeImage}/> Gourmet Cupcakes 6 Count : Discounted Price $19.99 </p>
            <p> <img src={props.charcuterieBoardImage}/> Charcuterie Board :  Discounted Price $29.87</p>
            <p><img src={props.avocadosImage} /> Organic Avocados : Discounted Price $4.24 </p>
            <p><img src={props.knifeSetImage}/> Kitchen Knife Set : Discounted Price $63.59 </p>
            <p><img src={props.cabbageImage}/> Cabbage : Discounted Price $3.75 </p>
        </div>
    )
}



export default Item;