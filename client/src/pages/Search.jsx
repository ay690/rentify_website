const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* left side */}
      <div className="border-b-2 p-7 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <label className="whitespace-nowrap">Search Term: </label>
            <input
              type="text"
              placeholder="Search..."
              id="searchTerm"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          
        {/* *********Type  ******** */}
          
          <div className="flex flex-wrap items-center gap-2">
            <label>Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
             {/* ******** Amenities ******** */}
          <div className="flex flex-wrap items-center gap-2">
            <label>Amenities:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>

          {/* ******* Sorters ********* */}
          <div className="flex items-center gap-2">
            <label>Sort:</label>
            <select id="sort_order" className="p-3 border rounded-lg">
                <option>Price high to low</option>
                <option>Price low to high</option>
                <option>Latest</option>
                <option>Oldest</option>
            </select>
          </div>
          
          {/* **********Search button******** */}
          <button className="p-3 text-white uppercase rounded-md bg-slate-700 hover:opacity-90">Search</button>
        </form>
      </div>
      {/* right side */}
      <div>
        <h1 className="'text-3xl font-semibold border-b p-3 text-slate-700 mt-5">Listing results:</h1>
      </div>
    </div>
  );
};

export default Search;
