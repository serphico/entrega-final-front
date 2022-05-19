
export default function Item({idProduct, title, photo, price, description, category, quantity}){
    return(
        
        <div id={idProduct}>
            <h3>{title}</h3>
            <img src={`img-prod/`+category+'/'+photo} alt="imagen del producto" />
            <span>{price}</span>
            <p>{description}</p>
            <p>{quantity}</p>
        </div>
    )
}