# steps to follow
1. create a new folder
2. open folder is vs code
3. Ensure node and npm is installed.(Install node from browser, and run commands node -v & npm -v to ensure they are installed)
4. Run the below commands to ensure dependencies are established 
npm install -g typescript
5. For auto generating package.json file, run
npm init -y
6. Install the below libraries
npm install typescript ts-node express @types/express morgan @types/morgan nodemon
TypeScript: for TypeScript compiler.
Ts-node: Allows us to run and configure Typescript execution environments.
Express: Node.js web application framework for setting and managing web-based server.
@types/express: Type definitions for Express.
Morgan: A Node.js HTTP request logger middleware for Node.js.
@types/morgan: Type definitions for Morgan.
Nodemon: This automatically restarts the server whenever code changes are detected.
7. To generate tsconfig.json , run the below command
tsc.cmd --init
8. Changes to tsconfig file to specify outDir/rootDir , modules and few other details.
9. Add scripts in package.json to build and compile the .ts file to the .js file.To run the microservice, we can call below command
npm run dev
10. Since rootdir is specified as source in tsconfig.json, add source folder, add controllers and routes folder under it.
11. for email service we are using nodemailer npm install nodemailer to ba able to save these details 
12. create emailcontroller.ts file inside controllers folder and place the logic inside the sendemail method
14. create routes.ts file inside routes folder and place the route required for the added controller method
15. Start development server using
npm run dev 
16. Test the api using postman, added the postman collection, make sure to update to & from address.


Run solution using below two commands:


>>npm install


>>npm run dev
