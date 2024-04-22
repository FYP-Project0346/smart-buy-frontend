import axios from "axios";
const SUBSCRIBE_PRICE_TRACKER = "http://localhost:5000/price-track/subscribe";
export async function subscribe(customerId, productId){
    if (customerId != ""){
        const response = await axios.post(SUBSCRIBE_PRICE_TRACKER, {
            "customer_id": customerId,
            "product_id": productId,
        });
        return response.code
    }else{
        return 0
    }
}


