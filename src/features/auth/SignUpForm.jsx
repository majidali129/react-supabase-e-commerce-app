import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput";
import Button from "../../ui/Button";
import useSignup from "./useSignup";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const {signUp, creatingAccount} = useSignup()
    const navigate = useNavigate()
  const {
    register,
    formState,
    handleSubmit,
    getValues,
    reset
  } = useForm({
    defaultValues: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
  });
  const {errors} = formState;
  

  function onSubmit({fullName, email, password}) {    
    if(fullName === '' || email === '' || password === '') return ;

    signUp({email, password, fullName}, {
        onSettled: () => reset(),
        onSuccess: () => navigate('/login')
    })

}  
  

  return (
    <section className="md:w-[50%] sm:w-[60%] w-[80%]  mx-auto bg-stone-50 rounded-md lg:mt-[5rem] md:mt-[4rem] mt-[3rem] py-10 px-4 space-y-6 shadow-xl">
      <h3 className="text-center font-semibold tracking-wide">Sign UP</h3>

      <form className="space-y-5" type='regular' onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          error={errors?.fullName?.message}
          className="flex-col"
          label="Full Name"
        >
          <FormInput
            placeholder="Majid Ali"
            type="text"
            id="fullName" 
            disabled={creatingAccount}
            {...register("fullName", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          error={errors?.email?.message}
          className="flex-col"
          label="Email Address"
        >
          <FormInput
            placeholder="poe@gmail.com"
            type="email"
            id="email" 
            disabled={creatingAccount}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
        </FormRow>

        <FormRow 
        error={errors?.password?.message} 
        className="flex-col"
        label='Password(min 8 characters)'
        >
          <FormInput
            type="password"
            id="password" 
            disabled={creatingAccount}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password length must be at least 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          error={errors?.confirmPassword?.message}
          className="flex-col"
          label="Repeat Password"
        >
          <FormInput
            type="password"
            id="confirmPassword" 
            disabled={creatingAccount}
            {...register("confirmPassword", {
              validate: (value) => value === getValues().password || 'Password should be match'
            })}
          />
        </FormRow>

        <FormRow className=" justify-between items-center">
            <Button type="reset" variation='primary' >
                Reset
            </Button>
          <Button
            variation="primary"
            type="submit"
            className="bg-green-800 text-green-50 w-fit"
            disabled={creatingAccount}
          >
            {" "}
            Sign Up{" "}
          </Button>
        </FormRow>
      </form>
      </section>

  );
};

export default SignUpForm;
