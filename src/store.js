import { readable, writable } from "svelte/store";
import axios from "axios";

export let client = axios.create({
    baseURL: "http://localhost:5233",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export let storeAccount = writable({
    id: '',
    userId: 5789645950,
    accountId: '',
    firstName: '',
    lastName: '',
    username: '',
    photoUrl: 'https://i2.mjj.rip/2024/06/03/c0526f288d0120d250bed1816892d1d0.jpeg',
    languageCode: ''
});