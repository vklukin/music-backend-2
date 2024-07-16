type StorageKeys = "audioFilesList" | "audioFilesDBList";

class GlobalStorage {
    private storage: { [P: string]: unknown };

    constructor() {
        this.storage = {};
    }

    set(key: StorageKeys, value: unknown) {
        Object.defineProperty(this.storage, key, {
            value,
            writable: true,
            enumerable: true
        });
    }

    get<T>(key: string) {
        return (this.storage[key] as T) ?? null;
    }
}

export const globalStorage = new GlobalStorage();
