Usage 
1)(in terminal) cd products -> npm i -> npm run start 
1)(in terminal) cd cart -> npm i -> npm run start 
1)(in terminal) cd container -> npm i -> npm run start 

open http://localhost:8080/ for container app
open http://localhost:8081/ for products app
open http://localhost:8082/ for cart app

you can always change port in webpack.config.js

#tips 
bootstrap used for async loading of js files 
package.json app name related to remote name in webpack 
use node variables for data sharing 
node process error or any node error then update nodejs version 
dom id shoulde be never equal to remote name in webpack because both decare in document as a variable and error will occur as fn is not a function