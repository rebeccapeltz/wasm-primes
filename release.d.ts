/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/abort
 * @param message `~lib/string/String | null`
 * @param fileName `~lib/string/String | null`
 * @param lineNumber `u32`
 * @param columnNumber `u32`
 */
export declare function abort(message: string | null, fileName: string | null, lineNumber: number, columnNumber: number): void;
/**
 * assembly/index/isPrime
 * @param n `i32`
 * @returns `bool`
 */
export declare function isPrime(n: number): boolean;
/**
 * assembly/index/primeFactors
 */
export declare function primeFactors(): void;
/**
 * assembly/index/get1000Primes
 */
export declare function get1000Primes(): void;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
