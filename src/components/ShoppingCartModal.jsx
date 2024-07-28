import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { openModal, removeFromCart } from "../redux/features/cart/cartSlice";
import { selectOpenCart, selectCartItems, selectCartTotal } from "../redux/features/cart/cartSelectors";
import StringUtils from "../utils/string.util";
import createPayOSPayment from "../utils/payment.util";

export default function ShoppingCartModal() {
  const isOpenModal = useSelector(selectOpenCart);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePayment = () => {
    const amount = 100000; // Số tiền thanh toán
    const orderId = new Date().getTime().toString(); // Tạo mã đơn hàng duy nhất
    createPayOSPayment(amount, orderId);
  };

  return (
    <>
      <Sheet open={isOpenModal} onOpenChange={(open) => dispatch(openModal(open))}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <p className='uppercase font-bold'>Giỏ hàng</p>
            </SheetTitle>
          </SheetHeader>
          <div className='flex h-full flex-col justify-between'>
            <div className='mt-8 flex-1 overflow-y-auto'>
              <ul className='-my-6 divide-y divide-gray-200'>
                {cartItems.length === 0 ? (
                  <h1 className='py-6 text-center'>Giỏ hàng trống!</h1>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <li key={item.id} className='flex py-6'>
                        <div className='h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200'>
                          <img src={`/images/${item.image}`} alt='Product image' width={100} height={100} />
                        </div>

                        <div className='ml-4 flex flex-1 flex-col'>
                          <div>
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                              <h3 className='line-clamp-1'>{item.name}</h3>
                              <p className='ml-4'>{StringUtils.formatPrice(item.price)}</p>
                            </div>
                            <p className='mt-1 line-clamp-2 text-sm text-gray-500'>{item.description}</p>
                          </div>

                          <div className='flex flex-1 items-end justify-between text-sm'>
                            <p className='text-gray-500'>QTY: {item.quantity}</p>

                            <div className='flex'>
                              <button
                                onClick={() => handleRemoveItemFromCart(item.id)}
                                type='button'
                                className='font-medium text-primary hover:text-red-600/80'>
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>

            <div className='border-t border-gray-200 px-4 pt-6 pb-10 sm:px-2'>
              <div className='flex justify-between text-base font-medium text-gray-900'>
                <p>Thành tiền:</p>
                <p>{StringUtils.formatPrice(totalPrice)}</p>
              </div>
              <p className='mt-0.5 text-sm text-gray-500'>Phí vận chuyển và thuế được tính khi thanh toán.</p>

              <div className='mt-6'>
                <Button className='w-full' onClick={handlePayment}>
                  Thanh toán
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
