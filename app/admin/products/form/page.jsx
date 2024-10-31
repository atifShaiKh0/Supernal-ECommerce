"use client";

import { useEffect, useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";
import Description from "./components/Description";
import { Button, image } from "@nextui-org/react";
import toast from "react-hot-toast";
import {
  createNewProduct,
  updateProduct,
} from "@/lib/firestore/products/write";
import { useRouter, useSearchParams } from "next/navigation";
import { getProduct } from "@/lib/firestore/products/read_server";

export default function Page() {
  const [data, setData] = useState(null);
  const [featureImage, setFeatureImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const searchParam = useSearchParams();

  const id = searchParam.get("id");

  const fetchData = async () => {
    try {
      const res = await getProduct({ id: id });
      if (!res) {
        throw new Error("Product Not Found");
      } else {
        setData(res);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleData = (key, value) => {
    setData((prevData) => {
      return {
        ...(prevData ?? {}),
        [key]: value,
      };
    });
  };

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      await createNewProduct({
        data: data,
        featureImage: featureImage,
        imageList: imageList,
      });
      setData(null);
      setFeatureImage(null);
      setImageList([]);

      toast.success("Product Created Successfully");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
    setIsLoading(false);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateProduct({
        data: data,
        featureImage: featureImage,
        imageList: imageList,
      });
      setData(null);
      setFeatureImage(null);
      setImageList([]);
      toast.success("Product is Updated Successfully!");
      router.push("/admin/products");
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (id) {
            handleUpdate();
          } else {
            handleCreate();
          }
        }}
        className="flex flex-col gap-4 p-5"
      >
        <div className="flex justify-between w-full items-center">
          <h1 className="font-semibold">
            {id ? "Update Product" : "Create New Product"}
          </h1>
          <Button
            type="submit"
            isLoading={isLoading}
            isDisable={isLoading}
            color="primary"
            variant="flat"
          >
            {id ? "Update" : "Create"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex">
            <BasicDetails data={data} handleData={handleData} />
          </div>
          <div className="flex-1 flex flex-col gap-5 ">
            <Images
              data={data}
              featureImage={featureImage}
              setFeatureImage={setFeatureImage}
              imageList={imageList}
              setImageList={setImageList}
            />
            <Description data={data} handleData={handleData} />
          </div>
        </div>
      </form>
    </main>
  );
}
