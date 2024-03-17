import { useEffect, useRef } from 'react';
import { createClient } from 'contentful';
import { colors, FONTFAMILY } from '../utils';
import { useAppDispatch } from '../state/hooks';
import { setWindowHeight, setWindowSize } from '../state/slices/screensize';
import DOMPurify from 'isomorphic-dompurify';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'policies',
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'policies',
    'fields.slug': params.slug,
  });

  return {
    props: { policy: items[0] },
  };
};

const PolicyDetails = ({ policy }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setWindowSize(window?.outerWidth));
    dispatch(setWindowHeight(window?.outerHeight));
  }, []);
  const { fields } = policy;
  const sanitizedBody = DOMPurify.sanitize(fields.body);

  return (
    <div
      className="px-[1.5rem] py-[8.25rem] sm:px-[7.5rem] sm:py-[10rem]"
      style={{ backgroundColor: colors.white }}
    >
      <section>
        <h1
          style={{ color: colors.green2, fontFamily: FONTFAMILY.bold }}
          className="sm:text-[40px] text-[2rem] sm:font-bold sm:leading-[3.25rem] "
        >
          {' '}
          {fields.title}
        </h1>{' '}
        <br />
        <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
      </section>
    </div>
  );
};
export default PolicyDetails;
