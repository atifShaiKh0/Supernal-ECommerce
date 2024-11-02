import { Rating } from "@mui/material";
import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";
import Link from "next/link";
// import FavoriteButton from "./FavoriteButton";
// import AuthContextProvider from "@/contexts/AuthContext";
// import AddToCartButton from "./AddToCartButton";
// import { getProductReviewCounts } from "@/lib/firestore/products/count/read";
// import { Suspense } from "react";
// import MyRating from "./MyRating";

export default function ProductsGridView({ products }) {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col gap-5 max-w-[900px] p-5">
        <h1 className="text-center font-semibold text-lg">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {products?.map((item) => {
            return <ProductCard product={item} key={item?.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-3 shadow-lg transition-all duration-700 hover:scale-105 border p-4 rounded-lg">
      <div className="relative w-full">
        <img
          src={product?.featureImageURL}
          className="rounded-lg h-48 w-full object-cover"
          alt={product?.title}
        />
        <div className="absolute top-1 right-1">
          {/* <AuthContextProvider> */}
          {/* <FavoriteButton productId={product?.id} /> */}
          {/* </AuthContextProvider> */}
          <Button
            variant="light"
            color="danger"
            className="rounded-full"
            isIconOnly
            size="sm"
          >
            <Heart size={13} />
          </Button>
        </div>
      </div>
      <Link href={`/products/${product?.id}`}>
        <h1 className="font-semibold line-clamp-2 text-sm">{product?.title}</h1>
      </Link>
      <div className="">
        <h2 className="text-green-500 text-sm font-semibold">
          ₹ {product?.salePrice}{" "}
          <span className="line-through text-xs text-gray-600">
            ₹ {product?.price}
          </span>
        </h2>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2">
        {product?.shortDescription}
      </p>
      <div>
        <Rating
          size="sm"
          name="product-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <h1 className="text-sm text-gray-400">(0)</h1>
      </div>
      {/* <Suspense> */}
      {/* <RatingReview product={product} /> */}
      {/* </Suspense> */}
      {product?.stock <= (product?.orders ?? 0) && (
        <div className="flex">
          <h3 className="text-red-500 rounded-lg text-xs font-semibold">
            Out Of Stock
          </h3>
        </div>
      )}
      <div className="flex items-center gap-4 w-full">
        <div className="w-full">
          <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
            <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs w-full">
              Buy Now
            </button>
          </Link>
        </div>
        {/* <AuthContextProvider>
          <AddToCartButton productId={product?.id} />
        </AuthContextProvider> */}
      </div>
    </div>
  );
}
