export default function DetailsReview({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}
