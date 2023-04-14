import "./Products.css";

interface Props {
	title: string;
	image: string;
	price: string;
}

function Products({title,image,price}: Props) {
	return (
		<div className="Products">
			<div className="Product_info">
				<img
					src={image}
					alt=""
				/>
				<p>{title}</p>

				<p className="Product_price">
					<small></small>
					<strong>₹{price}</strong>
				</p>
				
				<button type="button" className="btn btn-outline-dark">
				Add to Cart
				</button>
				
			</div>

			
		</div>
	);
}

export default Products;
