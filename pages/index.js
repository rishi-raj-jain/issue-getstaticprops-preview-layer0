export async function getStaticProps(context) {
  console.log(context);
  const date = context.previewData
    ? context.previewData.date
    : context.preview
    ? "cached"
    : "not-a-preview";
  const responseDate = new Date().toString();
  return {
    props: {
      date,
      responseDate,
    },
  };
}

const Home = ({ date, responseDate }) => {
  return `${date}, ${responseDate}`;
};

export default Home;
