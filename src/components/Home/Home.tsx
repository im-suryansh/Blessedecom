import "./Home.css";
import Products from "../Products";
import Slider from "../Slider";

function Home() {
	return (
		<div className="Home">
			<div className="Home_container">
				
				<Slider />

				<h1>Latest Drops</h1>
				<div className="Home_row">
					<Products
						title="Goku (Oversize Drop-Shoulder)"
						price="999.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/dbz_goku_warrior_oversizetee_listing_hitanshi7_comicsense.jpg"
					/>
					<Products
						title="Ego (Oversize Drop-Shoulder)"
						price="829.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/03/blue-lock-tee5_comicsense.jpg"
					/>

					<Products
						title="Gohan evolution"
						price="999.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/gohan-oversize3_comicsense-1.jpg"
					/>
					<Products
						title="Thunder Breathing First Form"
						price="999.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2022/03/thunderbreathing_oversize4_comicsense.jpg"
					/>
					<Products
						title="Curse (Drop-Shoulder)"
						price="1099.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/03/berserk_teefront_comicsense-1.jpg"
					/>

					<Products
						title="im hokage hawaiian shirt"
						price="1249.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/03/naruto_hokage_hawaiianshirt_back_comicsense.jpg"
					/>
				</div>
				<h1>New Arrivals</h1>
				<div className="Home_row">
					<Products
						title="Majin Bucket Hat"
						price="599.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/dbz_badman_buckethat_listing6_hitanshi_comicsense.jpg"
					/>
					<Products
						title="Half Hot Half Cold Bucket Hat"
						price="599.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/mha_halfhothalfcold_buckethat_listing1_hitanshi_comicsense.jpg"
					/>
					<Products
						title="Mugiwara Bucket Hat"
						price="599.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/onepiece_strawhat_listing1_hitanshi_comicsense.jpg"
					/>
					<Products
						title="Jinchuriki Logo Woven Lanyard"
						price="599.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/naruto3_comicsense.jpg"
					/>
					<Products
						title="Thunder Woven Lanyard"
						price="599.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/zenitsu3_comicsense.jpg"
					/>
					<Products
						title="Six Eye Woven Lanyard"
						price="599.00"
						image="https://comicsense.b-cdn.net/wp-content/uploads/2023/04/gojo3_comicsense.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
