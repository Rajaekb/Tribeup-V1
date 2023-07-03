
import { GraphQLClient } from 'graphql-request';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const getPost = async (params) => {

    const hygraph = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/clhucjq6704b601ta5kwh4jio/master'
    );
    const { tribeupblog } = await hygraph.request(
        `query MyQuery($id: ID!) {
        tribeupblog( where: { id: $id }) {
          id
          title
          slug
     
        }
      }`,

    );

    return tribeupblog;

};

export default async function Page({ params }) {

    const locale = useLocale();

    const post = await getPost(params.id);

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
}
