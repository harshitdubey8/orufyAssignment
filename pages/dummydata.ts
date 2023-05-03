export interface DummyData {
  id: number;
  name: string;
  category: string;
  img: string;
  rating: number;
  price: number;
  oldPrice: number;
  discountPercentage: string;
}

export interface filterType {
  value: string;
  checked: boolean;
}

export interface filters {
  category: filterType[];
  price: filterType[];
  rating: filterType[];
}

export const dummyData: DummyData[] = [
  {
    id: 1,
    name: "Product A",
    category: "Electronics",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.5,
    price: 19.99,
    oldPrice: 29.99,
    discountPercentage: "33%",
  },
  {
    id: 2,
    name: "Product B",
    category: "Home & Kitchen",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 3.5,
    price: 49.99,
    oldPrice: 59.99,
    discountPercentage: "17%",
  },
  {
    id: 3,
    name: "Product C",
    category: "Books",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.8,
    price: 9.99,
    oldPrice: 14.99,
    discountPercentage: "33%",
  },
  {
    id: 4,
    name: "Product D",
    category: "Beauty",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.2,
    price: 29.99,
    oldPrice: 39.99,
    discountPercentage: "25%",
  },
  {
    id: 5,
    name: "Product E",
    category: "Sports & Outdoors",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.6,
    price: 79.99,
    oldPrice: 99.99,
    discountPercentage: "20%",
  },
  {
    id: 6,
    name: "Product F",
    category: "Fashion",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.1,
    price: 39.99,
    oldPrice: 49.99,
    discountPercentage: "20%",
  },
  {
    id: 7,
    name: "Product G",
    category: "Electronics",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 3.8,
    price: 99.99,
    oldPrice: 129.99,
    discountPercentage: "23%",
  },
  {
    id: 8,
    name: "Product H",
    category: "Home & Kitchen",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.7,
    price: 149.99,
    oldPrice: 199.99,
    discountPercentage: "25%",
  },
  {
    id: 9,
    name: "Product I",
    category: "Books",
    img: "https://dummyimage.com/300x300/000/fff",
    rating: 4.9,
    price: 14.99,
    oldPrice: 19.99,
    discountPercentage: "25%",
  },
];

export const filters: filters = {
  category: [
    { value: "Electronics", checked: false },
    { value: "Beauty", checked: false },
    { value: "Books", checked: false },
    { value: "Fashion", checked: false },
    { value: "Home & Kitchen", checked: false },
  ],

  rating: [
    { value: "1", checked: false },
    { value: "2", checked: false },
    { value: "3", checked: false },
    { value: "4", checked: false },
    { value: "5", checked: false },
  ],
  price: [
    { value: "10", checked: false },
    { value: "20", checked: false },
    { value: "60", checked: false },
    { value: "100", checked: false },
  ],
};
