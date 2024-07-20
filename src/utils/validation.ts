
export const validateForData = (email: any, password: any) => {

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!isValidEmail) return "Invalid email id!";
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if (!isValidPassword) return "Invalid password!";
    return null;
}