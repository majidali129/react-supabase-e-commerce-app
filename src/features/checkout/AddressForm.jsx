import React from "react";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import FormInput from "../../ui/FormInput";
import { useForm } from "react-hook-form";
import useAddAddress from "./useAddAddress";

const AddressForm = () => {
  const {addAddress, addingAddress} = useAddAddress()


  const {register, formState:{errors}, reset, handleSubmit} = useForm()

  function onSubmit ({customerName, streetName, city, state, country }) {
    // if(!customerName || !street || !city || !state || !country) return;

    const shippingAddress = {
    customer_name:customerName,
    street_name: streetName,
    city,
    state, 
    country
    };
    

    addAddress(shippingAddress, {
      onSettled: () => reset
    })

    // navigate('/payment-method')
  }
  return (
    <div className="bg-white md:w-[60%] mx-auto px-8 py-[3rem] mt-[2rem] rounded-md">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col items-start  gap-y-4">
        <FormRow className="flex-col" error={errors?.customerName?.message}>
          <Label htmlFor="customerName">Customer Name</Label>
          <FormInput disabled={addingAddress} id="customerName" name='customerName' placeholder="Hamza Rashid" {...register('customerName', {
            required: 'Please fill out the customer field properly'
          })}/>
        </FormRow>
        <FormRow className="flex-col" error={errors?.streetName?.message}>
          <Label htmlFor="streetName">Street Name</Label>
          <FormInput disabled={addingAddress} id="streetName" name='streetName' placeholder="Baba Chany Wala" {...register('streetName', {
            required: 'Street address is required'
          })} />
        </FormRow>
        <FormRow className="flex-col" error={errors?.city?.message}>
          <Label htmlFor="city">City</Label>
          <FormInput disabled={addingAddress} placeholder="Lahore" name='city' id="city" {...register('city', {
            required: 'Enter your city name for shipping'
          })} />
        </FormRow>
        <FormRow className="flex-col" error={errors?.state?.message}>
          <Label htmlFor="state">State/Province</Label>
          <FormInput disabled={addingAddress} id="state" placeholder="XYZ" name='state' {...register('state', {
            required: 'State field can\'t be empty'
          })} />
        </FormRow>
        <FormRow className="flex-col" error={errors?.country?.message}>
          <Label htmlFor="country">Country</Label>
          <FormInput disabled={addingAddress} id="country" name='country' placeholder="Pakistan" {...register('country', {
            required: 'Country name is necessary'
          })} />
        </FormRow>
        <FormRow className="items-center justify-between">
          <BackButton> &larr; Back</BackButton>
          <Button disabled={addingAddress} variation="primary" className="w-fit" type="submit">
            {addingAddress? 'Saving Address' : 'Add Address'}
          </Button>
        </FormRow>
      </form>
    </div>
  );
};

export default AddressForm;
