'use-client';

import { HomeTemplate } from '@/templates';
import { GetServerSideProps } from 'next';
import { HomeProps } from '@/templates/home/types';
import { api } from '@/lib';

export default function Home({
  leaders,
  musicians,
  shepherds,
  volunteers,
}: HomeProps) {
  return (
    <HomeTemplate
      leaders={leaders}
      musicians={musicians}
      shepherds={shepherds}
      volunteers={volunteers}
    />
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data } = await api.get('/boards');

  return {
    props: {
      leaders: data.contributors.leaders,
      musicians: data.contributors.musicians,
      volunteers: data.contributors.outhers,
      shepherds: data.shepherds,
    },
  };
};
