import FormSubmitButton from "@/components/formSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - MOB",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required in the form");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProduct() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          type="text"
          required
          name="name"
          placeholder="Name"
          className="input-bordered mb-3 w-full input  "
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
          required
        />
        <input
          type="url"
          required
          name="imageUrl"
          placeholder="Image URL"
          className="input-bordered mb-3 w-full input  "
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Price"
          className="input-bordered mb-3 w-full input  "
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
