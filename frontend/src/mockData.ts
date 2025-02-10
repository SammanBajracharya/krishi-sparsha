import { faker } from "@faker-js/faker"
import { CategorySchema } from "./schemas/index";

export const mockData = [
    { price: 35, productName: "Potato" },
    { price: 35, productName: "Potato" },
    { price: 35, productName: "Potato" },
    { price: 35, productName: "Potato" },
];

const generateMockProduct = () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({ min: 2, max: 50 })),
    image: faker.image.url(),
    salesNumber: faker.number.int({ min: 0, max: 500 }),
    category: faker.helpers.arrayElement(CategorySchema.options), // Picks a random category
});

export const mockProducts = Array.from({ length: 10 }, generateMockProduct);
