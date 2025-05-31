import Navbar from "../Home/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Slider } from "@/components/ui/slider";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Product = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const style = [
    {
      id: "defino-1",
      label: "Defino 1",
      value: "defino-1",
    },
    {
      id: "defino-2",
      label: "Defino 2",
      value: "defino-2",
    },
    {
      id: "defino-3",
      label: "Defino 3",
      value: "defino-3",
    },
  ];

  const color = [
    {
      id: "black",
      label: "Black",
      value: "black",
    },
    {
      id: "white",
      label: "White",
      value: "white",
    },
    {
      id: "red",
      label: "Red",
      value: "red",
    },
    {
      id: "blue",
      label: "Blue",
      value: "blue",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Defino Talia",
      color: "Cream",
      price: 120000,
      image: "./img/cream.jpg",
      badge: "New",
      badgeColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      id: 2,
      name: "Defino Hania",
      color: "Biru",
      price: 150000,
      image: "./img/biru.jpg",
    },
    {
      id: 3,
      name: "Defino Amelia",
      color: "Classic Black",
      price: 300000,
      image: "./img/hitam.jpg",
      badge: "Best Seller",
      badgeColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: 4,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
    {
      id: 5,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
    {
      id: 6,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
    {
      id: 7,
      name: "Defino Talia",
      color: "Cream",
      price: 120000,
      image: "./img/cream.jpg",
      badge: "New",
      badgeColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      id: 8,
      name: "Defino Hania",
      color: "Biru",
      price: 150000,
      image: "./img/biru.jpg",
    },
    {
      id: 9,
      name: "Defino Amelia",
      color: "Classic Black",
      price: 300000,
      image: "./img/hitam.jpg",
      badge: "Best Seller",
      badgeColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: 10,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
    {
      id: 11,
      name: "Defino Talia",
      color: "Cream",
      price: 120000,
      image: "./img/cream.jpg",
      badge: "New",
      badgeColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      id: 12,
      name: "Defino Hania",
      color: "Biru",
      price: 150000,
      image: "./img/biru.jpg",
    },
    {
      id: 13,
      name: "Defino Amelia",
      color: "Classic Black",
      price: 300000,
      image: "./img/hitam.jpg",
      badge: "Best Seller",
      badgeColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: 14,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
    {
      id: 15,
      name: "Defino Talia",
      color: "Cream",
      price: 120000,
      image: "./img/cream.jpg",
      badge: "New",
      badgeColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      id: 16,
      name: "Defino Hania",
      color: "Biru",
      price: 150000,
      image: "./img/biru.jpg",
    },
    {
      id: 17,
      name: "Defino Amelia",
      color: "Classic Black",
      price: 300000,
      image: "./img/hitam.jpg",
      badge: "Best Seller",
      badgeColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: 18,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
    {
      id: 19,
      name: "Defino Talia",
      color: "Cream",
      price: 120000,
      image: "./img/cream.jpg",
      badge: "New",
      badgeColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      id: 20,
      name: "Defino Hania",
      color: "Biru",
      price: 150000,
      image: "./img/biru.jpg",
    },
    {
      id: 21,
      name: "Defino Amelia",
      color: "Classic Black",
      price: 300000,
      image: "./img/hitam.jpg",
      badge: "Best Seller",
      badgeColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: 22,
      name: "Defino Amelia",
      color: "Biru Tua",
      price: 200000,
      image: "./img/biruu.jpg",
    },
  ];

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between min-h-screen py-28">
        {/* Filter Section */}
        <div className="flex flex-col w-1/4 p-4 bg-gray rounded-lg shadow-md">
          <div className="flex flex-row items-end justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
            </div>
            <div>
              <Button className="mb-4 bg-gray text-green-light hover:bg-gray-200">
                Reset All
              </Button>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="price">
              <AccordionTrigger className="text-base">
                Price Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4">
                  <Slider
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    max={5000}
                    step={100}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="color">
              <AccordionTrigger className="text-base">Color</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                {color.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <Checkbox id={`filter-${item.id}`} />
                    <label htmlFor={`filter-${item.id}`} className="text-sm">
                      {item.label}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="style">
              <AccordionTrigger className="text-base">Style</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                {style.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <Checkbox id={`filter-${item.id}`} />
                    <label htmlFor={`filter-${item.id}`} className="text-sm">
                      {item.label}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="mt-4 bg-emerald-800 text-white hover:bg-emerald-700">
            Apply Filters
          </Button>
        </div>

        <div className="flex flex-col items-start justify-center w-3/4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-row justify-between w-full mb-4">
            <p className="text-lg text-gray-700">Showing 25 of 60 products</p>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 12).map((product) => (
              <Card
                key={product.id}
                className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {product.badge && (
                    <Badge
                      className={`absolute top-4 right-4 text-white ${product.badgeColor}`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="font-medium text-emerald-800">
                      Rp {product.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Crocodile-embossed leather with gold hardware
                  </p>
                  <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white !rounded-button whitespace-nowrap cursor-pointer">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-chevron-left mr-2"></i>
                Previous
              </Button>
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                disabled={currentPage === 3}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                Next
                <i className="fas fa-chevron-right ml-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
