import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
import { ArrowRight } from "phosphor-react";
import { useTranslation } from "react-i18next";
export default function Collection() {
  const product = useContext(ShopContext);
  const [show, setShow] = useState(true);
  const [latest, setLatest] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sorttype, setSorttype] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const {t} = useTranslation()

  const toggle_category = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggle_type = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const apply_filter = () => {
    let productcopy = product.products.slice();
    if (category.length > 0) {
      productcopy = productcopy.filter((item) => category.includes(item.category));
    }
    if (subcategory.length > 0) {
      productcopy = productcopy.filter((item) => subcategory.includes(item.subCategory));
    }
    setLatest(productcopy);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const sort_price = () => {
    const price_latest = latest.slice();
    switch (sorttype) {
      case "low-high":
        setLatest(price_latest.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setLatest(price_latest.sort((a, b) => b.price - a.price));
        break;
      default:
        apply_filter();
        break;
    }
  };

  useEffect(() => {
    setLatest(product.products);
  }, [product.products]);

  useEffect(() => {
    sort_price();
  }, [sorttype]);

  useEffect(() => {
    apply_filter();
  }, [category, subcategory]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = latest.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(latest.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  };

  return (
    <div className="w-[90%] mx-auto mt-5 flex flex-col">
      <div className="flex justify-between flex-col lg:flex-row">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-4 w-fit" onClick={() => setShow(!show)}>
              <p className="font-bold text-2xl cursor-pointer">{t("FILTERS")}</p>
              <ArrowRight size={32} className={`${show ? "" : "rotate-90"} transition-all lg:hidden`} />
            </div>
            {show && (
              <div className="border w-fit py-4 pr-[200px] px-4">
               <p className="font-semibold mb-3 text-2xl">{t("categoryTitle")}</p>

              <p className="flex gap-2">
                <input type="checkbox" value="Men" className="w-3" onClick={toggle_category} /> 
                {t("categoryMen")}
              </p>

              <p className="flex gap-2">
                <input type="checkbox" value="Women" className="w-3" onClick={toggle_category} /> 
                {t("categoryWomen")}
              </p>

              <p className="flex gap-2">
                <input type="checkbox" value="Kids" className="w-3" onClick={toggle_category} /> 
                {t("categoryKids")}
              </p>
              </div>
            )}
            {show && (
              <div className="border w-fit py-4 pr-[200px] px-4">
                <p className="font-semibold mb-3 text-2xl">{t("typeTitle")}</p>

                <p className="flex gap-2">
                  <input type="checkbox" value="Topwear" className="w-3" onClick={toggle_type} />
                  {t("typeTopwear")}
                </p>

                <p className="flex gap-2">
                  <input type="checkbox" value="Bottomwear" className="w-3" onClick={toggle_type} />
                  {t("typeBottomwear")}
                </p>

                <p className="flex gap-2">
                  <input type="checkbox" value="Winterwear" className="w-3" onClick={toggle_type} />
                  {t("typeWinterwear")}
                </p>
              </div>
            )}
          </div>
          <div>
            <select
              name=""
              id=""
              className="border-2 text-black text-sm px-2 rounded lg:hidden"
              onChange={(e) => setSorttype(e.target.value)}
            >
            <option value="relevant">{t("sortRelevant")}</option>
            <option value="low-high">{t("sortLowHigh")}</option>
            <option value="high-low">{t("sortHighLow")}</option>
            </select>
          </div>
        </div>
        {/* Center */}
        <div className="flex-1 mx-2 my-4 lg:my-0">
          <Title text1={t("All")} text2={t("Collection")} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
            {currentProducts.map((item, index) => (
              <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center mt-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 border rounded ${
                  currentPage === index + 1 ? "bg-red-400 text-white" : "bg-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        {/* Right */}
        <div>
          <select
            name=""
            id=""
            className="border-2 text-black text-sm px-2 rounded hidden lg:block"
            onChange={(e) => setSorttype(e.target.value)}
          >
           <option value="relevant">{t("sortRelevant")}</option>
            <option value="low-high">{t("sortLowHigh")}</option>
            <option value="high-low">{t("sortHighLow")}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
