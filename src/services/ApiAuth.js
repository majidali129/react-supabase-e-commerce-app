import supabase from "./supabase"


export const SignUp = async (email,password, fullName) => {    
    const {data, error} = await supabase
    .auth.signUp({
        email:email,
        password:password,
        options: {
            data: {
                fullName,
            }
        }
    });

    if(error) throw new Error('SignUp Error::' ,error.message)
    // if(error) throw new Error(error.message)

    return data;
}


export const Login = async (email, password) => {

    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error) throw new Error(error.message)

      return data;
  }


export const getCurrentUser = async () => {
    const {data:session} = await supabase.auth.getSession();

    if(!session?.session) return null;

    const { data:{ user },error } = await supabase.auth.getUser()

      if(error) throw new Error(error.message)      

      return user;
  }