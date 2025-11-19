import { getTeaList } from '../_libs/microcms';
import TeaListClient from './TeaListClient';

export const revalidate = 60;

export default async function TeaListPage() {
  const teas = await getTeaList();

  return <TeaListClient initialTeas={teas} />;
}