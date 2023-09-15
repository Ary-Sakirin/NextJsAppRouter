import CardProducts from "@/src/components/CardProducts/cardProducts";

export default function NewProducts() {
    return (
        <>
            <h1 className="text-[25px] font-bold px-2 py-2">New products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <CardProducts
                    title="Shose"
                    status="New"
                    image="ss"
                    description="ss"
                />
            </div>
        </>
    );
}