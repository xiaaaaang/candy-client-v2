import { client } from "../store";

export async function AxiosPostAsync(url, data) {
    let obj = {
        Timestamp: new Date().getTime(),
        Data: data
    }
    let result = await client.post(url, obj);
    return result.data;
}