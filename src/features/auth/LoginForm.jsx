import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import useLogin from "./useLogin";
import Modal from "../../ui/Modal";

const LoginForm = () => {
  const { register, handleSubmit, formState: {errors},reset} = useForm();
  const {login, logingInUser} = useLogin()


  function onSubmit({email, password}) {
    if(!email || !password) return ;
    login({email, password}, {
        onSettled: () => reset()
    })
    
  }
  

  return (
    <div className="md:w-[40%] sm:w-[60%] w-[80%]  mx-auto bg-stone-50 rounded-md lg:mt-[5rem] md:mt-[4rem] mt-[3rem] py-10 px-4 space-y-6 shadow-xl">
        <h3 className="text-center">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormRow label="Email" className="flex-col" error={errors?.email?.message}>
          <FormInput
            type="email"
            name="email"
            id="emailAddress"
            disabled={logingInUser}
            {...register("email", {
                required: 'This field is required'
            })}
          />
        </FormRow>
        <FormRow label="Password" className="flex-col" error={errors?.password?.message}>
          <FormInput
            type="password"
            name="password"
            id="password"
            disabled={logingInUser}
            {...register("password", {
                required: 'This field is required'
            })}
          />
        </FormRow>

        <FormRow>
          <Button disabled={logingInUser} variation='primary' className='w-full' type="submit">Login</Button>
        </FormRow>
      </form>
    </div>

  );
};

export default LoginForm;
