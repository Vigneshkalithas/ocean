import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from "react-toastify";





export function LoginPage() {
  const navigate = useNavigate();

  let formik = useFormik({

    initialValues : {
     email:"",
     password:""

    },
    validate : (values) => {

      let errors = {}

      if(!values.email){
        errors.email="please enter email"
      } 
       if(!values.password){
        errors.password="please enter password"
      }
     
      


      return errors

    },

  onSubmit : async (values) => {
    //  console.log(values);
    try{
      let data = await fetch ("http://localhost:4000/login",
      {
        method:"POST",
        body:JSON.stringify(values),
        headers : {
             "Content-type" : "application/json"
             }
      }
      ).then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.error==="user not found"){

          toast.error("Error: " + data.error);
          navigate("/login");

        }
       if(data.error){
          toast.error("Error: " + data.error);

        }
        else{
          // alert(data.message)
          localStorage.setItem("token",data.token);
          toast.success("Success: " + data.message);
          console.log(data.message);
          navigate("/home");
        }
      })

    // navigate('/tables')
    }
    catch(error){
console.log(error)
    }

},
   

})


  return (
    <div className="container login-container">

      <section className="forget text-center loginSection">
        
        <div className="image-login"></div>
        <div className="content-login">
          <h4 className="loginhead">Welcome Back!</h4>
          <div>

      <form onSubmit={formik.handleSubmit}>
            
              <div className="form-box">
                <div className="input-group mb-3">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the mail adress" /> */}
                <input name="email" onChange={formik.handleChange}  value={formik.values.email} type="email" className={`form-control ${formik.errors.email ? 'error-border' : " "}`} placeholder="Email" id="email" />
         
                </div>
                <div className="input-group mb-3">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Password" /> */}
                    <input name="password" onChange={formik.handleChange}  value={formik.values.password} type="text" className={`form-control ${formik.errors.password ? 'error-border' : " "}`} placeholder="enter password" id="password" />
         
                </div>

               

                <div className="d-grid gap-2">
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                     onClick={formik.handleSubmit}
                  >
                    Login
                  </a>
                  
                 
                </div>
                <div className="mt-3">
                  <a className="text-decoration-none " href="#">
                    Forgot password ?
                  </a>
                </div>
                <div className="mt-2">
                  <a className="text-decoration-none" href="#">
                    Create An Account !
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
