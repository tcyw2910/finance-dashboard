import { getItem, saveItem } from "../../utils/localStorage";
import { type Debt } from "../types";

const DEBTS_KEY = "debts";
const CREDITORS_KEY = "creditors";

// Function to save debts data
export function saveDebts(debts: Debt[]) {
    saveItem(DEBTS_KEY, debts);
}

// Function to retrieve debts data
export function getDebts(): Debt[] {
    return getItem<Debt[]>(DEBTS_KEY, []); // always returns an array
}

export function saveCreditors(creditors: Debt[]) {
    saveItem(CREDITORS_KEY, creditors);
}

export function getCreditors(): Debt[] {
    return getItem<Debt[]>(CREDITORS_KEY, []);
}