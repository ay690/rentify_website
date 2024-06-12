import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing }) => {
  return (
    <div className="w-full transition-shadow overflow-hidden bg-white rounded-lg shadow-md sm:w-[320px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://static.vecteezy.com/system/resources/previews/023/308/053/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg"
          }
          alt="listing-cover"
          className="w-full h-[320px] sm:h-[220px] object-cover hover:scale-110 transition-scale duration-300"
        />
        <div className="flex flex-col w-full p-3">
          <p className="font-semibold truncate text-md text-slate-800">
            {listing.name}
          </p>
          <div className="flex items-center gap-2">
            <MdLocationOn className="w-4 h-4 text-green-700" />
            <p className="w-full text-gray-600 text-md">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2">
            {listing.description}
          </p>
          <p className="mt-2 font-semibold text-slate-500 ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex gap-4 mt-2 text-slate-700">
            <div className="text-xs font-bold">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="text-xs font-bold">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
