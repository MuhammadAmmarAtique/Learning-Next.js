interface PageProps {
  params: {
    recipeId: string;
  };
}

export const generateMetadata = async ({ params }: PageProps) => {
  const recipeId = params.recipeId;

  return {
    title: `${recipeId} title`,
    description: `${recipeId} description goes here bro`,
  };
};

// Main page component
const Page = async ({ params }: PageProps) => {
  const recipeId = params.recipeId;

  // Simulate loading delay for testing
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div className="text-center mt-10 text-2xl font-semibold">Recipe ID: {recipeId}</div>;
};

export default Page;
