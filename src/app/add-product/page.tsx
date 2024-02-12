export default function AddProduct() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action="">
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
        <button type="submit" className="btn btn-primary btn-block">
          Add Product
        </button>
      </form>
    </div>
  );
}
