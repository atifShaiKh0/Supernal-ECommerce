"use client";

import { useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";

export default function Page() {
  const [data, setData] = useState(null);
  const handleData = (key, value) => {
    setData((prevData) => {
      return {
        ...(prevData ?? {}),
        [key]: value,
      };
    });
  };
  return (
    <main>
      <form className="flex flex-col gap-4 p-5">
        <h1 className="font-semibold">Create New Product</h1>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex">
            <BasicDetails data={data} handleData={handleData} />
          </div>
          <div className="flex-1 flex flex-col gap-5 h-full">
            <Images data={data} handleData={handleData} />
          </div>
        </div>
      </form>
    </main>
  );
}
