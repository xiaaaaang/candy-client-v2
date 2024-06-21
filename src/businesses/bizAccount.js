import { AxiosPostAsync } from "./bizBasic";

export async function QueryAccountByUserId(id) {
    return await AxiosPostAsync("/AccountOperation/QueryAccountByUserId", {
        userId: id
    });
}