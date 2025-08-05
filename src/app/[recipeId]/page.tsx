
interface pageProps{
  params:{
    recipeId: string
  }
}

const page =  async ({params}:pageProps) => {
  const recipe =  params.recipeId;
  
  return (
    <div>{recipe}</div>
  )
}

export default page