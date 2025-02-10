import { v4 as uuidv4 } from 'uuid';

export const mockProducts = [
    {
        id: uuidv4(),
        name: "Organic Apple",
        description: "Fresh organic apples sourced from local farms.",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1589217157232-464b505b197f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        salesNumber: 10,
        category: "fruits",
        quantity: 50,
        product_owner: uuidv4(),
        discount_applied: false,
    },
    {
        id: uuidv4(),
        name: "Dairy Milk",
        description: "Fresh farm milk, packed with nutrients.",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        salesNumber: 25,
        category: "dairy",
        quantity: 100,
        product_owner: uuidv4(),
        discount_applied: true,
    },
    {
        id: uuidv4(),
        name: "Tomato Seeds",
        description: "High-quality tomato seeds for home gardening.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        salesNumber: 5,
        category: "seeds",
        quantity: 200,
        product_owner: uuidv4(),
        discount_applied: false,
    },
    {
        id: uuidv4(),
        name: "Fresh Carrots",
        description: "Crunchy and sweet carrots, perfect for salads.",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        salesNumber: 15,
        category: "vegetables",
        quantity: 80,
        product_owner: uuidv4(),
        discount_applied: false,
    },
    {
        id: uuidv4(),
        name: "Rose Flowers",
        description: "Beautiful red roses, great for gifting.",
        price: 9.99,
        image: "https://plus.unsplash.com/premium_photo-1703689520237-3667a9b43453?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        salesNumber: 30,
        category: "flowers",
        quantity: 40,
        product_owner: uuidv4(),
        discount_applied: true,
    }
];

export const mockUsers = [
    {
        "id": "2a2fe1e5-1fa2-4d2b-b2b2-e3ab25e3a7f5",
        "email": "john.doe@example.com",
        "username": "john_doe",
        "description": "A passionate farmer with years of experience in organic farming. Focused on sustainable practices.",
        "user_type": "farmer",
        "address": "123 Maple Street, Springfield, IL",
        "phone": "+1 555-123-4567",
        "image": "https://images.unsplash.com/photo-1537721664796-76f77222a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": {
            "cardNumber": "DC123456789",
            "expirationDate": "2026-12-31"
        }
    },
    {
        "id": "3b0b1e6f-3f22-4fa7-9ad5-e5a9d5c2f607",
        "email": "jane.smith@example.com",
        "username": "jane_smith",
        "description": "Dedicated software developer, passionate about creating impactful digital experiences.",
        "user_type": "farmer",
        "address": "456 Oak Avenue, New York, NY",
        "phone": "+1 555-234-5678",
        "image": "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": {
            "cardNumber": "DC987654321",
            "expirationDate": "2025-11-30"
        }
    },
    {
        "id": "9e6d44a4-8d25-4f0e-8b9e-68f8a5491f1e",
        "email": "alice.jones@example.com",
        "username": "alice_jones",
        "description": "Creative artist with a love for painting and photography.",
        "user_type": "farmer",
        "address": "789 Pine Road, Los Angeles, CA",
        "phone": "+1 555-345-6789",
        "image": "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": {
            "cardNumber": "DC112233445",
            "expirationDate": "2024-06-15"
        }
    },
    {
        "id": "d87f5e5a-ecb4-49b7-b827-b8f0a819bf34",
        "email": "bob.miller@example.com",
        "username": "bob_miller",
        "description": "Tech enthusiast, hobbyist programmer, and occasional gamer.",
        "user_type": "farmer",
        "address": "101 Birch Lane, Miami, FL",
        "phone": "+1 555-456-7890",
        "image": "https://images.unsplash.com/photo-1545830790-68595959c491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": null
    },
    {
        "id": "eafc67d3-9a44-47e2-85fe-91428d9a3db6",
        "email": "carol.white@example.com",
        "username": "carol_white",
        "description": "Innovative marketer specializing in digital advertising and content creation.",
        "user_type": "farmer",
        "address": "202 Cedar Blvd, Austin, TX",
        "phone": "+1 555-567-8901",
        "image": "https://images.unsplash.com/photo-1626488033090-79f63fd81a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": {
            "cardNumber": "DC223344556",
            "expirationDate": "2025-05-20"
        }
    },
    {
        "id": "178fe8a7-c27d-4a02-8488-34ff45747397",
        "email": "david.lewis@example.com",
        "username": "david_lewis",
        "description": "Aspiring entrepreneur focused on technology-driven solutions for sustainability.",
        "user_type": "farmer",
        "address": "303 Redwood Drive, Seattle, WA",
        "phone": "+1 555-678-9012",
        "image": "https://plus.unsplash.com/premium_photo-1686269460461-2273fbe86711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": null
    },
    {
        "id": "998b2b21-cc5c-44fe-8193-6317d34754a3",
        "email": "emily.taylor@example.com",
        "username": "emily_taylor",
        "description": "Travel blogger and photographer, capturing the essence of the world's most beautiful places.",
        "user_type": "farmer",
        "address": "404 Willow Road, Chicago, IL",
        "phone": "+1 555-789-0123",
        "image": "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": {
            "cardNumber": "DC334455667",
            "expirationDate": "2026-03-10"
        }
    },
    {
        "id": "5c045f6c-dfc0-4b89-bdbf-f9fe6a6199f1",
        "email": "frank.moore@example.com",
        "username": "frank_moore",
        "description": "Full-stack developer with a passion for building innovative applications.",
        "user_type": "farmer",
        "address": "505 Fir Place, Boston, MA",
        "phone": "+1 555-890-1234",
        "image": "https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhcm1lcnN8ZW58MHx8MHx8fDA%3D",
        "discountCard": null
    },
    {
        "id": "c047ef65-327d-4790-bf24-e8e6d33f93ed",
        "email": "grace.wilson@example.com",
        "username": "grace_wilson",
        "description": "Senior UX/UI designer focused on creating intuitive and beautiful user interfaces.",
        "user_type": "farmer",
        "address": "606 Aspen Lane, Denver, CO",
        "phone": "+1 555-901-2345",
        "image": "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybWVyc3xlbnwwfHwwfHx8MA%3D%3D",
        "discountCard": {
            "cardNumber": "DC445566778",
            "expirationDate": "2027-01-01"
        }
    },
    {
        "id": "f3c8cb8f-fc8d-48b6-b575-9a6f1b168a24",
        "email": "henry.green@example.com",
        "username": "henry_green",
        "description": "Outdoor enthusiast and professional landscaper dedicated to transforming spaces.",
        "user_type": "farmer",
        "address": "707 Elm St, Portland, OR",
        "phone": "+1 555-012-3456",
        "image": "https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=600",
        "discountCard": null
    },
    {
        "id": "65b118c7-84b2-4e8b-bb36-e9f9d6e99ae3",
        "email": "isla.martin@example.com",
        "username": "isla_martin",
        "description": "Health and wellness advocate, certified yoga instructor.",
        "user_type": "farmer",
        "phone": "+1 555-123-6789",
        "image": "https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=600",
        "discountCard": {
            "cardNumber": "DC556677889",
            "expirationDate": "2024-08-14"
        }
    },
];
