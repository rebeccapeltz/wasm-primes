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
  const { get1000Primes, memory } = exports;
  get1000Primes();
  const wasmByteMemoryArray = new Uint32Array(memory.buffer);

  // Get 1st 1000 Primes
  const prime1000 = wasmByteMemoryArray.slice(0, 1000);
  // Get 2nd 1000 Diffs
  const primeDiffs = wasmByteMemoryArray.slice(1000, 2000);
  const primes = [];
  const diffs = []
  for (let i = 0; i < prime1000.length; i++) {
    primes.push(prime1000[i]);
    diffs.push(primeDiffs[i])
  }
  return NextResponse.json({
    values: primes,
    diffs: diffs
  });
}
