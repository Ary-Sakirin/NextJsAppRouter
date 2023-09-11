export default function CardProducts(props: any) {
    return (
        <div className="py-2 px-2">
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={props.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.title}
                        <div className="badge badge-secondary">{props.status}</div>
                    </h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}