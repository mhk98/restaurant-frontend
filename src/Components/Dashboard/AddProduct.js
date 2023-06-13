import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { private_api, public_api } from "../../Endpoints/http.service";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  // const { isLoading, postSuccess, error, isError } = useSelector((state) => state.products)
  // const dispatch = useDispatch();

  const [Img, setImg] = useState();

  console.log("Image", Img);
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  const submit = async (data) => {
    console.log("data", data);

    const formData = new FormData();
    formData.append("item_Image", Img);
    formData.append("item_Name", data.item_Name);
    formData.append("ingredients", data.ingredients);
    formData.append("item_Price", data.item_Price);

    const res = await public_api.post("item", formData);
    if (res.data.status === "Success") {
      toast.success("Successfully added product");
    }
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="model">
            Item Name
          </label>
          <input type="text" id="item_Name" {...register("item_Name")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="item_Price">
            Price
          </label>
          <input type="text" id="item_Price" {...register("item_Price")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <input type="text" id="ingredients" {...register("ingredients")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="item_Image">
            Image
          </label>

          <input accept="image/*" type="file" onChange={imageChange} />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-zinc-600 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
