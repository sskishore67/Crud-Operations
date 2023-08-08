function Signupvalidation(values) {
   const mail=/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
   const password=/[A-Za-z]\w{6,14}/;
    const errors={};
    if(values.Firstname.trim() === "")
    errors.Firstname="Name is required";
    if(values.Lastname.trim() === "")
    errors.Lastname="Name is required";
    if(values.Email.trim()==="")
    errors.Email="Email is required";
    else if(!mail.test(values.Email))
    errors.Email="Enter correct email";
    if(values.Password.trim()==="")
    errors.Password="Password is required";
    else if(!password.test(values.Password))
    errors.Password="Enter correct Password Format";

    return errors;
}

export default Signupvalidation;