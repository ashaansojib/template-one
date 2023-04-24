/**
 * some steps to manage a register page dynamically......
 * 1. create a login form
 * 2. create a function to handle form submit
 * 3. then stop reload to set => event.preventDefault();
 * 4. target form as like const form = event.target;
 * 5. then target input email or password from your form field as li email = form.email.value;
 * 6. create a common auth sharing file
 * 7. installed google firebase auth and add confiq file
 * 8. create firebase project and install npm install firebase
 * 9. create firebase confiq file and add config code
 * 1. create a auth and (call it with app file) and import it
 * 2. create a contex and export it then received a props {children} value from auth component 
 * 3. then pass this props into return authcomponent.provider
 * 4. to share context function all the component from there have your routes
*/