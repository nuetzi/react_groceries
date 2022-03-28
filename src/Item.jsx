export default function Item (props) {
    let { item, brand, units, quantity } = props;
    return (
        <div className="listItem">
            <p>
            Item: {item} <br/>
            Brand: {brand} <br/>
            Units: {units} <br/>
            Quantity: {quantity} <br/>
            </p>
        </div>
    );
};