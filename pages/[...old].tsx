import type {GetStaticProps, GetStaticPaths} from 'next';
const urlBase = 'https://sms-old.sup39.dev/';
const oldPaths = [
  'Research/Decompile/setup/',
  'SunScript/doc/',
  'SunScript/tutorial/ram/',
  'SunScript/tutorial/ram/bitwise.html',
  'SunScript/tutorial/',
  'SunScript/tutorial/00-setup.html',
  'SunScript/',
  'PracticeCode/GeckoLoader/',
].map(path => path.split('/'));
// ].map(path => path.split('/')).flatMap(segs =>
//   segs[segs.length-1]==='index.html' ? [segs, segs.slice(0, -1)] : [segs]);
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: oldPaths.map(old => ({params: {old}})),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = ({params: {old=[]}={}}) =>
  ({props: {path: typeof old === 'string' ? old : old.join('/')}});

export default function RedirectPage({path}: {path: string}) {
  const url = urlBase + path;
  return <meta httpEquiv='refresh' content={'0;URL='+encodeURI(url)} />;
}
