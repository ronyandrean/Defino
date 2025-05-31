// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import * as echarts from "echarts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const colors = [
    { id: "emerald", label: "Emerald", value: "emerald" },
    { id: "khaki", label: "Khaki", value: "khaki" },
    { id: "black", label: "Black", value: "black" },
    { id: "burgundy", label: "Burgundy", value: "burgundy" },
  ];

  const materials = [
    { id: "crocodile", label: "Crocodile-Embossed", value: "crocodile" },
    { id: "leather", label: "Full-Grain Leather", value: "leather" },
    { id: "suede", label: "Suede", value: "suede" },
    { id: "canvas", label: "Premium Canvas", value: "canvas" },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleViewModeChange = (mode: string) => {
    setViewMode(mode);
  };

  const resetFilters = () => {
    setSelectedColors([]);
    setSelectedMaterials([]);
    setPriceRange([0, 5000]);
    setSortBy("featured");
  };
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Collection Header */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img
          src="https://readdy.ai/api/search-image?query=Luxury%20handbag%20boutique%20interior%20with%20elegant%20display%20shelves%2C%20soft%20lighting%2C%20marble%20floors%2C%20gold%20accents%2C%20premium%20retail%20environment%2C%20high-end%20fashion%20store%20atmosphere%20with%20sophisticated%20decor%20and%20minimalist%20design&width=1440&height=400&seq=21&orientation=landscape"
          alt="Collection Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            The Collection
          </h1>
          <p className="text-lg text-white/90 max-w-xl">
            Discover our curated selection of luxury handbags, where timeless
            elegance meets contemporary design.
          </p>
        </div>
      </section>

      {/* Collection Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters and Sorting */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-lg">Filters</h3>
                  <Button
                    variant="ghost"
                    onClick={resetFilters}
                    className="text-sm text-emerald-800 hover:text-emerald-900 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Reset All
                  </Button>
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
                    <AccordionTrigger className="text-base">
                      Color
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {colors.map((color) => (
                          <div
                            key={color.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={color.id}
                              checked={selectedColors.includes(color.value)}
                              onCheckedChange={() =>
                                handleColorChange(color.value)
                              }
                            />
                            <label
                              htmlFor={color.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {color.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="material">
                    <AccordionTrigger className="text-base">
                      Material
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {materials.map((material) => (
                          <div
                            key={material.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={material.id}
                              checked={selectedMaterials.includes(
                                material.value
                              )}
                              onCheckedChange={() =>
                                handleMaterialChange(material.value)
                              }
                            />
                            <label
                              htmlFor={material.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {material.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Right Content - Products */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-gray-600">Showing 24 of 60 products</p>
                  <div className="flex items-center gap-4">
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-asc">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-desc">
                          Price: High to Low
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2 border rounded-lg p-1">
                      <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="icon"
                        onClick={() => handleViewModeChange("grid")}
                        className="!rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-grid-2 text-sm"></i>
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="icon"
                        onClick={() => handleViewModeChange("list")}
                        className="!rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-list text-sm"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div
                className={`grid ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                } gap-6`}
              >
                {/* Product Cards */}
                {Array.from({ length: 9 }).map((_, index) => (
                  <Card
                    key={index}
                    className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div
                      className={`relative ${
                        viewMode === "grid" ? "h-80" : "h-96 sm:h-64"
                      } overflow-hidden`}
                    >
                      <img
                        src={`https://readdy.ai/api/search-image?query=Luxury ${colors[
                          index % colors.length
                        ].label.toLowerCase()} crocodile texture handbag with gold hardware on marble surface, professional studio lighting, elegant composition, premium leather, high-end fashion accessory, detailed texture visible, sophisticated design, clean background&width=500&height=${
                          viewMode === "grid" ? "600" : "400"
                        }&seq=${30 + index}&orientation=${
                          viewMode === "grid" ? "portrait" : "landscape"
                        }`}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                      <Badge className="absolute top-4 right-4 bg-emerald-700 hover:bg-emerald-800 text-white">
                        {index % 2 === 0 ? "New" : "Best Seller"}
                      </Badge>
                      <Button
                        variant="ghost"
                        className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="far fa-heart text-gray-700"></i>
                      </Button>
                    </div>
                    <CardContent
                      className={`p-6 ${viewMode === "list" ? "sm:ml-64" : ""}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-lg">
                            Defino{" "}
                            {["Melody", "Harmony", "Symphony"][index % 3]}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {colors[index % colors.length].label}
                          </p>
                        </div>
                        <p className="font-medium text-emerald-800">
                          ${1295 + index * 100}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {materials[index % materials.length].label} leather with
                        gold hardware
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
        </div>
      </section>
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <div className="flex items-center space-x-10">
            <a
              href="#"
              className="text-3xl font-serif tracking-wider text-emerald-800"
            >
              Defino
            </a>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-sm font-medium hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-emerald-700 transition-colors cursor-pointer"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-emerald-700 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search..."
                className="w-64 h-9 pl-10 pr-4 rounded-full border-gray-200 focus:border-emerald-500 text-sm"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="cursor-pointer">
                <i className="fas fa-user text-gray-700 hover:text-emerald-700 transition-colors"></i>
              </a>
              <a href="#" className="cursor-pointer">
                <i className="fas fa-heart text-gray-700 hover:text-emerald-700 transition-colors"></i>
              </a>
              <a href="#" className="relative cursor-pointer">
                <i className="fas fa-shopping-bag text-gray-700 hover:text-emerald-700 transition-colors"></i>
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20handbag%20store%20interior%20with%20elegant%20display%20of%20premium%20leather%20bags%2C%20soft%20ambient%20lighting%2C%20marble%20floors%2C%20gold%20accents%2C%20minimalist%20decor%2C%20high-end%20retail%20environment%2C%20sophisticated%20atmosphere%2C%20neutral%20color%20palette%20with%20green%20accents&width=1440&height=600&seq=1&orientation=landscape')`,
          }}
        ></div>
        <div className="container mx-auto relative z-20 py-20 md:py-32">
          <div className="max-w-2xl px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-gray-900 mb-6">
              Exquisite{" "}
              <span className="font-medium text-emerald-800">
                Craftsmanship
              </span>{" "}
              for the Discerning
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Discover our exclusive collection of handcrafted luxury handbags,
              where timeless elegance meets contemporary design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer">
                Shop Collection
              </Button>
              <Button
                variant="outline"
                className="border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer"
              >
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Signature Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most coveted designs, crafted with exceptional attention to
              detail and premium materials.
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border border-gray-200 p-1">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-800 px-6 cursor-pointer"
                  onClick={() => setActiveCategory("all")}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="handbags"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-800 px-6 cursor-pointer"
                  onClick={() => setActiveCategory("handbags")}
                >
                  Handbags
                </TabsTrigger>
                <TabsTrigger
                  value="crossbody"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-800 px-6 cursor-pointer"
                  onClick={() => setActiveCategory("crossbody")}
                >
                  Crossbody
                </TabsTrigger>
                <TabsTrigger
                  value="totes"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-800 px-6 cursor-pointer"
                  onClick={() => setActiveCategory("totes")}
                >
                  Totes
                </TabsTrigger>
                <TabsTrigger
                  value="clutches"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-800 px-6 cursor-pointer"
                  onClick={() => setActiveCategory("clutches")}
                >
                  Clutches
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Luxury%20green%20crocodile%20texture%20handbag%20with%20gold%20hardware%20on%20marble%20surface%2C%20professional%20studio%20lighting%2C%20elegant%20composition%2C%20premium%20leather%2C%20high-end%20fashion%20accessory%2C%20detailed%20texture%20visible%2C%20sophisticated%20design%2C%20clean%20background&width=500&height=600&seq=2&orientation=portrait"
                      alt="Defino Melody Green"
                      className="w-full h-full object-cover object-top"
                    />
                    <Badge className="absolute top-4 right-4 bg-emerald-700 hover:bg-emerald-800 text-white">
                      New
                    </Badge>
                    <Button
                      variant="ghost"
                      className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="far fa-heart text-gray-700"></i>
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">Defino Melody</h3>
                        <p className="text-sm text-gray-500">Emerald Green</p>
                      </div>
                      <p className="font-medium text-emerald-800">$1,295</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Crocodile-embossed leather with gold hardware
                    </p>
                    <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
                {/* Product 2 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Luxury%20khaki%20beige%20crocodile%20texture%20handbag%20with%20gold%20hardware%20on%20marble%20surface%2C%20professional%20studio%20lighting%2C%20elegant%20composition%2C%20premium%20leather%2C%20high-end%20fashion%20accessory%2C%20detailed%20texture%20visible%2C%20sophisticated%20design%2C%20clean%20background&width=500&height=600&seq=3&orientation=portrait"
                      alt="Defino Melody Khaki"
                      className="w-full h-full object-cover object-top"
                    />
                    <Button
                      variant="ghost"
                      className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="far fa-heart text-gray-700"></i>
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">Defino Melody</h3>
                        <p className="text-sm text-gray-500">Khaki</p>
                      </div>
                      <p className="font-medium text-emerald-800">$1,295</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Crocodile-embossed leather with gold hardware
                    </p>
                    <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
                {/* Product 3 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Luxury%20black%20crocodile%20texture%20handbag%20with%20gold%20hardware%20on%20marble%20surface%2C%20professional%20studio%20lighting%2C%20elegant%20composition%2C%20premium%20leather%2C%20high-end%20fashion%20accessory%2C%20detailed%20texture%20visible%2C%20sophisticated%20design%2C%20clean%20background&width=500&height=600&seq=4&orientation=portrait"
                      alt="Defino Harmony Black"
                      className="w-full h-full object-cover object-top"
                    />
                    <Badge className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-700 text-white">
                      Best Seller
                    </Badge>
                    <Button
                      variant="ghost"
                      className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="far fa-heart text-gray-700"></i>
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">Defino Harmony</h3>
                        <p className="text-sm text-gray-500">Classic Black</p>
                      </div>
                      <p className="font-medium text-emerald-800">$1,495</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Crocodile-embossed leather with gold hardware
                    </p>
                    <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
                {/* Product 4 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Luxury%20burgundy%20red%20crocodile%20texture%20handbag%20with%20gold%20hardware%20on%20marble%20surface%2C%20professional%20studio%20lighting%2C%20elegant%20composition%2C%20premium%20leather%2C%20high-end%20fashion%20accessory%2C%20detailed%20texture%20visible%2C%20sophisticated%20design%2C%20clean%20background&width=500&height=600&seq=5&orientation=portrait"
                      alt="Defino Elegance Burgundy"
                      className="w-full h-full object-cover object-top"
                    />
                    <Button
                      variant="ghost"
                      className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="far fa-heart text-gray-700"></i>
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">Defino Elegance</h3>
                        <p className="text-sm text-gray-500">Burgundy</p>
                      </div>
                      <p className="font-medium text-emerald-800">$1,395</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Crocodile-embossed leather with gold hardware
                    </p>
                    <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            {/* Other tabs content would be similar */}
            <TabsContent value="handbags" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Similar product cards for handbags category */}
              </div>
            </TabsContent>
          </Tabs>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer"
            >
              View All Products <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>
      {/* Featured Product Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20green%20crocodile%20texture%20handbag%20with%20gold%20hardware%20displayed%20elegantly%20on%20marble%20pedestal%2C%20professional%20studio%20lighting%20with%20soft%20shadows%2C%20premium%20leather%20texture%20visible%20in%20detail%2C%20sophisticated%20high-end%20product%20photography%2C%20minimalist%20luxury%20setting&width=700&height=800&seq=6&orientation=portrait"
                alt="Defino Melody Signature"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20gold%20hardware%20clasp%20on%20luxury%20handbag%2C%20showing%20fine%20craftsmanship%20and%20engraved%20logo%2C%20premium%20metal%20finish%2C%20elegant%20design%20element%2C%20professional%20product%20photography%20on%20neutral%20background&width=200&height=200&seq=7&orientation=squarish"
                  alt="Hardware Detail"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-6">
                The Melody Collection
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Introducing our signature Melody handbag, a testament to
                exquisite craftsmanship and timeless design. Each piece is
                meticulously handcrafted by our master artisans using the finest
                crocodile-embossed leather.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 mr-3"></i>
                  <p className="text-gray-700">
                    Premium crocodile-embossed leather exterior
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 mr-3"></i>
                  <p className="text-gray-700">
                    Luxurious suede interior lining
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 mr-3"></i>
                  <p className="text-gray-700">
                    24K gold-plated hardware with signature clasp
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 mr-3"></i>
                  <p className="text-gray-700">
                    Adjustable and detachable shoulder strap
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 mr-3"></i>
                  <p className="text-gray-700">Dimensions: 28 × 12 × 19 cm</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-700 border-2 border-white shadow cursor-pointer"></div>
                  <span className="text-sm text-gray-700">Emerald</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white shadow cursor-pointer"></div>
                  <span className="text-sm text-gray-700">Khaki</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-black border-2 border-white shadow cursor-pointer"></div>
                  <span className="text-sm text-gray-700">Black</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-red-900 border-2 border-white shadow cursor-pointer"></div>
                  <span className="text-sm text-gray-700">Burgundy</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-shopping-bag mr-2"></i> Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-heart mr-2"></i> Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Craftsmanship Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              The Art of Craftsmanship
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each Defino handbag is a masterpiece of artisanal excellence,
              crafted through a meticulous process that honors traditional
              techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Artisan%20selecting%20premium%20leather%20materials%20for%20luxury%20handbag%20production%2C%20close-up%20of%20hands%20examining%20leather%20quality%2C%20workshop%20environment%2C%20natural%20lighting%2C%20focus%20on%20material%20texture%20and%20craftsmanship%20process&width=500&height=400&seq=8&orientation=landscape"
                  alt="Material Selection"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-xl mb-2">Material Selection</h3>
                <p className="text-gray-600">
                  We source only the finest leathers and materials from ethical
                  suppliers, ensuring exceptional quality in every piece.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Master%20craftsman%20hand-stitching%20luxury%20leather%20handbag%2C%20detailed%20close-up%20of%20precision%20needlework%2C%20traditional%20craftsmanship%20techniques%2C%20workshop%20setting%20with%20tools%20visible%2C%20focus%20on%20the%20artisan%20hands%20and%20leather%20material&width=500&height=400&seq=9&orientation=landscape"
                  alt="Handcrafted Creation"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-xl mb-2">
                  Handcrafted Creation
                </h3>
                <p className="text-gray-600">
                  Our master artisans employ time-honored techniques, with each
                  bag requiring over 20 hours of meticulous handwork.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Quality%20control%20inspection%20of%20finished%20luxury%20handbag%2C%20detailed%20examination%20of%20stitching%20and%20hardware%2C%20bright%20studio%20environment%2C%20professional%20assessment%20process%2C%20focus%20on%20precision%20and%20attention%20to%20detail%20in%20final%20product%20verification&width=500&height=400&seq=10&orientation=landscape"
                  alt="Quality Assurance"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-xl mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Each handbag undergoes rigorous inspection to ensure it meets
                  our exacting standards before receiving the Defino seal.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer"
            >
              Discover Our Process <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what our discerning clients have to say about their
              Defino experience.
            </p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonial-swiper"
          >
            <SwiperSlide>
              <Card className="bg-white border border-gray-100 shadow-sm h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex text-amber-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="italic text-gray-700 mb-6">
                        "My Defino Melody handbag is a true work of art. The
                        craftsmanship is impeccable, and the attention to detail
                        is evident in every stitch. It's not just a bag; it's an
                        investment piece that elevates any outfit."
                      </p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elegant%20woman%20with%20sophisticated%20style%2C%20neutral%20background%2C%20warm%20lighting%2C%20business%20attire%2C%20confident%20expression%2C%20high-quality%20portrait%20photography&width=100&height=100&seq=11&orientation=squarish" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Elizabeth Chen</h4>
                        <p className="text-sm text-gray-500">New York, USA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-white border border-gray-100 shadow-sm h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex text-amber-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="italic text-gray-700 mb-6">
                        "The quality of my Defino handbag exceeds all
                        expectations. The leather is sumptuous, and the design
                        is timeless yet distinctly modern. I've received
                        countless compliments since purchasing it."
                      </p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20sophisticated%20woman%20with%20elegant%20style%2C%20neutral%20background%2C%20warm%20lighting%2C%20business%20casual%20attire%2C%20confident%20smile%2C%20high-quality%20portrait%20photography&width=100&height=100&seq=12&orientation=squarish" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Sophie Martin</h4>
                        <p className="text-sm text-gray-500">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-white border border-gray-100 shadow-sm h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex text-amber-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="italic text-gray-700 mb-6">
                        "After years of collecting luxury handbags, I can
                        confidently say that Defino stands apart. The
                        craftsmanship rivals heritage brands, but with a fresh,
                        contemporary aesthetic that feels both timeless and
                        of-the-moment."
                      </p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elegant%20man%20with%20sophisticated%20style%2C%20neutral%20background%2C%20warm%20lighting%2C%20business%20attire%2C%20confident%20expression%2C%20high-quality%20portrait%20photography&width=100&height=100&seq=13&orientation=squarish" />
                        <AvatarFallback>JK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">James Kim</h4>
                        <p className="text-sm text-gray-500">Singapore</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-white border border-gray-100 shadow-sm h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex text-amber-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="italic text-gray-700 mb-6">
                        "The customer service at Defino is as exceptional as
                        their products. From personalized shopping assistance to
                        the beautiful packaging, every aspect of the experience
                        feels luxurious and thoughtful."
                      </p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elegant%20woman%20with%20sophisticated%20style%2C%20neutral%20background%2C%20warm%20lighting%2C%20business%20casual%20attire%2C%20confident%20expression%2C%20high-quality%20portrait%20photography&width=100&height=100&seq=14&orientation=squarish" />
                        <AvatarFallback>AR</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Alessandra Rossi</h4>
                        <p className="text-sm text-gray-500">Milan, Italy</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Instagram Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community and discover how Defino handbags complement the
              lifestyles of our discerning clientele.
            </p>
            <p className="text-emerald-800 font-medium mt-4">
              <i className="fab fa-instagram mr-2"></i> @definoluxury
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="relative overflow-hidden group aspect-square">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20green%20crocodile%20handbag%20in%20elegant%20cafe%20setting%2C%20lifestyle%20photography%2C%20soft%20natural%20lighting%2C%20high-end%20fashion%20accessory%20styled%20with%20coffee%20cup%2C%20sophisticated%20environment%2C%20premium%20product%20placement&width=300&height=300&seq=15&orientation=squarish"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group aspect-square">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20handbag%20with%20fashion%20accessories%20on%20marble%20surface%2C%20flat%20lay%20styling%2C%20professional%20product%20photography%2C%20high-end%20fashion%20composition%2C%20elegant%20arrangement%20with%20jewelry%2C%20sophisticated%20styling&width=300&height=300&seq=16&orientation=squarish"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group aspect-square">
              <img
                src="https://readdy.ai/api/search-image?query=Elegant%20woman%20holding%20luxury%20handbag%20in%20upscale%20urban%20setting%2C%20lifestyle%20fashion%20photography%2C%20soft%20natural%20lighting%2C%20sophisticated%20street%20style%2C%20premium%20fashion%20accessory%20in%20real-world%20context&width=300&height=300&seq=17&orientation=squarish"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group aspect-square">
              <img
                src="https://readdy.ai/api/search-image?query=Behind%20the%20scenes%20of%20luxury%20handbag%20craftsmanship%2C%20artisan%20workshop%20environment%2C%20detailed%20view%20of%20leatherwork%20process%2C%20traditional%20techniques%20in%20modern%20setting%2C%20focus%20on%20hands%20and%20tools&width=300&height=300&seq=18&orientation=squarish"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group aspect-square">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20handbag%20collection%20display%20in%20elegant%20boutique%20setting%2C%20retail%20environment%20with%20premium%20presentation%2C%20sophisticated%20store%20interior%2C%20high-end%20shopping%20experience%2C%20fashion%20merchandising%20excellence&width=300&height=300&seq=19&orientation=squarish"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group aspect-square">
              <img
                src="https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20luxury%20handbag%20hardware%20and%20stitching%2C%20macro%20photography%20showing%20craftsmanship%20quality%2C%20extreme%20detail%20of%20leather%20texture%20and%20metal%20components%2C%20artisanal%20excellence%20visible%20in%20fine%20details&width=300&height=300&seq=20&orientation=squarish"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer"
            >
              View All Posts <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-light mb-4">
              Join the Defino Community
            </h2>
            <p className="text-emerald-100 mb-8">
              Subscribe to our newsletter for exclusive previews of new
              collections, styling inspiration, and invitations to private
              events.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white h-12 text-base border-none"
              />
              <Button
                type="submit"
                className="bg-white text-emerald-800 hover:bg-emerald-100 h-12 px-8 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-emerald-200 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from Defino.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Defino</h3>
              <p className="text-gray-400 mb-6">
                Crafting timeless luxury handbags that blend traditional
                artisanship with contemporary design.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    All Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Handbags
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Craftsmanship
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Product Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Defino. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-cc-visa text-gray-500 text-2xl"></i>
              <i className="fab fa-cc-mastercard text-gray-500 text-2xl"></i>
              <i className="fab fa-cc-amex text-gray-500 text-2xl"></i>
              <i className="fab fa-cc-paypal text-gray-500 text-2xl"></i>
              <i className="fab fa-cc-apple-pay text-gray-500 text-2xl"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
