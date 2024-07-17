"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function DetailsReview({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading view");
  }

  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}
