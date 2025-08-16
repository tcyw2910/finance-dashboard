// Save any type of data to localStorage
export function saveItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data from localStorage and return as type T
export function getItem<T>(key: string, defaultValue: T): T {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue
}

// Remove item
export function removeItem(key: string): void {
    localStorage.removeItem(key);
}