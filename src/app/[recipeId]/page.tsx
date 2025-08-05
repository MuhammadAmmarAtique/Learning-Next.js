interface pageProps {
  params: {
    recipeId: string;
  };
}

export const generateMetadata = async ({ params }: pageProps) => {
  const recipe = await params.recipeId;

  return {
    title: `${recipe} title`,
    description: `${recipe} description goes here bro`,
  };
};

const page = async ({ params }: pageProps) => {
  const recipe = params.recipeId;

  return <div>{recipe}</div>;
};

export default page;
