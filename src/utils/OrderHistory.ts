import { ProductType } from "./containerTypes"

type OrderStatus = "Delivered" | "Cancelled" | "In transit"
type OrderCardProps = {
    orderId: string
    orderStatus: OrderStatus,
    orderDate: string,
    products: ProductType[]
    total: number
}
const OrderHistory: OrderCardProps[] = [
    {
        "orderId": "1",
        "orderStatus": "Delivered",
        "orderDate": "2022-03-15",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            }],
        "total": 1782
    },
    {
        "orderId": "2",
        "orderStatus": "Cancelled",
        "orderDate": "2022-01-11",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
        ],
        "total": 1174
    },
    {
        "orderId": "3",
        "orderStatus": "In transit",
        "orderDate": "2022-07-25",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
        ],
        "total": 921
    },
    {
        "orderId": "4",
        "orderStatus": "Delivered",
        "orderDate": "2021-12-03",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              }
        ],
        "total": 724
    },
    {
        "orderId": "5",
        "orderStatus": "In transit",
        "orderDate": "2022-05-19",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              },
        ],
        "total": 1035
    },
    {
        "orderId": "6",
        "orderStatus": "Cancelled",
        "orderDate": "2022-09-12",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              },
        ],
        "total": 1122
    },
    {
        "orderId": "7",
        "orderStatus": "Delivered",
        "orderDate": "2023-01-01",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              },
        ],
        "total": 637
    },
    {
        "orderId": "8",
        "orderStatus": "In transit",
        "orderDate": "2022-02-16",
        "products": [
            {
                "id": "1",
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              },
        ],
        "total": 637
    }
]

export default OrderHistory 