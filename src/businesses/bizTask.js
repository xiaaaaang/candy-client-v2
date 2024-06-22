import { AxiosPostAsync } from "./bizBasic";

export async function CreateTaskByAccountId(obj) {
    return await AxiosPostAsync("/Task/CreateTaskByAccountId", obj);
}

export async function QueryTasksByAccountId(id) {
    return await AxiosPostAsync("/Task/QueryTasksByAccountId", {
        Id:id
    });
}

export async function CompletedTaskById(id) {
    return await AxiosPostAsync("/Task/CompletedTaskById", {
        Id:id
    });
}

export async function DeletedTaskById(id) {
    return await AxiosPostAsync("/Task/DeletedTaskById", {
        Id:id
    });
}