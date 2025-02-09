import { Profile } from "@/components/Profile"
import { mockData } from "@/mockData";
import { ProductCards } from "@/components/ProductCards";

function Profile() {
    const handleBuyButtonClick = (productName: string) => {
        console.log(`Buying ${productName}`);
    };

    const handleAddToCartButtonClick = (productName: string) => {
        console.log(`Adding ${productName} to cart`);
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <h1>About us</h1>
                <p className="max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis pellentesque nibh, eu fermentum justo tempor ut. Vivamus nec luctus risus. Vivamus sit amet ante eget dui convallis feugiat ac eu nisl.<br/><br/>
                    Nulla mollis eget lacus vitae pellentesque. Phasellus sed lorem non nisi accumsan lacinia at et libero. Duis nec ligula luctus, pellentesque velit sed, congue lectus. Mauris fringilla lectus sed vestibulum ornare. Nam ac eleifend tortor. Nam finibus ante sit amet felis eleifend, et gravida turpis vulputate.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-3xl font-semibold">Trending Products</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mockData.map((data, index) => (
                        <ProductCards
                            key={index}
                            price={data.price}
                            productName={data.productName}
                            buyButtonOnClick={() => handleBuyButtonClick(data.productName)}
                            addToCardButtonOnClick={() => handleAddToCartButtonClick(data.productName)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Profile
