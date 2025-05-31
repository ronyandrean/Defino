import SlideUp from "../../animated/SlideUp";
import Fade from "../../animated/Fade";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-luxury text-gray-900 mb-4">
                Signature Collection
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most coveted designs, crafted with exceptional attention to
                detail and premium materials.
              </p>
            </div>
          </Fade>

          <SlideUp
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >

          <Tabs defaultValue="all" className="w-full">
            <Fade>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white border border-gray-200 p-1">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-800 px-6 cursor-pointert"
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
            </Fade>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="./img/cream.jpg"
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
                        <h3 className="font-medium text-lg">Defino Talia</h3>
                        <p className="text-sm text-gray-500">Cream</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 120.000</p>
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
                      src="./img/biru.jpg"
                      alt="Defino Melody Khaki"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Hania</h3>
                        <p className="text-sm text-gray-500">Biru</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 150.000</p>
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
                      src="./img/hitam.jpg"
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Classic Black</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 300.000</p>
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
                      src="./img/biruu.jpg"
                      alt="Defino Elegance Burgundy"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Biru Tua</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 200.000</p>
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
                {/* Product 1 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="./img/cream.jpg"
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
                        <h3 className="font-medium text-lg">Defino Talia</h3>
                        <p className="text-sm text-gray-500">Cream</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 120.000</p>
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
                      src="./img/biru.jpg"
                      alt="Defino Melody Khaki"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Hania</h3>
                        <p className="text-sm text-gray-500">Biru</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 150.000</p>
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
                      src="./img/hitam.jpg"
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Classic Black</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 300.000</p>
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
                      src="./img/biruu.jpg"
                      alt="Defino Elegance Burgundy"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Biru Tua</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 200.000</p>
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

            <TabsContent value="totes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="./img/cream.jpg"
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
                        <h3 className="font-medium text-lg">Defino Talia</h3>
                        <p className="text-sm text-gray-500">Cream</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 120.000</p>
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
                      src="./img/biru.jpg"
                      alt="Defino Melody Khaki"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Hania</h3>
                        <p className="text-sm text-gray-500">Biru</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 150.000</p>
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
                      src="./img/hitam.jpg"
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Classic Black</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 300.000</p>
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
                      src="./img/biruu.jpg"
                      alt="Defino Elegance Burgundy"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Biru Tua</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 200.000</p>
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

            <TabsContent value="crossbody" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="./img/cream.jpg"
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
                        <h3 className="font-medium text-lg">Defino Talia</h3>
                        <p className="text-sm text-gray-500">Cream</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 120.000</p>
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
                      src="./img/biru.jpg"
                      alt="Defino Melody Khaki"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Hania</h3>
                        <p className="text-sm text-gray-500">Biru</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 150.000</p>
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
                      src="./img/hitam.jpg"
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Classic Black</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 300.000</p>
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
                      src="./img/biruu.jpg"
                      alt="Defino Elegance Burgundy"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Biru Tua</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 200.000</p>
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

            <TabsContent value="clutches" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="./img/cream.jpg"
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
                        <h3 className="font-medium text-lg">Defino Talia</h3>
                        <p className="text-sm text-gray-500">Cream</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 120.000</p>
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
                      src="./img/biru.jpg"
                      alt="Defino Melody Khaki"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Hania</h3>
                        <p className="text-sm text-gray-500">Biru</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 150.000</p>
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
                      src="./img/hitam.jpg"
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Classic Black</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 300.000</p>
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
                      src="./img/biruu.jpg"
                      alt="Defino Elegance Burgundy"
                      className="w-full h-full object-cover object-top"
                    />
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
                        <h3 className="font-medium text-lg">Defino Amelia</h3>
                        <p className="text-sm text-gray-500">Biru Tua</p>
                      </div>
                      <p className="font-medium text-emerald-800">Rp 200.000</p>
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
          </Tabs>
          </SlideUp>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-base !rounded-button whitespace-nowrap cursor-pointer"
            >
              View All Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
