const restaurants = [
    {
        id: 1,
        name: "Pizza Paradise",
        cuisine: "Italian",
        rating: 4.5,
        deliveryTime: 30,
        deliveryFee: 2.99,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600"
    },
    {
        id: 2,
        name: "Sushi Master",
        cuisine: "Japanese",
        rating: 4.8,
        deliveryTime: 40,
        deliveryFee: 3.99,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600"
    },
    {
        id: 3,
        name: "Burger Joint",
        cuisine: "American",
        rating: 4.3,
        deliveryTime: 25,
        deliveryFee: 1.99,
        image: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=600"
    }
];

const foodCategories = [
    {
        id: 1,
        name: "Beef Specialties",
        description: "Premium cuts of beef prepared to perfection",
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600"
    },
    {
        id: 2,
        name: "Mutton Delights",
        description: "Tender and juicy mutton dishes",
        image: "https://images.unsplash.com/photo-1602491674275-316d3b361bbd?auto=format&fit=crop&w=600"
    },
    {
        id: 3,
        name: "Chicken Favorites",
        description: "Delicious chicken preparations",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600"
    },
    {
        id: 4,
        name: "Seafood Selection",
        description: "Fresh seafood dishes",
        image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=600"
    }
];

const foods = [
    // Beef Section
    {
        id: 1,
        name: "Premium Beef Steak",
        description: "Grilled to perfection with herbs",
        price: 24.99,
        category: "Beef",
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600"
    },
    {
        id: 2,
        name: "Beef Burger",
        description: "Juicy beef patty with fresh veggies",
        price: 12.99,
        category: "Beef",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600"
    },
    // Mutton Section
    {
        id: 3,
        name: "Mutton Curry",
        description: "Traditional spiced mutton curry",
        price: 18.99,
        category: "Mutton",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600"
    },
    {
        id: 4,
        name: "Grilled Lamb Chops",
        description: "Marinated and grilled lamb chops",
        price: 22.99,
        category: "Mutton",
        image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=600"
    },
    // Chicken Section
    {
        id: 5,
        name: "Grilled Chicken",
        description: "Herb-marinated grilled chicken",
        price: 15.99,
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600"
    },
    {
        id: 6,
        name: "Chicken Tikka",
        description: "Spicy chargrilled chicken pieces",
        price: 14.99,
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600"
    }
];

const categories = ["All", "Beef", "Mutton", "Chicken", "Seafood", "Vegetarian", "Desserts"];
