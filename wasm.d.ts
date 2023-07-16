export interface AssemblyExports {
  abort(
    message: string | null,
    fileName: string | null,
    lineNumber: u32,
    columnNumber: u32
  ): void;
  get1000Primes(): void;
  primeFactors(): void;
  isPrime(n: number): boolean;
  add(a: number, b: number): number;
  memory: Uint32Array;
}
