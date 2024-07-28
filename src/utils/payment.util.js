import axios from "axios";
import CryptoJS from "crypto-js";

const createPayOSPayment = async (amount, orderId) => {
  const apiKey = "844721fa-7889-4747-8a4d-ae0bb1370939";
  const secretKey = "db846d4e-a198-402d-877f-fb4f81c9a84e";
  const merchantCode = "ecf3797d017eb90dc7b32a7ed1c6aff5f380f9917975e8b7cd516d8d915f4158";
  const endpoint = "https://sandbox.payos.com.vn/api/payment";
  const returnUrl = "http://localhost:3000/payment-result";
  const notifyUrl = "http://localhost:3000/payment-notification";

  const requestData = {
    apiKey,
    merchantCode,
    orderId,
    amount,
    orderInfo: "Thanh toán qua PayOS",
    returnUrl,
    notifyUrl,
    currency: "VND",
  };

  // Tạo chữ ký bảo mật
  const rawSignature = `${apiKey}|${merchantCode}|${orderId}|${amount}|${secretKey}`;
  requestData.signature = CryptoJS.SHA256(rawSignature).toString(CryptoJS.enc.Hex);

  try {
    const response = await axios.post(endpoint, requestData);
    if (response.data && response.data.paymentUrl) {
      window.location.href = response.data.paymentUrl; // Redirect to PayOS payment page
    } else {
      console.error("Error creating PayOS payment", response.data);
    }
  } catch (error) {
    console.error("Error creating PayOS payment", error);
  }
};

export default createPayOSPayment;
