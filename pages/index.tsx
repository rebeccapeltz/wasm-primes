// import type {AssemblyExports} from '../wasm'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { PrimesAreaChart } from '../components/PrimesAreaChart'
import { DiffsAreaChart} from '../components/DiffsAreaChart'

type Primes = {
  values: Number[],
  diffs: Number[]
};

interface Props {
  values: Number[],
  diffs: Number[]
}


export const getServerSideProps: GetServerSideProps<{ values: Number[], diffs: Number[] }> = async (context) => {
  const API_URL = 'https://wasm-primes.vercel.app/api/primes';
  // const API_URL = 'http:/localhost:3000/api/primes';

  const res = await fetch(API_URL)
  const data = await res.json()
  const values = data.values;
  const diffs = data.diffs;
  if (values == null || diffs == null) {
    return {
      notFound: true
    }
  } else {
    return {
      props: { values, diffs }
    }
  }
}


export default function Page({ values, diffs }: Props) {
  // console.log(primes)
  // console.log("100",primes[100])
  // debugger
  return (
    <div className="container">
    <div className="grid-container">
      <div><PrimesAreaChart primes={values} /></div>
      <div><DiffsAreaChart diffs={diffs} /></div>
    </div>
    </div>
  )
}


