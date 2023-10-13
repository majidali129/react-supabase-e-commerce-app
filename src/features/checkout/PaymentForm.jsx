import Button from "../../ui/Button";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import { useForm } from "react-hook-form";
import { useAddPaymentMethod } from "./useAddPaymentMethod";

const PaymentForm = () => {
  const { getPaymentMethod, gettingPaymentMethod } = useAddPaymentMethod();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit({
    paymentMethod,
    cardNumber,
    cardHolderName,
    expireDate,
    cvvNumber,
  }) {
    const paymentMethodObj = {
      payment_method: paymentMethod,
      card_number: cardNumber,
      card_holder_name: cardHolderName,
      expire_date: expireDate.replace("/", "-"),
      cvv: cvvNumber,
    };
    getPaymentMethod(paymentMethodObj, {
      onSettled: () => reset(),
    });
  }
  return (
    <section className="md:w-[50%] md:mx-auto bg-stone-50 mt-[1rem] py-10 px-3 rounded-md">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <FormRow className="flex-col" error={errors?.paymentMethod?.message}>
          <Label htmlFor="card" className="text-xl italic">
            Payment Method
          </Label>
          <select
            disabled={gettingPaymentMethod}
            name="paymentMethod"
            {...register("paymentMethod")}
            className="w-full py-2 border-none rounded-sm shadow-lg outline-none bg-inherit ring-2 ring-stone-300"
          >
            <option value="visa">VISA</option>
            <option value="masterCard">MasterCarD</option>
            <option value="amex">Amex</option>
            <option value="discover">Discover</option>
            <option value="jcb">JCB</option>
          </select>
        </FormRow>
        <FormRow className="flex-col" error={errors?.cardNumber?.message}>
          <Label htmlFor="cardNumber" className="text-xl italic">
            Credit Card Number
          </Label>
          <FormInput
            disabled={gettingPaymentMethod}
            id="cardNumber"
            placeholder="2390-4567-9034-1243"
            name="cardNumber"
            {...register("cardNumber", {
              required: "Make sure to provide correct card number",
              pattern: {
                value: /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
                message: `please previde valid number like 2390-4567-9034-1243 `,
              },
            })}
          />
        </FormRow>

        <FormRow className="flex-col" error={errors?.cardHolderName?.message}>
          <Label htmlFor="cardHolderName" className="text-xl italic">
            Cardholder Name
          </Label>
          <FormInput
            disabled={gettingPaymentMethod}
            id="cardHolderName"
            placeholder="Majid Ali"
            name="cardHolderName"
            {...register("cardHolderName", {
              required: "Card owner name is required",
            })}
          />
        </FormRow>

        <FormRow className="flex-col" error={errors?.expireDate?.message}>
          <Label html="expireDate" className="text-xl italic">
            Expiration Date
          </Label>
          <FormInput
            disabled={gettingPaymentMethod}
            id="expireDate"
            placeholder="MM/YY"
            name="expireDate"
            {...register("expireDate", {
              required: "please provide expiry date of your card",
            })}
          />
        </FormRow>
        <FormRow className="flex-col" error={errors?.cvvNumber?.message}>
          <Label html="cvvNumber" className="text-xl italic tracking-widest">
            CVV
          </Label>
          <FormInput
            disabled={gettingPaymentMethod}
            id="cvvNumber"
            name="cvvNumber"
            {...register("cvvNumber", {
              required: "Field can't be empty",
            })}
          />
        </FormRow>

        <FormRow>
          <Button
            disabled={gettingPaymentMethod}
            type="submit"
            variation="primary"
            className="w-full"
          >
            {" "}
            {gettingPaymentMethod ? "Making" : "MAKE A PAYMENT"}
          </Button>
        </FormRow>
      </form>
    </section>
  );
};

export default PaymentForm;
