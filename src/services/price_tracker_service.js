import axios from "axios";
const SUBSCRIBE_PRICE_TRACKER = "http://localhost:5000/price-track/subscribe";
const VERIFY_SUBSCRIPTION = "http://localhost:5000/price-track/is-subscribed";
const UNSUBSCRIBE_PRICE_TRACKER = "http://localhost:5000/price-track/unsubscribe";
export async function subscribe(customerId, productId){
    if (customerId != ""){
        const response = await axios.post(SUBSCRIBE_PRICE_TRACKER, {
            "customer_id": customerId,
            "product_id": productId,
        });
        return response.data.code
    }else{
        return 0
    }
}

export async function unsubscribe(customerId, productId){
    const response = await axios.delete(UNSUBSCRIBE_PRICE_TRACKER, {
        params:{
            "customer_id": customerId,
        "product_id": productId,
        }
    });
    return response.data.code
}

export async function verifySubscription(customerId, productId){
    if (customerId != ""){
        const response = await axios.get(VERIFY_SUBSCRIPTION, {
            params: {
                customer_id: customerId,
                product_id: productId,
            }
        });
        return response.data.subscribed == "subscribed"
    }else{
        return false
    }
}






