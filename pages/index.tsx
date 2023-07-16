// import type {AssemblyExports} from '../wasm'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { PrimesAreaChart } from '../components/PrimesAreaChart'
import { DiffsAreaChart } from '../components/DiffsAreaChart'
import { FactorsAreaChart } from '../components/FactorsAreaChart';

type Primes = {
  values: Number[],
  diffs: Number[],
  factors: Number[]
};

interface Props {
  values: Number[],
  diffs: Number[],
  factors: Number[]
}


export const getServerSideProps: GetServerSideProps<{ values: Number[], diffs: Number[], factors: Number[] }> = async (context) => {
  const API_URL = 'https://wasm-primes.vercel.app/api/primes';
  // const API_URL = 'http:/localhost:3000/api/primes';

  const res = await fetch(API_URL)
  const data = await res.json()
  const values = data.values;
  const diffs = data.diffs;

  // const FACTORS_API_URL = 'https://wasm-primes.vercel.app/api/factors';
  const FACTORS_API_URL = 'http:/localhost:3000/api/factors'
  const resFactors = await fetch(FACTORS_API_URL)
  const dataFactors = await resFactors.json()
  const factors = dataFactors.values;

  if (values == null || diffs == null || factors == null) {
    return {
      notFound: true
    }
  } else {
    return {
      props: { values, diffs, factors }
    }
  }
}


export default function Page({ values, diffs, factors }: Props) {
  return (
    <div className="container">
      <h1>Prime Number Analysis</h1>
      <a target="_blank" href="https://github.com/rebeccapeltz/wasm-primes">code</a>
      <div className="grid-container">
        <div><PrimesAreaChart primes={values} /></div>
        <div><DiffsAreaChart diffs={diffs} /></div>
        <div><FactorsAreaChart factors={factors} /></div>
      </div>
    </div>
  )
}


