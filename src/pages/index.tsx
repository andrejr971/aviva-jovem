import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { IndexProps } from '../dtos/IBoardsDTO';
import { api } from '../services/api';
import { Home } from '../templates/Home';

export default function Index({ boards }: IndexProps) {
  return (
    <>
      <Head>
        <title>AvivaJovem</title>
      </Head>
      <Home boards={boards} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('board');

  const boards: IndexProps = data;

  return {
    props: {
      boards,
    },
  };
};
