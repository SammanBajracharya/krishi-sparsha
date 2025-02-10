import { useState, useEffect } from 'react';

function Payment() {
  const [amount, setAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(10); // Default tax amount
  const [serviceCharge, setServiceCharge] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [totalAmount, setTotalAmount] = useState(110); // Default total amount

  // Function to calculate total amount
  const calculateTotal = () => {
    const calculatedTotal = (parseFloat(amount) || 0) + (parseFloat(taxAmount) || 0) + (parseFloat(serviceCharge) || 0) + (parseFloat(deliveryCharge) || 0);
    setTotalAmount(calculatedTotal);
  };

  // Recalculate total amount whenever any input field changes
  useEffect(() => {
    calculateTotal();
  }, [amount, taxAmount, serviceCharge, deliveryCharge]);

  return (
    <div className="flex justify-center p-8 mx-auto">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-96 bg-gray-800 p-8 rounded-xl shadow-2xl"
        method="POST"
        id="payment-form"
      >
        {/* Title Section */}
        <h2 className="col-span-2 text-center text-2xl font-semibold text-white mb-6">Payment Checkout</h2>

        {/* Amount Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-white text-sm">Amount</label>
          <input
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        {/* Tax Amount Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="tax_amount" className="text-white text-sm">Tax Amount</label>
          <input
            type="number"
            id="tax_amount"
            name="tax_amount"
            value={taxAmount}
            onChange={(e) => setTaxAmount(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Total Amount Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="total_amount" className="text-white text-sm">Total Amount</label>
          <input
            type="number"
            id="total_amount"
            name="total_amount"
            value={totalAmount}
            readOnly
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Transaction UUID Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="transaction_uuid" className="text-white text-sm">Transaction ID</label>
          <input
            type="text"
            id="transaction_uuid"
            name="transaction_uuid"
            value="241028"
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Product Code Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="product_code" className="text-white text-sm">Product Code</label>
          <input
            type="text"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Service and Delivery Charges Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="product_service_charge" className="text-white text-sm">Service Charge</label>
          <input
            type="number"
            id="product_service_charge"
            name="product_service_charge"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
          <label htmlFor="product_delivery_charge" className="text-white text-sm">Delivery Charge</label>
          <input
            type="number"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value={deliveryCharge}
            onChange={(e) => setDeliveryCharge(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Success/Failure URLs */}
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="success_url" className="text-white text-sm">Success URL</label>
          <input
            type="text"
            id="success_url"
            name="success_url"
            value="https://developer.esewa.com.np/success"
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
          <label htmlFor="failure_url" className="text-white text-sm">Failure URL</label>
          <input
            type="text"
            id="failure_url"
            name="failure_url"
            value="https://developer.esewa.com.np/failure"
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Signature and Signed Fields */}
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="signature" className="text-white text-sm">Signature</label>
          <input
            type="text"
            id="signature"
            name="signature"
            value="i94zsd3oXF6ZsSr/kGqT4sSzYQzjj1W/waxjWyRwaME="
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
          <label htmlFor="signed_field_names" className="text-white text-sm">Signed Field Names</label>
          <input
            type="text"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-teal-500 text-white p-4 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 cursor-pointer col-span-2"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;
