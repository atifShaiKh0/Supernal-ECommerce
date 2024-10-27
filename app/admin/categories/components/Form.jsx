"use client";

import { getCategory } from "@/lib/firestore/categories/read_server";
import {
  createNewCategory,
  updateCategory,
} from "@/lib/firestore/categories/write";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams(false);

  const router = useRouter();

  const id = searchParams.get("id");

  const fetchData = async () => {
    try {
      const res = await getCategory({ id: id });

      if (!res) {
        toast.error("Category Not Found");
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
    setData((preData) => {
      return {
        ...(preData ?? {}),
        [key]: value,
      };
    });
  };

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      await createNewCategory({ data: data, image: image });
      toast.success("Category Created Successfully");
      setData(null);
      setImage(null);
      router.push(`/admin/categories`);
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateCategory({ data: data, image: image });
      toast.success("Category Updated Successfully");
      setData(null);
      setImage(null);
      router.push(`/admin/categories`);
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-5">
      <h1 className="font-semibold">{id ? "Update" : "Create"} Categories</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (id) {
            handleUpdate();
          } else {
            handleCreate();
          }
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Iamge <span className="text-red-800">*</span>
          </label>
          {image && (
            <div className="flex justify-center items-center">
              <img
                className="h-32 p-3"
                src={URL.createObjectURL(image)}
                alt=""
              />
            </div>
          )}
          <input
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            id="category-image"
            name="category-image"
            type="file"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Name <span className="text-red-800">*</span>
          </label>
          <input
            id="category-name"
            name="category-name"
            type="text"
            placeholder="Enter name"
            value={data?.name ?? ""}
            onChange={(e) => {
              handleData("name", e.target.value);
            }}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Slug <span className="text-red-800">*</span>
          </label>
          <input
            id="category-slug"
            name="category-slug"
            type="text"
            placeholder="Enter Slug"
            value={data?.slug ?? ""}
            onChange={(e) => {
              handleData("slug", e.target.value);
            }}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <Button
          isLaoading={isLoading}
          isDisabled={isLoading}
          type="submit"
          color="primary"
        >
          {id ? "Update" : "Create"}
        </Button>
      </form>
    </div>
  );
}
