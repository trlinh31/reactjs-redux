import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/product";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/features/loading/loadingSlice";
import { addToCart } from "../redux/features/cart/cartSlice";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import StringUtils from "@/utils/string.util";
import { useToast } from "@/components/ui/use-toast";

export default function ProductDetail() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLoading(true));
    setTimeout(() => {
      setProduct(products.filter((item) => item.id == id)[0]);
      dispatch(setLoading(false));
    }, 500);
  }, [id]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast({ description: "Thêm vào giỏ hàng thành công!" });
  };

  return (
    <div className='grid gap-10 lg:grid-cols-12'>
      <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
        <img src={`/images/${product?.image}`} alt='Photo' className='h-[600px] w-full object-cover object-center' />
        <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Sale</span>
      </div>
      <div className='md:py-8 lg:col-span-8'>
        <div className='mb-2 md:mb-3 space-y-4'>
          <span className='inline-block text-gray-500'>{product?.brand}</span>
          <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{product?.name}</h2>
        </div>

        <div className='mb-6 flex items-center gap-3 md:mb-10'>
          <Button className='gap-x-2 rounded-full'>
            <span className='text-sm'>4.2</span>
            <Star className='h-5 w-5' />
          </Button>

          <span className='text-sm text-gray-500 transition duration-100'>56 Đánh giá</span>
        </div>

        <div className='mb-4'>
          <div className='flex items-end gap-2'>
            <span className='text-xl font-bold text-gray-800 md:text-2xl'>{StringUtils.formatPrice(product?.price)}</span>
          </div>
        </div>

        <div className='mb-6 flex items-center gap-2 text-gray-500'>
          <Truck className='h-6 w-6' />
          <span className='text-sm'>2-4 Vận chuyển</span>
        </div>

        <div className='mb-6 flex items-center gap-2 text-gray-500'>
          <span className='text-sm'>Còn {product?.stock} sản phẩm</span>
        </div>

        <div className='flex gap-2.5'>
          <Button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</Button>
          <Button variant='secondary'>Mua ngay</Button>
        </div>

        <p className='mt-12 text-base tracking-wide text-gray-500'>{product?.description}</p>
      </div>
    </div>
  );
}
