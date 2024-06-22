export interface Storage {
    get<T>(id: number): Promise<T>
    getByCode<T>(id: string): Promise<T | null>
    getAll<T>(): Promise<T[]>
    save: (entity: unknown) => unknown
    update: (id: unknown, entity: unknown) => unknown
}
