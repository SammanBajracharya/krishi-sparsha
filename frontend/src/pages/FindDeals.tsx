import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { BusinessInfo } from "../components/BusinessInfo";
import { ProductCards } from "../components/ProductCards";
import { mockData } from "../mockData";

const FindDealsPage = () => {

    const handleBuyButtonClick = (productName: string) => {
        console.log(`Buying ${productName}`);
    };

    const handleAddToCartButtonClick = (productName: string) => {
        console.log(`Adding ${productName} to cart`);
    };

    return (
        <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
            <div>
                <h1>Find Deals</h1>
                <p className="mt-2 text-gray-500">Find the best deals from the best businesses</p>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <BusinessInfo
                        image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                        businessName="Sato"
                        info="sdfsdfSDfsd fdsfsd fsdf dsfdf"
                        mobile="+977 9343234343"
                        location="sdfdsf"
                        trustedPer={96}
                    />
                </CardHeader>
                <Separator />
                <CardContent className="py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                </CardContent>
            </Card>
        </section>
    );
}

export default FindDealsPage;
