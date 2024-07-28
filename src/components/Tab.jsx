import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/data/tab";
import { products } from "@/data/product";
import ListProduct from "./ListProduct";
import { Button } from "@/components/ui/button";
import ButtonLoading from "./ButtonLoading";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/features/loading/loadingSlice";

let PRODUCT_SIZE = 8;
export default function Tab() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("all");
  const [visibleProduct, setVisibleProduct] = useState(products.slice(0, PRODUCT_SIZE));
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setIsEnd(false);
    dispatch(setLoading(true));

    let filteredProducts;
    setTimeout(() => {
      if (tab === "all") {
        filteredProducts = products.slice(0, PRODUCT_SIZE);
        setVisibleProduct(filteredProducts);
      } else {
        filteredProducts = products.filter((product) => product.brand === tab).slice(0, PRODUCT_SIZE);
        setVisibleProduct(filteredProducts);
      }
      dispatch(setLoading(false));
    }, 500);
  };

  const handleLoadMore = () => {
    let filteredProducts;
    setIsLoading(true);
    dispatch(setLoading(true));
    setTimeout(() => {
      if (selectedTab === "all") {
        filteredProducts = products.slice(visibleProduct.length, PRODUCT_SIZE + visibleProduct.length);
        filteredProducts.length === 0 ? setIsEnd(true) : setVisibleProduct([...visibleProduct, ...filteredProducts]);
      } else {
        filteredProducts = products
          .filter((product) => product.brand === selectedTab)
          .slice(visibleProduct.length, PRODUCT_SIZE + visibleProduct.length);
        filteredProducts.length === 0 ? setIsEnd(true) : setVisibleProduct([...visibleProduct, ...filteredProducts]);
      }
      setIsLoading(false);
      dispatch(setLoading(false));
    }, 1000);
  };

  return (
    <>
      <Tabs defaultValue='all' className='w-full' onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value='all'>Tất cả</TabsTrigger>
          {tabs.map((tab) => (
            <TabsTrigger value={tab.key} key={tab.key}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='all'>
          <ListProduct data={visibleProduct} />
          <div className='flex justify-center mt-10'>
            {visibleProduct.length >= PRODUCT_SIZE && !isEnd ? (
              isLoading ? (
                <ButtonLoading />
              ) : (
                <Button onClick={handleLoadMore}>Xem thêm</Button>
              )
            ) : null}
          </div>
        </TabsContent>
        {tabs.map((tab) => (
          <TabsContent value={tab.key} key={tab.key}>
            <ListProduct data={visibleProduct} />
            <div className='flex justify-center mt-10'>
              {visibleProduct.length >= PRODUCT_SIZE && !isEnd ? (
                isLoading ? (
                  <ButtonLoading />
                ) : (
                  <Button onClick={handleLoadMore}>Xem thêm</Button>
                )
              ) : null}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
