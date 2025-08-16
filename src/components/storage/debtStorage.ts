import { getItem, saveItem } from "../../utils/localStorage";
import { type Debt } from "../types";

const STORAGE_KEY = "debts";

// Function to save debts data
export function saveDebts(debts: Debt[]) {
    saveItem(STORAGE_KEY, debts);
}

// Function to retrieve debts data
export function getDebts(): Debt[] {
    return getItem<Debt[]>(STORAGE_KEY, []); // always returns an array
}