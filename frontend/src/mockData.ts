import { faker } from "@faker-js/faker"
import { v4 as uuidv4 } from 'uuid';
import {
    CategorySchema,
    ProductSchema,
} from "./schemas/index";

const generatedProductNames = new Set<string>();

const generateMockProduct = () => {
    let productName;
    do {
        productName = faker.commerce.productName();
    } while (generatedProductNames.has(productName));
    generatedProductNames.add(productName);

    return ProductSchema.parse({
        id: uuidv4(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price({ min: 2, max: 50 })),
        image: faker.image.url(),
        salesNumber: faker.number.int({ min: 0, max: 500 }),
        category: faker.helpers.arrayElement(CategorySchema.options),
        quantity: faker.number.int({ min: 1, max: 1000 }),
        product_owner: uuidv4(),
    });
};

export const mockProducts = Array.from({ length: 20 }, generateMockProduct);

export const mockUsers = [
    {
        "id": "45f05d38-b5d4-4990-83fb-660cfc67f294",
        "email": "user1202@example.com",
        "username": "user7714",
        "user_type": "consumer",
        "address": "Address 76",
        "phone": "+123456789483",
        "city": "City 79",
        "image": "https://picsum.photos/seed/Sxt0ZVpk0E/1950/2140",
        "rating": 84
    },
    {
        "id": "21f60ead-ae6e-4279-a7b3-253629eb6630",
        "email": "user7536@example.com",
        "username": "user6538",
        "user_type": "business",
        "address": "Address 84",
        "phone": "+123456789725",
        "city": "City 23",
        "image": "https://loremflickr.com/1171/1112?lock=4649421534238569",
        "rating": 82
    },
    {
        "id": "231097ca-0529-46d2-87f5-e98077eca0c1",
        "email": "user7449@example.com",
        "username": "user7917",
        "user_type": "business",
        "address": "Address 11",
        "phone": "+123456789852",
        "city": "City 15",
        "image": "https://loremflickr.com/3507/3091?lock=7421265319759696",
        "rating": 75
    },
    {
        "id": "9251bf63-60dd-4d19-8378-b315a2eac502",
        "email": "user3256@example.com",
        "username": "user1679",
        "user_type": "consumer",
        "address": "Address 68",
        "phone": "+12345678996",
        "city": "City 9",
        "image": "https://loremflickr.com/473/3839?lock=7903545230991343",
        "rating": 76
    },
    {
        "id": "af72239b-c612-43a3-ae0b-00f7841b1c08",
        "email": "user6089@example.com",
        "username": "user1725",
        "user_type": "business",
        "address": "Address 68",
        "phone": "+123456789607",
        "city": "City 59",
        "image": "https://picsum.photos/seed/CNGgM/1846/2722",
        "rating": 96
    },
    {
        "id": "ae2b4f6a-144f-4011-af2f-a829ea81c221",
        "email": "user6465@example.com",
        "username": "user3636",
        "user_type": "consumer",
        "address": "Address 58",
        "phone": "+123456789923",
        "city": "City 40",
        "image": "https://picsum.photos/seed/v6Sq1/1854/3498",
        "rating": 85
    },
    {
        "id": "39b8b33d-dad8-417d-9ded-090e9bc4b075",
        "email": "user8844@example.com",
        "username": "user2475",
        "user_type": "consumer",
        "address": "Address 18",
        "phone": "+123456789358",
        "city": "City 96",
        "image": "https://loremflickr.com/575/3659?lock=5352751488948241",
        "rating": 87
    },
    {
        "id": "1bb77bd0-992b-4845-a85c-83e0c2b642b9",
        "email": "user6398@example.com",
        "username": "user8028",
        "user_type": "consumer",
        "address": "Address 7",
        "phone": "+123456789213",
        "city": "City 84",
        "image": "https://loremflickr.com/3481/947?lock=1051375761227075",
        "rating": 76
    },
    {
        "id": "620377ed-d899-4208-8731-1bf1259b9c89",
        "email": "user1360@example.com",
        "username": "user3857",
        "user_type": "business",
        "address": "Address 96",
        "phone": "+123456789817",
        "city": "City 36",
        "image": "https://loremflickr.com/3193/2140?lock=7651943719969383",
        "rating": 89
    },
    {
        "id": "6bcb828a-7fca-4bbf-a378-f35189c8bc17",
        "email": "user8712@example.com",
        "username": "user4636",
        "user_type": "consumer",
        "address": "Address 72",
        "phone": "+123456789908",
        "city": "City 57",
        "image": "https://picsum.photos/seed/CAjGtVNE/2813/244",
        "rating": 81
    },
    {
        "id": "02ad12b6-a806-432a-892e-92e8beda2ae3",
        "email": "user5673@example.com",
        "username": "user8358",
        "user_type": "business",
        "address": "Address 45",
        "phone": "+123456789311",
        "city": "City 5",
        "image": "https://picsum.photos/seed/iqJeBq/2103/873",
        "rating": 82
    },
    {
        "id": "5ad9ecf3-0f47-45b9-a451-fdbc2b2afb3d",
        "email": "user9149@example.com",
        "username": "user5550",
        "user_type": "consumer",
        "address": "Address 5",
        "phone": "+123456789797",
        "city": "City 39",
        "image": "https://picsum.photos/seed/Pr7fF/705/2245",
        "rating": 88
    },
    {
        "id": "92ddaef2-00ab-471b-a7b8-54e9ae0f18d5",
        "email": "user2789@example.com",
        "username": "user611",
        "user_type": "consumer",
        "address": "Address 30",
        "phone": "+123456789488",
        "city": "City 70",
        "image": "https://loremflickr.com/3804/2438?lock=7666963588417090",
        "rating": 82
    },
    {
        "id": "9be43166-6ec7-426a-95dd-77d036f3b3c6",
        "email": "user3200@example.com",
        "username": "user279",
        "user_type": "consumer",
        "address": "Address 48",
        "phone": "+123456789215",
        "city": "City 50",
        "image": "https://loremflickr.com/3774/3367?lock=8697571252265254",
        "rating": 100
    },
    {
        "id": "6e0bdd29-a567-43be-8e6d-1d4dfe255fa0",
        "email": "user9047@example.com",
        "username": "user6235",
        "user_type": "farmer",
        "address": "Address 86",
        "phone": "+123456789162",
        "city": "City 30",
        "image": "https://loremflickr.com/1809/1354?lock=3508011658370975",
        "rating": 70
    },
    {
        "id": "ecac94ff-fa72-441a-bd20-60bf50ecd869",
        "email": "user396@example.com",
        "username": "user6998",
        "user_type": "consumer",
        "address": "Address 49",
        "phone": "+123456789757",
        "city": "City 44",
        "image": "https://picsum.photos/seed/COpLJl4AE/554/3631",
        "rating": 96
    },
    {
        "id": "f3cfbdc5-d77f-4af8-a974-42eb511120f6",
        "email": "user4636@example.com",
        "username": "user150",
        "user_type": "consumer",
        "address": "Address 96",
        "phone": "+12345678955",
        "city": "City 15",
        "image": "https://picsum.photos/seed/6rfZGDK3/1071/279",
        "rating": 95
    },
    {
        "id": "27a7d999-6d8e-431c-a6c7-8dfa51e7947e",
        "email": "user543@example.com",
        "username": "user6484",
        "user_type": "consumer",
        "address": "Address 64",
        "phone": "+123456789784",
        "city": "City 61",
        "image": "https://loremflickr.com/636/2844?lock=4022236332536015",
        "rating": 74
    },
    {
        "id": "5594f66e-f899-4877-b9ad-6b1dfa188516",
        "email": "user5202@example.com",
        "username": "user3506",
        "user_type": "consumer",
        "address": "Address 25",
        "phone": "+123456789763",
        "city": "City 92",
        "image": "https://picsum.photos/seed/Hxg59R/3756/3596",
        "rating": 72
    },
    {
        "id": "3f8edfaa-2352-4a66-b5cf-4746241a893f",
        "email": "user4297@example.com",
        "username": "user6599",
        "user_type": "business",
        "address": "Address 34",
        "phone": "+123456789747",
        "city": "City 37",
        "image": "https://loremflickr.com/3091/3196?lock=6641693960811464",
        "rating": 72
    }
]

export const mockFarmers= [

        {
          "id": "2a2fe1e5-1fa2-4d2b-b2b2-e3ab25e3a7f5",
          "email": "john.doe@example.com",
          "username": "john_doe",
          "description": "A passionate farmer with years of experience in organic farming. Focused on sustainable practices.",
          "user_type": "farmer",
          "address": "123 Maple Street, Springfield, IL",
          "phone": "+1 555-123-4567",
          "image": "https://example.com/images/john.jpg",
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
          "image": "https://example.com/images/jane.jpg",
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
          "image": "https://example.com/images/alice.jpg",
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
          "image": "https://example.com/images/bob.jpg",
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
          "image": "https://example.com/images/carol.jpg",
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
          "image": "https://example.com/images/david.jpg",
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
          "image": "https://example.com/images/emily.jpg",
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
          "image": "https://example.com/images/frank.jpg",
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
          "image": "https://example.com/images/grace.jpg",
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
          "image": "https://example.com/images/henry.jpg",
          "discountCard": null
        },
        {
          "id": "65b118c7-84b2-4e8b-bb36-e9f9d6e99ae3",
          "email": "isla.martin@example.com",
          "username": "isla_martin",
          "description": "Health and wellness advocate, certified yoga instructor.",
          "user_type": "farmer",
          "address": "808 Magnolia Blvd, Salt Lake City, UT",
          "phone": "+1 555-123-6789",
          "image": "https://example.com/images/isla.jpg",
          "discountCard": {
            "cardNumber": "DC556677889",
            "expirationDate": "2024-08-14"
          }
        },
        {
          "id": "5f7e2d5b-5bcd-44f7-b2a0-5891c0a689be",
          "email": "jackson.brown@example.com",
          "username": "jackson_brown",
          "description": "Experienced chef and culinary consultant specializing in farm-to-table cuisine.",
          "user_type": "farmer",
          "address": "909 Cedar Hill Rd, Phoenix, AZ",
          "phone": "+1 555-234-7890",
          "image": "https://example.com/images/jackson.jpg",
          "discountCard": null
        },
        {
          "id": "1a53a55e-8c18-4274-b8f9-dfe8770b330b",
          "email": "katie.harris@example.com",
          "username": "katie_harris",
          "description": "Environmental scientist with a focus on climate change and renewable energy.",
          "user_type": "farmer",
          "address": "1010 Cedar Grove, Houston, TX",
          "phone": "+1 555-345-8901",
          "image": "https://example.com/images/katie.jpg",
          "discountCard": {
            "cardNumber": "DC667788990",
            "expirationDate": "2026-09-30"
          }
        },
        {
          "id": "3f3bb9f9-e798-43be-836e-b5b9ff63b9ef",
          "email": "luke.clark@example.com",
          "username": "luke_clark",
          "description": "Freelance photographer and videographer specializing in nature and outdoor adventure.",
          "user_type": "farmer",
          "address": "1111 Walnut Ave, San Francisco, CA",
          "phone": "+1 555-456-9012",
          "image": "https://example.com/images/luke.jpg",
          "discountCard": null
        } 
]