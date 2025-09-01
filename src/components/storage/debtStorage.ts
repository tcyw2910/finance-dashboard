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

export function deleteDebt(id: string) {
    const debts = getDebts();
    const updated = debts.filter((d) => d.id !== id);
    saveDebts(updated);
    return updated;
}

// Function to save creditors data
export function saveCreditors(creditors: Debt[]) {
    saveItem(CREDITORS_KEY, creditors);
}

// Function to retrieve creditors data
export function getCreditors(): Debt[] {
    return getItem<Debt[]>(CREDITORS_KEY, []);
}

export function deleteCreditor(id: string) {
    const creditors = getCreditors();
    const updated = creditors.filter((d) => d.id !== id);
    saveCreditors(updated)
    return updated;
}