export const color = [
    "white",
    "black",
    "red",
    "marun",
    "being",
    "pink",
    "green",
    "yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "white" },
            { value: "being", label: "being" },
            { value: "blue", label: "blue" },
            { value: "brown", label: "brown" },
            { value: "green", label: "green" },
            { value: "purple", label: "purple" },
            { value: "yellow", label: "yellow" },
            { value: "pink", label: "pink" },
            
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "159-399" },
            { value: "399-999", label: "399-999" },
            { value: "999-1999", label: "999-1999" },
            { value: "1999-2999", label: "1999-2999" },
            { value: "3999-4999", label: "3999-4999" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
            
     ],
    },
];

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
