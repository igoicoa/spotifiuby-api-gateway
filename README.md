# spotifiuby-api-gateway

Install all dependencies:
npm install

Run API Gateway:
npm run dev

To make request use
http://localhost:3000/{APIName}/{Path}

To add new services modify router/services.json file and add the new service with an api name and a base URL path:

{
    "services": {
        "employeesAPI": {
            "apiName": "employeesAPI",
            "url": "https://dummy.restapiexample.com/api/v1/"
        },
        "usersAPI": {
            "apiName": "usersAPI",
            "url": "https://gorest.co.in/public/v2/"
        }
    }
}

Example invoking GET: http://localhost:3000/employeesAPI/employees
![image](https://user-images.githubusercontent.com/11418054/165790851-ef2cda38-53a3-4713-aba9-b755480f3ed3.png)

Example invoking GET: http://localhost:3000/employeesAPI/employee/1
![image](https://user-images.githubusercontent.com/11418054/165791031-dafc56ea-d16a-47b9-9e79-7a49d407a352.png)

Example invoking POST: http://localhost:3000/employeesAPI/create
![image](https://user-images.githubusercontent.com/11418054/165791184-9aa9215e-4167-4d2e-8b6d-7beff343d22a.png)
