const CreateListing = () => {
  return (
    <main className="max-w-4xl p-3 mx-auto">
      <h1 className="my-5 text-3xl font-semibold text-center">
        Create Listing
      </h1>
      <form className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-col flex-1 gap-4">
          <input
            className="p-3 border rounded-lg"
            type="text"
            id="name"
            placeholder="Name"
            maxLength="60"
            minLength={"10"}
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="p-3 border rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="p-3 border rounded-lg"
            id="address"
            required
          />
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                required
                min={"1"}
                max={"10"}
                type="number"
                id="bedrooms"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                required
                min={"1"}
                max={"10"}
                type="number"
                id="bathrooms"
              />
              <p>Bathrooms</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-lg"
                min={"1"}
                max={"10"}
                required
                type="number"
                name="discountPrice"
              />
              <div className="gap-4 flex-flex-col">
                <p>Discounted Price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="ml-2 font-normal text-gray-600">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-700 uppercase border border-green-700 rounded hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
