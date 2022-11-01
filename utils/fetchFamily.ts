import { Family } from "../typings";

export const fetchFamily = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFamily`);

    const data = await res.json()
    const family: Family[] = data.family;

    console.log("fetching: " ,family);

    return family;
}