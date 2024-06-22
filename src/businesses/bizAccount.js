import { AxiosPostAsync } from "./bizBasic";

export async function QueryAccountByUserId(id) {
    return await AxiosPostAsync("/Account/QueryAccountByUserId", {
        userId: id
    });
}