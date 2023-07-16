export const config = { runtime: "edge" };

import type { AssemblyExports } from "../../wasm";
import { NextRequest, NextResponse } from "next/server";

// @ts-ignore
// import addWasm from '../../add.wasm?module'
import releaseWasm from "../../release.wasm?module";

// const module$ = WebAssembly.instantiate(addWasm)
const module$ = WebAssembly.instantiate(releaseWasm);

export default async function handler() {
  const instance = (await module$) as any;
  const exports = instance.exports as AssemblyExports;
  const { primeFactors, memory } = exports;
  const start = Date.now();
  primeFactors();
  const wasmByteMemoryArray = new Uint32Array(memory.buffer);
  const end = Date.now();
  const executionTime = `${end - start} ms`
  console.log(`Factors Execution time: ${executionTime}`);
  // Get 1st 1000 Primes
  const primeFactor = wasmByteMemoryArray.slice(2000, 2030);

  const primeFactorCounts = [];

  for (let i = 0; i < primeFactor.length; i++) {
    primeFactorCounts.push(primeFactor[i]);
  }
  return NextResponse.json({
    values: primeFactorCounts,
    executiontime: executionTime
  });
}
