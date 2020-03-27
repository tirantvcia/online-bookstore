-- insert sample data to book table
INSERT INTO tbl_book 
(
	sku, 
	name, 
    description, 
    image_url, 
    active, 
    units_in_stock,
    unit_price, 
    category_id,
    date_created
)
VALUES 
(
	'text-100', 
    'C Programming Language', 
    'Learn C Programming Language',
    'assets/images/books/text-100.png',
    1,
    100,
    600.00,
    1, 
    NOW()
);

INSERT INTO tbl_book 
(
	sku, 
	name, 
    description, 
    image_url, 
    active, 
    units_in_stock,
    unit_price, 
    category_id,
    date_created
)
VALUES 
(
	'text-101', 
    'C# Crash Course', 
    'Learn C# Programming Language',
    'assets/images/books/text-101.png',
    1,
    100,
    900.00,
    1, 
    NOW()
);
