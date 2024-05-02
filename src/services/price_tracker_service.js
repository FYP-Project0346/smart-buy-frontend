import axios from "axios";
import { 
    SUBSCRIBE_PRICE_TRACKER,
    UNSUBSCRIBE_PRICE_TRACKER,
    VERIFY_SUBSCRIPTION,
    TEST_PRICE_TRACKING,
 } from "./api";
export async function subscribe(customerId, productId){
    if (customerId !== ""){
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
    if (customerId !== ""){
        const response = await axios.get(VERIFY_SUBSCRIPTION, {
            params: {
                customer_id: customerId,
                product_id: productId,
            }
        });
        return response.data.subscribed === "subscribed"
    }else{
        return false
    }
}


export async function testPriceTracking(id, status){
    try {
        const response = await axios.post(TEST_PRICE_TRACKING, {
            id: id,
            dealStatus: status
        });
        return response.status === 200; // Return true if the status is 200
    } catch (error) {
        console.error("Error in testPriceTracking:", error); // Log the error for debugging
        return false; // Return false if an error occurs
    }
}






