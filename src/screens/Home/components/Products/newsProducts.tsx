import CardProducts from "@/src/components/CardProducts/cardProducts";

export default function NewProducts() {
    return (
        <>
            <div className="px-2 py-2">
                <div className="hero min-h-[350px] bg-base-200 rounded-2xl">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-extrabold">LEBRON XXI</h1>
                            <h1 className="text-5xl font-extrabold">JUST LANDED</h1>
                            <p className="py-6 font-semibold">Takeoff in the XXIs newest colorway 'Akoya, built with Zoom technology to raise your game to another level.</p>
                            <button className="btn btn-outline font-extrabold">Shop</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-[25px] font-bold px-2 py-2">New products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <CardProducts
                    title="Shoes"
                    status="New"
                    image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png"
                    description="If a dog chews shoes whose shoes does he choose?"
                />
                <CardProducts
                    title="Shoes"
                    status="New"
                    image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png"
                    description="If a dog chews shoes whose shoes does he choose?"
                />
                <CardProducts
                    title="Shoes"
                    status="New"
                    image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png"
                    description="If a dog chews shoes whose shoes does he choose?"
                />
                <CardProducts
                    title="Shoes"
                    status="New"
                    image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png"
                    description="If a dog chews shoes whose shoes does he choose?"
                />
            </div>
        </>
    );
}