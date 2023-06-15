# api-server
 
 [online deploying website](https://api-server-oydz.onrender.com/)

 ## Documintation:
 - get
      |GET|----|
      |---|----|
      | /clothes| (show all clothes) |
      | /cloth/:id| (show specific cloth) |
      | /clothesCustomers |  (show all Customers of clothes shop) |
      | /clothesCustomer/:id | (show one customer of clothes shop) |
      | /clothesCustomersRelation |  (show all relations between clothes and their customers)|
      | /theCustomerClothes/:id |  (show all clothes that this customer bought)|
      | /theClothCustomers/:id  | (show all customers who bought this cloth)|
      | /food | (show all foods) |
      | /food/:id | (show specific food)|
      | /foodCustomers | (show all customer of the food resturant)|
      | /foodCustomer/:id | (show one custumer of the food resturant)|
      | /foodCustomersRelations | ( show all relations between food and customers)|
      | /thecustomerfoods/:id |  (show all foods of one customer)|
      | /thefoodCustomers/:id |  (show all customer of one food)|
      | POST|   |
      | /cloth | (add cloth)|
      | /clothesCustomer | (add customer to the clothes shop)|
      | /clothesCustomersRelation | (add new relation between clothes and their customers)|
      | /food | (add new food)|
      | /foodCustomer | (add new customer to the food resturant)|
      | /foodCustomersRelation | (add new relation between food and food)|


- put

       | /cloth/:id | (update cloth) |
       |------------|--------------|
       | /clothesCustomer/:id |(update customer of cloth)|
       | /food/:id | (update one food)|
       | /foodCustomer/:id | (update one customer detail of the food resturant)|


- delete

       | /cloth/:id| (delete cloth)|
       |-----------|---------------|
       | /clothesCustomer/:id |(delete customer of cloth)|
       | /clothesCustomersRelation/:id |(delete all relation of one type of cloth)|
       | /food/:id  |(delete one food)|
       | /foodCustomer/:id | (delete one custumer for the food resturant)|
       | /foodCustomersRelations/:id |(delete all relations of one food)|
