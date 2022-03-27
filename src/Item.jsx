export default function Item (props) {
    return (
        <div className="listItem">
            <p>
            Item: {props.item} <br/>
            Brand: {props.brand} <br/>
            Units: {props.units} <br/>
            Quantity: {props.quantity} <br/>
            </p>
        </div>
    );
};