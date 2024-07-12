class GlobalStorage {
    private storage: { [P: string]: unknown };

    constructor() {
        this.storage = {};
    }

    set(key: string, value: unknown) {
        Object.defineProperty(this.storage, key, {
            value
        });
    }

    get(key: string) {
        return this.storage[key] ?? null;
    }
}

export const globalStorage = new GlobalStorage();
