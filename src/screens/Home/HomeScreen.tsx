import "./home_screen.scss"
import NewProducts from "./components/Products/newsProducts";
import Shoes from "./components/Products/shoes";
import PopularProducts from "./components/Products/popularProducts";
import Membership from "./components/Products/membership";
import Counter from "@/src/components/Counter";

const HomeScreen = () => {
    return <>
        <div className="container mx-auto">
            {/* <PopularProducts/> */}
            <NewProducts />
        </div>
    </>
}

export default HomeScreen;
