import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { title } = await request.json();
  console.log(`Recipe Title: ${title}`);

  return NextResponse.json({
    message: " Recipe added Successfully!",
  });
};
