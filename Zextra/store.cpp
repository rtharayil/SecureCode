#include <iostream>
#include <crow.h>

int main() {
    crow::SimpleApp app;

    int* order_price = nullptr; // Create the pointer

    CROW_ROUTE(app, "/order/start")
    ([&order_price]() -> std::string {
        order_price = new int(25); // Allocate memory and assign the location to the pointer
        return "Order started for $" + std::to_string(*order_price);
    });

    CROW_ROUTE(app, "/order/confirm")
    ([&order_price]() -> std::string {
         // Check if the pointer is not null before accessing it
         if (order_price == nullptr) {
             return "Order not started yet";
         }

         // process_ticket(order_price)

         return "The price $" + std::to_string(*order_price) + " was noted on your ticket and will be charged upon entry"; // View the memory data at the pointer address
    });

    CROW_ROUTE(app, "/order/cancel")
    ([&order_price]() -> std::string {
        if (order_price == nullptr) {
            return "Order not started yet";
        }

        delete order_price; // Release the memory
        order_price = nullptr;
       
        return "Order canceled";
    });

    app.port(8888).run();
}